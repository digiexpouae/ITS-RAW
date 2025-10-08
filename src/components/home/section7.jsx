"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Pricing() {
  const sectionRef = useRef();
  const wordRefs = useRef([]);
  const words = [
    'baguette',
  'bap',
  'roll',
  'focaccia',
  'wrap',
  'sub',
  'hoagie',
  "po'boy",
  'panini',
  'banh mi',
  // 'croque monsieur',
  'cubano',
  'tonkatsu',
  'bagel',
  'pita',

]



  // control refs to kill tweens/delayedCalls on cleanup
  const started = useRef(false);
  const activeTween = useRef(null);
  const delayedCallRef = useRef(null);
  const displayTime = 1.0; // seconds each word stays before transitioning
  const transitionDuration = 0.6; // duration of fade / slide

  useEffect(() => {
    if (!sectionRef.current) return;
    if (!words || words.length === 0) return;

    // set initial states: hide all, show first
    gsap.set(wordRefs.current, { opacity: 0, xPercent: 0 });
    gsap.set(wordRefs.current[0], { opacity: 1, xPercent: 0 });

    let currentIndex = 0;

    const animateNext = () => {
      const nextIndex = (currentIndex + 1) % words.length;

      // kill any previous tween just in case
      if (activeTween.current) {
        activeTween.current.kill();
        activeTween.current = null;
      }

      // timeline for current -> next
      activeTween.current = gsap
        .timeline({
          onComplete: () => {
            currentIndex = nextIndex;
            // schedule next cycle after displayTime
            delayedCallRef.current = gsap.delayedCall(displayTime, animateNext);
          },
        })
        .to(wordRefs.current[currentIndex], {
          opacity: 0,
          xPercent: -20,
          duration: transitionDuration,
          ease: "power2.inOut",
        })
        .fromTo(
          wordRefs.current[nextIndex],
          { opacity: 0, xPercent: 20 },
          { opacity: 1, xPercent: 0, duration: transitionDuration, ease: "power2.inOut" }
        );
    };

    const startAnimation = () => {
      if (started.current) return;
      started.current = true;
      // give the first word some display time before starting transition
      delayedCallRef.current = gsap.delayedCall(displayTime, animateNext);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) startAnimation();
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      // kill any running tweens / delayedCalls
      if (activeTween.current) activeTween.current.kill();
      if (delayedCallRef.current) delayedCallRef.current.kill();
      gsap.killTweensOf(wordRefs.current);
    };
  }, [words]);

  return (
    <section
      className="w-full py-20 md:py-12 flex items-center justify-center overflow-hidden"
      ref={sectionRef}
    >
      <div className="md:w-[90%] lg:w-[80%] px-6 md:px-0 flex-col md:flex-row flex  items-center justify-center">
        <div className="flex justify-start w-full md:w-1/3">
          <Image
            src="/assets/home/group-people.png"
            alt="Don't be an idiot"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>

        <div className=" w-full md:w-1/2 flex flex-col md:items-center">
          <h2 className="text-5xl md:w-full text-start mb-8 md:mb-0  md:text-6xl font-extrabold leading-[1] md:leading-none relative">
            <span className="text-black  ">DON'T BE AN</span>{" "}
            {words.map((word, i) => (
              <span
                key={i}
                ref={(el) => (wordRefs.current[i] = el)}
                className="text-red-500 top-10 mt-2 md:mt-0 left-0 md:left-auto md:top-0 md:px-4 absolute uppercase"
         style={{whiteSpace:'nowrap'}}
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
