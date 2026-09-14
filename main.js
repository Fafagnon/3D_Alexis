/**
 * 3D D'ALEXIS — Script Principal
 * Hero animé (Canvas bulles + Three.js icosaèdre), Header sticky, Drawer mobile & Devis
 */

(function () {
  'use strict';

  // Détection du respect des préférences d'animation de l'utilisateur
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. Header Sticky & Navigation
     ========================================================================== */
  const siteHeader = document.getElementById('siteHeader');
  const navToggle = document.getElementById('navToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileAccordionToggle = document.getElementById('mobileAccordionToggle');
  const mobileSubmenu = document.getElementById('mobileSubmenu');

  function handleScroll() {
    if (window.scrollY > 20) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile Drawer Toggle
  if (navToggle && mobileDrawer) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('is-open');
      navToggle.classList.toggle('is-active');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile drawer when clicking a regular link
    mobileDrawer.querySelectorAll('a:not(.mobile-accordion-toggle)').forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('is-open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // Mobile Accordion Toggle ("Nos services")
  if (mobileAccordionToggle && mobileSubmenu) {
    mobileAccordionToggle.addEventListener('click', () => {
      const expanded = mobileSubmenu.classList.toggle('is-expanded');
      mobileAccordionToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      const arrow = mobileAccordionToggle.querySelector('.dropdown-caret');
      if (arrow) {
        arrow.style.transform = expanded ? 'rotate(180deg)' : 'rotate(0deg)';
      }
    });
  }

  /* ==========================================================================
     2. Canvas 2D — Animation de bulles ascendantes
     Évoque les micro-bulles de polymérisation des résines SLA
     ========================================================================== */
  const canvas = document.getElementById('bubbleCanvas');
  const heroSection = document.getElementById('heroSection');

  if (canvas && heroSection) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let bubbles = [];
    let animationFrameId = null;

    function resizeCanvas() {
      width = heroSection.offsetWidth;
      height = heroSection.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    }

    function createBubble(initialY = null) {
      return {
        x: Math.random() * width,
        y: initialY !== null ? initialY : height + Math.random() * 80,
        r: 4 + Math.random() * 9,                     // Rayon 4-13px
        speed: 0.18 + Math.random() * 0.28,           // Vitesse lente 0.18-0.46px/frame
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.015 + Math.random() * 0.01,
        wobbleAmp: 4 + Math.random() * 4,
        isAccent: Math.random() < 0.35                // 35% corail, 65% blanc
      };
    }

    function initBubbles() {
      resizeCanvas();
      const isMobile = window.innerWidth < 640;
      const count = isMobile ? 14 : 28; // Allégé sur mobile
      bubbles = [];
      for (let i = 0; i < count; i++) {
        // Distribution initiale répartie sur toute la hauteur
        bubbles.push(createBubble(Math.random() * height));
      }
    }

    function updateAndDrawBubbles() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];
        b.y -= b.speed;
        b.wobble += b.wobbleSpeed;
        const currentX = b.x + Math.sin(b.wobble) * b.wobbleAmp;

        // Si la bulle sort par le haut, réinitialisation en bas
        if (b.y < -20) {
          bubbles[i] = createBubble();
          continue;
        }

        ctx.beginPath();
        ctx.arc(currentX, b.y, b.r, 0, Math.PI * 2);

        if (b.isAccent) {
          ctx.strokeStyle = 'rgba(216, 90, 48, 0.45)';
          ctx.fillStyle = 'rgba(216, 90, 48, 0.08)';
        } else {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.30)';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        }

        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(updateAndDrawBubbles);
      }
    }

    initBubbles();
    updateAndDrawBubbles();

    window.addEventListener('resize', () => {
      initBubbles();
      if (prefersReducedMotion) {
        updateAndDrawBubbles();
      }
    });
  }

  /* ==========================================================================
     3. Three.js — Élément 3D filaire (Icosaèdre en rotation)
     Symbolise la tessellation polygonale des fichiers de fabrication (STL/OBJ)
     ========================================================================== */
  const threeMount = document.getElementById('threeMount');

  if (threeMount && typeof THREE !== 'undefined') {
    const scene = new THREE.Scene();

    const getMountSize = () => {
      const rect = threeMount.getBoundingClientRect();
      const size = Math.max(64, Math.min(rect.width || 84, 120));
      return { width: size, height: size };
    };

    const initialSize = getMountSize();
    const camera = new THREE.PerspectiveCamera(45, initialSize.width / initialSize.height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'low-power'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(initialSize.width, initialSize.height);
    threeMount.appendChild(renderer.domElement);

    // Géométrie icosaèdre avec arrêtes filaires
    const geometry = new THREE.IcosahedronGeometry(1.3, 0);
    const edges = new THREE.EdgesGeometry(geometry);
    const material = new THREE.LineBasicMaterial({
      color: 0xD85A30, // Corail officiel
      linewidth: 1.5,
      transparent: true,
      opacity: 0.95
    });

    const mesh = new THREE.LineSegments(edges, material);
    scene.add(mesh);

    // Micro-interaction : inclinaison interactive selon la souris
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    if (!prefersReducedMotion && window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', (e) => {
        const normX = (e.clientX / window.innerWidth) * 2 - 1;
        const normY = (e.clientY / window.innerHeight) * 2 - 1;
        targetTiltX = normY * 0.4;
        targetTiltY = normX * 0.4;
      }, { passive: true });
    }

    // Gestion du redimensionnement
    window.addEventListener('resize', () => {
      const s = getMountSize();
      camera.aspect = s.width / s.height;
      camera.updateProjectionMatrix();
      renderer.setSize(s.width, s.height);
    });

    // Boucle d'animation
    function animateThree() {
      if (!prefersReducedMotion) {
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.008;

        // Amortissement de l'inclinaison utilisateur
        currentTiltX += (targetTiltX - currentTiltX) * 0.05;
        currentTiltY += (targetTiltY - currentTiltY) * 0.05;

        mesh.rotation.x += currentTiltX * 0.02;
        mesh.rotation.z = currentTiltY * 0.2;
      }

      renderer.render(scene, camera);

      if (!prefersReducedMotion) {
        requestAnimationFrame(animateThree);
      }
    }

    animateThree();
  }

  /* ==========================================================================
     3b. Carrousel Défilant 3 Réalisations (Hero)
     ========================================================================== */
  const heroSlider = document.getElementById('heroSlider');
  const slides = document.querySelectorAll('.showcase-slide');
  const dots = document.querySelectorAll('.indicator-dot');
  const prevBtn = document.getElementById('sliderPrevBtn');
  const nextBtn = document.getElementById('sliderNextBtn');
  const counterEl = document.getElementById('sliderCounter');

  if (heroSlider && slides.length > 0) {
    let activeIndex = 0;
    const totalSlides = slides.length;
    let autoPlayTimer = null;

    function showSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      activeIndex = index;

      slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === activeIndex);
      });

      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIndex);
      });

      if (counterEl) {
        counterEl.textContent = `0${activeIndex + 1} / 0${totalSlides}`;
      }
    }

    function nextSlide() {
      showSlide(activeIndex + 1);
    }

    function prevSlide() {
      showSlide(activeIndex - 1);
    }

    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const slideIndex = parseInt(dot.getAttribute('data-slide'), 10);
        if (!isNaN(slideIndex)) showSlide(slideIndex);
      });
    });

    function startAutoPlay() {
      if (prefersReducedMotion) return;
      stopAutoPlay();
      autoPlayTimer = setInterval(nextSlide, 4200);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    heroSlider.addEventListener('mouseenter', stopAutoPlay);
    heroSlider.addEventListener('mouseleave', startAutoPlay);
    heroSlider.addEventListener('touchstart', stopAutoPlay, { passive: true });
    heroSlider.addEventListener('touchend', startAutoPlay, { passive: true });

    startAutoPlay();
  }

  /* ==========================================================================
     4. Modal Devis Express
     ========================================================================== */
  const quoteModal = document.getElementById('quoteModal');
  const quoteButtons = document.querySelectorAll('[data-open-quote]');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const quoteForm = document.getElementById('quoteForm');

  function openQuoteModal() {
    if (!quoteModal) return;
    quoteModal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
    const firstInput = quoteModal.querySelector('input, select');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  }

  function closeQuoteModal() {
    if (!quoteModal) return;
    quoteModal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  quoteButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openQuoteModal();
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeQuoteModal);
  }

  if (quoteModal) {
    quoteModal.addEventListener('click', (e) => {
      if (e.target === quoteModal) {
        closeQuoteModal();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && quoteModal.classList.contains('is-active')) {
        closeQuoteModal();
      }
    });
  }

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Envoi de votre demande...';

      setTimeout(() => {
        quoteForm.innerHTML = `
          <div style="padding: 30px 10px; text-align: center;">
            <div style="width: 48px; height: 48px; border-radius: 50%; border: 1.5px solid #D85A30; color: #D85A30; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 style="font-family: var(--font-display); font-size: 1.25rem; margin-bottom: 8px; color: #FFFFFF;">Demande reçue</h3>
            <p style="font-size: 0.88rem; color: var(--text-secondary-dark); line-height: 1.6; max-width: 360px; margin: 0 auto 24px;">
              Notre équipe technique analyse vos spécifications et votre fichier sous 24h ouvrées.
            </p>
            <button type="button" class="btn-cta btn-primary" id="modalFinishBtn" style="padding: 10px 20px;">Fermer</button>
          </div>
        `;
        document.getElementById('modalFinishBtn').addEventListener('click', closeQuoteModal);
      }, 600);
    });
  }
})();
