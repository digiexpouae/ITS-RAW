"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Pricing() {
  const sectionRef = useRef();
  const wordRefs = useRef([]);
  const words = [
    "Dummy",
    "Silly",
    "Stupid",
    "Dumb",
    "Goof",
    "Crazy",
    "Weird",
    "Joker",
    "Loser",
    "Lame"
  ];
  useEffect(() => {
    if (!sectionRef.current) return;

    // Hide all words initially
    gsap.set(wordRefs.current, { opacity: 0 });
    gsap.set(wordRefs.current[0], { opacity: 1 }); // show first word initially

    let currentIndex = 0;

    const animateNextWord = () => {
      const current = wordRefs.current[currentIndex];
      const nextIndex = (currentIndex + 1) % words.length;
      const next = wordRefs.current[nextIndex];

      gsap.timeline({
        onComplete: () => {
          currentIndex = nextIndex;
          animateNextWord(); // recursively call to animate next word
        },
      })
        .to(current, {
          opacity: 0,
          xPercent: -20,
          duration: 0.6,
          ease: "power2.out",
          delay: 1, // stays visible before moving
        })
        .fromTo(
          next,
          { opacity: 0, xPercent: 20 },
          { opacity: 1, xPercent: 0, duration: 0.6, ease: "power2.out" }
        );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNextWord(); // start animation when section comes into view
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      gsap.killTweensOf(wordRefs.current);
    };
  }, [words]);

  return (
    <section
      className="w-full py-20 md:py-12 flex items-center justify-center overflow-hidden"
      ref={sectionRef}
    >
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
          <h2 className="text-7xl text-start md:text-[70px] font-extrabold leading-[1] md:leading-none relative">
            <span className="text-black">DON'T BE AN</span>{" "}
            {words.map((word, i) => (
              <span
                key={i}
                ref={(el) => (wordRefs.current[i] = el)}
                className="text-red-500 absolute px-4 opacity-0 uppercase"
              >
                {word}
              </span>
            ))}
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
