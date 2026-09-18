"use client";

import { useRef, useState } from "react";

export default function WorkshopVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      onClick={togglePlay}
      className="group relative aspect-[4/3] w-full max-w-xl mx-auto overflow-hidden rounded-card bg-charcoal shadow-lifted outline outline-1 -outline-offset-1 outline-black/10 cursor-pointer"
    >
      <video
        ref={videoRef}
        src="/video/process-3d.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="h-full w-full object-cover scale-[1.32] transition-transform duration-700 ease-out"
      />

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-charcoal/30 backdrop-blur-[2px] transition-opacity">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-paper/90 text-ink shadow-lg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-1"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
