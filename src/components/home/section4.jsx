import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
export default function SecretSauce() {
 const ketchup=useRef(null)
 const observer = useRef(null);
 const headingbounce=useRef(null)
const chef=useRef(null)
const sectionref=useRef(null)
//  useEffect(() => {
//   if (!ketchup.current) return;

//   // Create Intersection Observer
//   observer.current = new IntersectionObserver(
//     ([entry]) => {
//       if (entry.isIntersecting) {
//         // Timeline with infinite repeat and yoyo for in/out animation
//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: sectionref.current,
//             start:"center center",
//             end: "+=4000",
//             pin: true,
//             scrub: 2,
//           },
//         })
//         gsap.set(
//           ketchup.current,
//           { clipPath: "inset(0 100% 0 0)" })
//           tl.to(  ketchup.current,{
//             clipPath: "inset(0 0% 0 0)", // fully visible
//             duration: 4,
       
//             ease: "bounce.out",
//           })
          
        
      
//         const pupils = document.querySelectorAll('.ball');
//         const maxTrans = 35;
//         let maxXDist, maxYDist;
//         gsap.set(pupils,{xPercent:0,yPercent:0});
//         function resize() {
//           maxXDist = innerWidth / 2;
//           maxYDist = innerHeight / 2;
//         }
      
//         function updateTrans(e) {
//           pupils.forEach(pupil => {
//             // Calculate center for each pupil individually
//             const eyeArea = pupil.getBoundingClientRect();
//             const R = eyeArea.width / 2;
//             const centerX = eyeArea.left + R;
//             const centerY = eyeArea.top + R;
            
//             const x = e.clientX - centerX;
//             const y = e.clientY - centerY;
            
//             const xPercent = x / maxXDist;
//             const yPercent = y / maxYDist;
            
//             const scaledXPercent = xPercent * maxTrans;
//             const scaledYPercent = yPercent * maxTrans;
            
//             // Animate each pupil based on its own center
//             gsap.to(pupil, { 
//               xPercent: scaledXPercent, 
//               yPercent: scaledYPercent, 
//               duration: 0.2, 
//               overwrite: 'auto' 
//             });
//           });
//         }
      
//         window.addEventListener('resize', resize);
//         resize();
//         document.querySelector('body').addEventListener('mousemove', updateTrans);

//         // gsap.to(headingbounce.current, {
//         //   y: "-=10",
//         //   duration: 1,
//         //   repeat: -1,
//         //   yoyo: true,
//         //   ease: "power1.inOut",
//         // });

//         // gsap.to(chef.current, {
//         //   xPercent: "-=10",
//         //   duration: 1,
//         //   repeat: -1,
//         //   yoyo: true,
//         //   ease: "power1.inOut",
//         // });
    
//         observer.current.disconnect(); // stop observing once triggered
//       }
//     },
//     { threshold: 0.5 }
//   );

//   observer.current.observe(ketchup.current);

//   return () => observer.current?.disconnect();
// }, []);
    const steps = [
      {
        number: "01",
        title: "SET UP YOUR PROFILE",
        description:
          "Tell us about your restaurant and what makes it special",
      },
      {
        number: "02",
        title: "GENERATE YOUR CONTENT",
        description:
          "Use our AI to generate a press release or write your own with our guided templates",
      },
      {
        number: "03",
        title: <>SEND & VOILA!</>,
        description:
          "Send to media, track its performance and download the content for your own platforms",
      },
    ];
  
    return (
        <section className="relative flex flex-col-reverse py-12 md:flex-row h-[90vh] mt-4  items-center justify-center overflow-hidden  bg-[#FFEFEF] w-full" ref={sectionref}>
        {/* Left Content */}
       <div className="w-[90%] md:w-[80%] h-full flex ">
        <div className="w-full lg:w-[60%] flex flex-col h-auto md:h-full flex flex-col items-start justify-center md:pl-10">
          {/* Title */}
          <h2 className="text-[45px] flex items-start gap-4 md:text-[80px] text-nowrap leading-tight" ref={headingbounce}>
            <span className="text-black">OUR </span>
            <span className="text-red-500">SECRET SAUCE</span> 
            {/* <div className="md:flex hidden relative h-[220px] w-[180px]"  ref={ketchup} >
              <Image
                src="/assets/home/ketchup2.png"
                height={400}
                width={340}
                alt="ketchup"
              />
            </div> */}
          </h2>
          <p className="text-lg md:text-xl ">
            Three simple steps to restaurant PR success
          </p>
      <div className="flex gap-4  items-center justify-center mt-12">
        <div className="h-[350px] md:h-[300px]  w-[150px] md:w-[80px]"><Image src={'/assets/home/steps.svg'} className="object-cover" height={300} width={300} /></div>
          <div className="  space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                {/* Number circle */}
                
      
                {/* Step Content */}
                <div className="">
                  <h3 className="text-2xl leading-[0.8] md:text-[35px]">{step.title}</h3>
                  <p className="text-black text-base md:text-md leading-tighter ">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      
        {/* Right Image */}
        <div className="  flex items-end justify-end h-full md:w-[35%]">
        <div className="  hidden lg:flex  items-end w-full md:w-[35%] h-[80%] mb-10 md:mb-0 absolute -bottom-10 right-0" ref={chef}>
          <Image
            src="/assets/home/Frame 163.svg"
            width={250}
            height={600}
            alt="Chef illustration"
            className="object-cover min-h-full min-w-full"
          />
        </div>
        {/* <div className="hidden md:flex ball absolute right-38 top-86 opacity-[0.7]"><Image src={'/assets/home/eyes.png'} className="opacity-[0.2]" width={20} height={50} /></div> */}
        {/* <div className="hidden md:flex ball absolute right-64 top-86 opacity-[0.7]"><Image src={'/assets/home/eyes.png'} className="opacity-[0.2]" width={20} height={50} /></div> */}

        </div>
        </div>
        {/* <div className="absolute inset-0 h-full w-full">
         <Image
                src="/assets/home/ketchup.png"
                height={800}
                width={1240}
                alt="ketchup"
                className="object-cover"
              />
            </div> */}
      </section>
      
    );
  }
  