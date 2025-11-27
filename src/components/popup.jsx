"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

import { useRef } from "react";
export default function LoaderPopup({ isOpen }) {
  const [percent, setPercent] = useState(0);
  const [showDrop, setShowDrop] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const ribbonRef=useRef()
  useEffect(() => {
  
  if (!isOpen) return;
 setIsVisible(true)
    setPercent(0);
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
              setShowDrop(true);

          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isOpen]);
useEffect(()=>{
    if(!ribbonRef) return
     const tl = gsap.timeline();
    
          // Ribbon reveal
         
              gsap.to(ribbonRef.current, {
            y: "-=10", // smaller float on mobile
            duration: 1,
            repeat: -1,
            opacity: 1,
            yoyo: true,
            ease: "power1.inOut",
          });
},[isOpen])
  if (!isVisible) return null

  return (
    <div className={`fixed inset-0  h-screen w-full flex flex-col justify-center items-center z-[999999] bg-cover 
        transition-opacity duration-300 
      ${isOpen ? "opcity-100" : "opacity-0 hidden"}`} style={{background:'url(/assets/dashboard/raw.png)'}}>
    <div className="block absolute h-full w-full inset-0  ">
    <Image src="/assets/home/Vector.webp" alt="section1"  ref={ribbonRef} width={1900} height={800} className="object-contain trnasform  h-full w-full translate-y-40 md:translate-y-10"/>
    </div>
      <div className="bg-white relative z-20 rounded-2xl shadow-lg p-6 text-center">
    <div className="relative w-20 h-20 mx-auto flex justify-center items-center">
  
  {/* Spinning ring */}
  <div className="absolute w-20 h-20 rounded-full border-4 border-[#eaa8a8] border-t-[#ff6347] animate-spin"></div>
  
  {/* Static percentage text */}
  <span className="relative text-sm font-medium">
    {percent}%
  </span>

</div>


       
      </div>
       <p className="mt-4 text-3xl font-bold  tracking-wide" style={{  fontFamily: 'Subscribe'}}>
          LOADING
        </p>
      </div>
  );
}
