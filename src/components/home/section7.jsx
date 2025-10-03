"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
export default function Pricing() {
  const sectionRef = useRef()
  const text = useRef();   // "IDIOT"
  const text2 =useRef()  // "Fool"
  const text3 =useRef()  // "Fool"


 

  useEffect(() => {
    if (!sectionRef.current || !text.current || !text2.current) return;

    // Ensure initial state
    gsap.set(text2.current, { opacity: 0 });
    gsap.set(text3.current, { opacity: 0 });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = gsap.timeline();

            // Step 1: Fade in IDIOT
            
            // Step 2: Slide IDIOT out
            tl.to(
              text.current,
              {
                xPercent: -20,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out",
              },
              "+=1"
            );

            // Step 3: Show FOOL
            tl.fromTo(
              text2.current,
              { opacity: 0 },
              { opacity: 1, duration: 0.5, ease: "power2.out" }
            );tl.to(
              text2.current,
              {
                xPercent: -20,
                opacity: 0,
                duration: 0.5,
                ease: "power2.out",
              },
              "+=1"
            );


            tl.fromTo(
              text3.current,
              { opacity: 0 },
              { opacity: 1, duration: 0.5, ease: "power2.out" }
            );


            // Unobserve so it only runs once
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3, // fire when 30% of section is visible
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);




  return (
    <section className="w-full py-20 md:py-12 flex items-center justify-center overflow" ref={sectionRef}>
      <div className="md:w-[90%] lg:w-[80%] px-6 md:px-0 flex-col md:flex-row flex gap-4 items-center justify-center">
        
        {/* Left Column - Image */}
        <div className="flex justify-center md:w-[40%]">
          <Image
            src="/assets/home/group-people.png"
            alt="Don't be an idiot"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div className="md:w-[60%] flex flex-col items-center">
          <h2 className="text-7xl text-start md:text-[70px]  font-extrabold leading-[1] md:leading-none">
            <span className="text-black">DON'T BE AND</span>{" "}
            <span className="text-red-500 absolute px-4" ref={text}>
              IDIOT
            </span>
            <span className="text-red-500 opacity-0 absolute px-4" ref={text2}>
              Fool
            </span>
            <span className="text-red-500 opacity-0 absolute px-4" ref={text3}>
              Clown
            </span>
          </h2>
          <p className="mt-4 text-black text-center text-base md:text-xl">
            Legally we cannot call you an ‘idiot s*****ch’, as a very famous
            chap with a ranty personality trademarked it. But if you don’t use
            ItsRaw, you really are one…
          </p>
        </div>
      </div>
    </section>
  );
}
