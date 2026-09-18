"use client";

import { FormEvent, useState } from "react";
import { buildQuoteWhatsAppLink } from "@/lib/whatsapp";

export default function SurMesureForm() {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [delai, setDelai] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const link = buildQuoteWhatsAppLink({ nom, description, dimensions, delai });
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const inputClasses =
    "w-full rounded-card-inner border border-sable bg-paper px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-ink/40";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="nom" className="mb-1.5 block text-sm font-medium text-ink/80">
          Votre nom
        </label>
        <input
          id="nom"
          required
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Prénom et nom"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-ink/80">
          Décrivez votre projet
        </label>
        <textarea
          id="description"
          required
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="La pièce que vous avez en tête, son usage, une référence visuelle si vous en avez une..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="dimensions" className="mb-1.5 block text-sm font-medium text-ink/80">
            Dimensions envisagées
            <span className="ml-1 font-normal text-ink/40">(optionnel)</span>
          </label>
          <input
            id="dimensions"
            value={dimensions}
            onChange={(e) => setDimensions(e.target.value)}
            placeholder="Ex. 20 x 15 x 10 cm"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="delai" className="mb-1.5 block text-sm font-medium text-ink/80">
            Délai souhaité
            <span className="ml-1 font-normal text-ink/40">(optionnel)</span>
          </label>
          <input
            id="delai"
            value={delai}
            onChange={(e) => setDelai(e.target.value)}
            placeholder="Ex. sous deux semaines"
            className={inputClasses}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-2 flex h-12 w-full sm:w-fit items-center justify-center rounded-full bg-ink px-8 text-sm font-semibold text-cream shadow-sm transition-transform hover:bg-ink/90 active:scale-[0.97]"
      >
        Envoyer la demande sur WhatsApp
      </button>
      <p className="text-xs text-ink/45">
        Le message s&apos;ouvre dans WhatsApp avec les informations ci-dessus
        déjà pré-remplies — vous pouvez les compléter avant l&apos;envoi.
      </p>
    </form>
  );
}
