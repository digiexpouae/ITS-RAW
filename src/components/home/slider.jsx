import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Marquee() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
200
120
200
200
120
 const images = [
    { src: "/assets/home/L-2.svg", width: 170, height: 80 },
    { src: "/assets/home/L-1.svg", width: 120, height: 60 },
    { src: "/assets/home/L-6.svg", width: 170, height: 80 },
    { src: "/assets/home/L-5.svg", width: 80, height: 54  },
    { src: "/assets/home/L-4.svg", width:170, height: 80 },
    { src: "/assets/home/L-3.svg", width: 170, height: 80 },
    { src: "/assets/home/L-5.svg", width: 80, height: 54 },
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
    <div ref={containerRef} className="hidden md:block overflow-hidden  w-full">
      <div ref={trackRef} className="flex gap-12 items-center whitespace-nowrap">
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
