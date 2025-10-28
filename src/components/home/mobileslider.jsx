import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Marquee() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

 const images = [
    { src: "/assets/home/L-2.svg", width: 100, height: 70 },
    { src: "/assets/home/L-1.svg", width: 100, height: 70 },
    { src: "/assets/home/L-6.svg", width: 100, height: 70 },
    { src: "/assets/home/L-5.svg", width: 100, height: 74 },
    { src: "/assets/home/L-4.svg", width: 100, height: 70 },
    { src: "/assets/home/L-3.svg", width: 100, height: 70 },
    { src: "/assets/home/L-5.svg", width: 100, height: 74 },
  ];
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // Duplicate the content once for seamless loop
    const cloned = track.innerHTML;
    track.innerHTML += cloned;

    const totalWidth = track.scrollWidth / 2; // width of one set

    gsap.to(track, {
      x: -totalWidth,
      ease: "linear",
      duration: 20,
      repeat: -1,
    });
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden md:hidden  w-full">
      <div ref={trackRef} className="flex items-center whitespace-nowrap">
        {images.map((img, i) => (
          <span key={i} className="flex-shrink-0 mx-4">
            <Image
              src={img.src}
             width={img.width} height={img.height}
              className="object-cover"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
