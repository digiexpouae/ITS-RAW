// components/Pricing.tsx
import Image from "next/image";
import { useUser, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/router";
export default function Pricing() {
    const plans = [
      {
        name: "Walk-in",
        target: "For individuals",
       price:<span  style={{fontFamily: 'Subscribe'}}>FREE</span> ,

        icon:"/assets/home/ic-3.svg",
        features: [
          "Up to 5 free press release generations",
          "Access to AI prompt template",
       
        ],
        buttonColor: "bg-red-500 text-white",
        borderColor: "border-red-300",
        bg: "bg-white",
      },
      {
        name: "Regular",
        target: "For Restaurants",
        price:<span className="font-sm" style={{fontFamily: 'Subscribe'}}>AED 365
       
</span> ,
      
        icon:"/assets/home/ic-2.svg",
        features: [
          "Up to 20 press release drafts",
          "Up to 3 PR distributions",
          "Send to 1,000+ media and bloggers",
          "Automated media monitoring",
          "Dedicated customer support"
        ],
        buttonColor: "bg-white text-black",
        borderColor: "border-transparent",
        bg: "bg-[#FBEDDF]",
      },
      {
        name: "VIP",
        target: "For groups",
        icon:"/assets/home/ic-1.svg",
        price:<span  style={{fontFamily: 'Subscribe'}}>Price on request</span> ,
        features: [
          "Bespoke white-label solutions",
          "Multi-user dashboards",
          "Premium account management",
          "Advanced analytics",
        ],
        buttonColor: "bg-red-500 text-white",
        borderColor: "border-red-300",
        bg: "bg-white",
      },
    ];
    const router = useRouter();
const { isSignedIn } = useUser();

  const handleGetStarted = () => {
    if (!isSignedIn) {
router.push("'/sign-in(.*)");
      return;
    }
    router.push("/dashboard");
  };

  
    return (
      <section className="py-20  flex flex-col items-center justify-center" id="pricing">
        <div className="text-center">
          <h2 className="text-[50px] md:text-[80px]">
            <span className="text-black">TRY IT FOR </span>
            <span className="text-red-500">FREE!</span>
          </h2>
          <p className=" text-black md:text-lg px-2">
            Choose the plan that fits your needs. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>
  
        <div className="mt-12 grid lg:grid-cols-3 gap-8 w-[75%]">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl shadow-sm border ${plan.borderColor} ${plan.bg}  lg:p-6 p-8 flex flex-col`}
            >
              {/* Plan Header */}
              <div className="mb-6">
                <div className="flex center">
                <Image src={plan.icon} width={50} height={50}/>
                <div className="ml-3">
                <p className="text-sm text-gray-600">  {plan.target}</p>
                <h3 className="text-2xl " style={{  fontFamily: "DM Sans, sans-serif"}}>{plan.name} </h3>
                </div>
                </div>                
                <p className="mt-4 text-3xl flex items-center " >
                  {plan.price}{(idx === 0 || idx === 1) && <span className="text-sm font-normal">/month</span>}
                </p>
              </div>
  
              {/* Features */}
              <div className="mb-6">
                <p className="font-bold mb-3">What’s included</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-red-500 font-bold">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            
              {/* Button */}
              <button
          onClick={handleGetStarted}
                className={`cursor-pointer transition-all  -6 py-2 rounded-lg
               border-[#EE3A3D]
               border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
               active:border-b-[2px] active:brightness-90 active:translate-y-[2px] mt-auto w-full py-3 rounded-lg font-semibold ${plan.buttonColor}`}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
        <div className=" text-center mt-10">
        <h2 className="text-4xl  ">
        <span className="text-red-500 uppercase p-2">Can’t Find What You’re Looking For? </span>
        </h2>
        <p className="mt-3 text-black text-lg">
        Contact <span className="underline">info@itsraw.ai</span>- we’ll reply within 24 hours.
          </p>
          </div>
      </section>
    );
  }

  
  // components/Pricing.tsx

// export default function Pricing() {


//   const { data: plan, isLoading } = usePlans({
//     for: 'user', // or 'organization' for B2B
//     pageSize: 10,
//   });

//   console.log("plan", plan)



//   // Static configuration for UI styles
//   const planStyles = {
//     "Walk-in": {
//       target: "For individuals",
//       icon: "/assets/home/ic-3.svg",
//       buttonColor: "bg-red-500 text-white",
//       borderColor: "border-red-300",
//       bg: "bg-white",
//     },
//     "Regular": {
//       target: "For Restaurants",
//       icon: "/assets/home/ic-2.svg",
//       buttonColor: "bg-white text-black",
//       borderColor: "border-transparent",
//       bg: "bg-[#FBEDDF]",
//     },
//     "VIP": {
//       target: "For groups",
//       icon: "/assets/home/ic-1.svg",
//       buttonColor: "bg-red-500 text-white",
//       borderColor: "border-red-300",
//       bg: "bg-white",
//     }
//   };

//   const router = useRouter();
//   const { isSignedIn } = useUser();

//   const handleGetStarted = () => {
//     if (!isSignedIn) {
//       router.push("'/sign-in(.*)");
//       return;
//     }
//     router.push("/dashboard");
//   };

//   const handleSubscribe = async (plan) => {
//     // If the plan has a checkout URL, redirect to it
//     if (plan.checkoutUrl) {
//       window.location.href = plan.checkoutUrl;
//     } else {
//       console.log("No specific checkout URL found for plan:", plan);
//       // Fallback for logic where maybe we just go to dashboard if it's a free plan or contact sales
//       if (plan.fee?.amount === 0) {
//         router.push("/dashboard");
//       } else {
//         console.warn("Plan does not have a checkoutUrl property.", plan);
//       }
//     }
//   };




//   // Helper to format price
//   const formatPrice = (p) => {
//     if (!p.amount || p.amount === 0) return <span style={{ fontFamily: 'Subscribe' }}>FREE</span>;
//     return <span className="font-sm" style={{ fontFamily: 'Subscribe' }}>{p.currency} {p.amount}</span>;
//   };

//   if (isLoading) return <div>Loading...</div>;

//   // Use fetched plans if available, otherwise fallback to empty or static
//   const displayPlans = plan || [];

//   return (
//     <section className="py-20  flex flex-col items-center justify-center" id="pricing">
//       <div className="text-center">
//         <h2 className="text-[50px] md:text-[80px]">
//           <span className="text-black">TRY IT FOR </span>
//           <span className="text-red-500">FREE!</span>
//         </h2>
//         <p className=" text-black md:text-lg px-2">
//           Choose the plan that fits your needs. Upgrade, downgrade, or cancel anytime.
//         </p>
//       </div>

//       <div className="mt-12 grid lg:grid-cols-3 gap-8 w-[75%]">
//         {displayPlans.map((p, idx) => {
//           // Find matching static style by name
//           const style = planStyles[idx] || planStyles["Walk-in"];

//           return (
//             <div
//               key={idx}
//               className={`rounded-2xl shadow-sm border ${style.borderColor} ${style.bg}  lg:p-6 p-8 flex flex-col`}
//             >
//               {/* Plan Header */}
//               <div className="mb-6">
//                 <div className="flex center">
//                   <Image src={style.icon} width={50} height={50} alt={p.name} />
//                   <div className="ml-3">
//                     <p className="text-sm text-gray-600">  {style.target}</p>
//                     <h3 className="text-2xl " style={{ fontFamily: "DM Sans, sans-serif" }}>{p.name} </h3>
//                   </div>
//                 </div>
//                 <p className="mt-4 text-3xl flex items-center " >
//                   <span className="text-sm font-normal">{p.fee.amount}/month</span>
//                 </p>
//               </div>

//               {/* Features */}
//               <div className="mb-6">
//                 <p className="font-bold mb-3">What’s included</p>
//                 <ul className="space-y-2">
//                   {/* Use fetched features if available, assuming structure matches */}
//                   {p.features && p.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
//                       <span className="text-red-500 font-bold">✔</span>
//                       {feature.name || feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Button */}
//               <button
//                 onClick={() => handleSubscribe(p)}
//                 className={`cursor-pointer transition-all  -6 py-2 rounded-lg
//                border-[#EE3A3D]
//                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
//                active:border-b-[2px] active:brightness-90 active:translate-y-[2px] mt-auto w-full py-3 rounded-lg font-semibold ${style.buttonColor}`}
//               >
//                 Get started
//               </button>
//             </div>
//           )
//         })}
//       </div>
//       <div className=" text-center mt-10">
//         <h2 className="text-4xl  ">
//           <span className="text-red-500 uppercase p-2">Can’t Find What You’re Looking For? </span>
//         </h2>
//         <p className="mt-3 text-black text-lg">
//           Contact <span className="underline">info@itsraw.ai</span>- we’ll reply within 24 hours.
//         </p>
//       </div>
//     </section>
//   );
// }
