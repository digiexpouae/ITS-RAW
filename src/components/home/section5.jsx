"use client"
import Image from "next/image";
import { useUser, useAuth, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import {
  usePlans, CheckoutProvider,
  useCheckout,
  PaymentElementProvider,
  PaymentElement,
  usePaymentMethods,
  usePaymentElement,
} from '@clerk/nextjs/experimental'
import { useSubscription } from '@clerk/nextjs/experimental' // or @clerk/clerk-reactimport { PricingTable } from "@clerk/nextjs";

import { useEffect, useRef, useState } from 'react'


// export default function Pricing() {
//     const plans = [
//       {
//         name: "Walk-in",
//         target: "For individuals",
//        price:<span  style={{fontFamily: 'Subscribe'}}>FREE</span> ,

//         icon:"/assets/home/ic-3.svg",
//         features: [
//           "Up to 5 free press release generations",
//           "Access to AI prompt template",

//         ],
//         buttonColor: "bg-red-500 text-white",
//         borderColor: "border-red-300",
//         bg: "bg-white",
//       },
//       {
//         name: "Regular",
//         target: "For Restaurants",
//         price:<span className="font-sm" style={{fontFamily: 'Subscribe'}}>AED 365

// </span> ,

//         icon:"/assets/home/ic-2.svg",
//         features: [
//           "Up to 20 press release drafts",
//           "Up to 3 PR distributions",
//           "Send to 1,000+ media and bloggers",
//           "Automated media monitoring",
//           "Dedicated customer support"
//         ],
//         buttonColor: "bg-white text-black",
//         borderColor: "border-transparent",
//         bg: "bg-[#FBEDDF]",
//       },
//       {
//         name: "VIP",
//         target: "For groups",
//         icon:"/assets/home/ic-1.svg",
//         price:<span  style={{fontFamily: 'Subscribe'}}>Price on request</span> ,
//         features: [
//           "Bespoke white-label solutions",
//           "Multi-user dashboards",
//           "Premium account management",
//           "Advanced analytics",
//         ],
//         buttonColor: "bg-red-500 text-white",
//         borderColor: "border-red-300",
//         bg: "bg-white",
//       },
//     ];
//     const router = useRouter();
// const { isSignedIn } = useUser();

//   const handleGetStarted = () => {
//     if (!isSignedIn) {
// router.push("'/sign-in(.*)");
//       return;
//     }
//     router.push("/dashboard");
//   };


//     return (
//       <section className="py-20  flex flex-col items-center justify-center" id="pricing">
//         <div className="text-center">
//           <h2 className="text-[50px] md:text-[80px]">
//             <span className="text-black">TRY IT FOR </span>
//             <span className="text-red-500">FREE!</span>
//           </h2>
//           <p className=" text-black md:text-lg px-2">
//             Choose the plan that fits your needs. Upgrade, downgrade, or cancel anytime.
//           </p>
//         </div>

//         <div className="mt-12 grid lg:grid-cols-3 gap-8 w-[75%]">
//           {plans.map((plan, idx) => (
//             <div
//               key={idx}
//               className={`rounded-2xl shadow-sm border ${plan.borderColor} ${plan.bg}  lg:p-6 p-8 flex flex-col`}
//             >
//               {/* Plan Header */}
//               <div className="mb-6">
//                 <div className="flex center">
//                 <Image src={plan.icon} width={50} height={50}/>
//                 <div className="ml-3">
//                 <p className="text-sm text-gray-600">  {plan.target}</p>
//                 <h3 className="text-2xl " style={{  fontFamily: "DM Sans, sans-serif"}}>{plan.name} </h3>
//                 </div>
//                 </div>                
//                 <p className="mt-4 text-3xl flex items-center " >
//                   {plan.price}{(idx === 0 || idx === 1) && <span className="text-sm font-normal">/month</span>}
//                 </p>
//               </div>

//               {/* Features */}
//               <div className="mb-6">
//                 <p className="font-bold mb-3">What’s included</p>
//                 <ul className="space-y-2">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
//                       <span className="text-red-500 font-bold">✔</span>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Button */}
//               <button
//           onClick={handleGetStarted}
//                 className={`cursor-pointer transition-all  -6 py-2 rounded-lg
//                border-[#EE3A3D]
//                border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
//                active:border-b-[2px] active:brightness-90 active:translate-y-[2px] mt-auto w-full py-3 rounded-lg font-semibold ${plan.buttonColor}`}
//               >
//                 Get started
//               </button>
//             </div>
//           ))}
//         </div>
//         <div className=" text-center mt-10">
//         <h2 className="text-4xl  ">
//         <span className="text-red-500 uppercase p-2">Can’t Find What You’re Looking For? </span>
//         </h2>
//         <p className="mt-3 text-black text-lg">
//         Contact <span className="underline">info@itsraw.ai</span>- we’ll reply within 24 hours.
//           </p>
//           </div>
//       </section>
//     );
//   }


// components/Pricing.tsx



export default function section5({ className, className_Two }) {
  const [selectedPlan, setSelectedPlan] = useState(null)

  const { data: plan, isLoading } = usePlans({
    for: 'user', // or 'organization' for B2B
    pageSize: 10,
  });

  console.log("plan", plan)
  const displayPlans = plan || [];


  const planStyles = [
    {
      target: "For individuals",
      icon: "/assets/home/ic-3.svg",
      buttonColor: "bg-red-500 text-white",
      borderColor: "border-red-300",
      bg: "bg-white",
    },
    {
      target: "For Restaurants",
      icon: "/assets/home/ic-2.svg",
      buttonColor: "bg-white text-black",
      borderColor: "border-transparent",
      bg: "bg-[#FBEDDF]",
    },
    {
      target: "For groups",
      icon: "/assets/home/ic-1.svg",
      buttonColor: "bg-red-500 text-white",
      borderColor: "border-red-300",
      bg: "bg-white",
    }, {
      target: "For Restaurants",
      icon: "/assets/home/ic-2.svg",
      buttonColor: "bg-white text-black",
      borderColor: "border-transparent",
      bg: "bg-[#FBEDDF]",
    }
  ];

  const plans = [
    {
      name: "Walk-in",
      target: "For individuals",
      price: <span style={{ fontFamily: 'Subscribe' }}>FREE</span>,

      icon: "/assets/home/ic-3.svg",
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
      price: <span className="font-sm" style={{ fontFamily: 'Subscribe' }}>AED 365

      </span>,

      icon: "/assets/home/ic-2.svg",
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
      icon: "/assets/home/ic-1.svg",
      price: <span style={{ fontFamily: 'Subscribe' }}>Price on request</span>,
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
  const { redirectToSignIn } = useClerk();
  // const handleGetStarted = () => {
  //   if (!isSignedIn) {
  //     router.push("'/sign-in(.*)");
  //     return;
  //   }
  //   router.push("/dashboard");
  // };

  const handleSubscribe = async (plan) => {
    // If the plan has a checkout URL, redirect to it

    // wait for Clerk to load

    if (!isSignedIn) {
      redirectToSignIn({
        returnBackUrl: "/",
      });
      return;
    }

    setSelectedPlan({
      id: plan.id,
      period: 'month'
    })
  }


  const [poll, setPoll] = useState(true);

  const { data } = useSubscription({
    pollInterval: poll ? 3000 : undefined,
  });

  useEffect(() => {
    if (!data) return;

    const hasPendingChange = data.subscriptionItems?.some(
      item => item.status === "upcoming"
    );
    console.log("subscription", data)
    // Stop polling when everything is final
    if (!hasPendingChange) {
      setPoll(false);
    }
  }, [data?.updatedAt]);




  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const getSubscriptionItem = (planId) => {
    return data?.subscriptionItems?.find(
      (item) => item.plan?.id === planId
    );
  };


  const resolvePlanUI = (planId) => {
    const item = getSubscriptionItem(planId);

    // No subscription at all
    if (!data || !item) {
      return {
        badge: null,
        cta: "Subscribe",
        disabled: false,
        status: ''
      };
    }

    // Active plan (CURRENT)
    if (item.status === "active") {
      return {
        badge: "Current plan",

        cta: "Resubscribe",
        disabled: false,
        status: 'active'
      };
    }

    // Upcoming (SCHEDULED)
    if (item.status === "upcoming") {
      return {
        badge: `Starts on ${formatDate(item.periodStart)}`,
        cta: "Scheduled",
        disabled: true,
        status: 'upcoming'
      };
    }

    // Previously canceled → allow resubscribe
    if (item.canceledAt) {
      return {
        badge: null,
        cta: "Resubscribe",
        disabled: false,
      };
    }

    return {
      badge: null,
      cta: "Subscribe",
      disabled: false,
    };
  };







  if (isLoading) return <div>Loading...</div>;








  return (

    <section className={`py-20  flex flex-col items-center justify-center" id="pricing ${className} `}>
      <div className="text-center">
        <h2 className="text-[50px] md:text-[80px]">
          <span className="text-black">TRY IT FOR </span>
          <span className="text-red-500">FREE!</span>
        </h2>
        <p className=" text-black md:text-lg px-2">
          Choose the plan that fits your needs. Upgrade, downgrade, or cancel anytime.
        </p>

      </div>


      <div className={`mt-12 grid lg:grid-cols-3 gap-8 ${className_Two}`}>

        {displayPlans.map((p, idx) => {
          // Find matching static style by name

          const style = planStyles[idx] || {}

          return (
            <div
              key={idx}
              className={`rounded-2xl shadow-sm border ${style.borderColor} ${style.bg}  lg:p-6 p-8 flex flex-col`}
            >
              {/* Plan Header */}
              <div className="mb-6">
                <div className="flex center">
                  <Image src={style.icon} width={50} height={50} alt={p.name} />
                  <div className="ml-3">
                    <div className="flex items-center gap-4">
                      <p className="text-sm text-gray-600">  {style.target}</p>
                      {(() => {
                        const { status } = resolvePlanUI(p.id);

                        if (!status) return null;

                        return (
                          <span className="inline-block  text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                            {status}
                          </span>
                        );
                      })()}
                    </div>

                    <h3 className="text-2xl " style={{ fontFamily: "DM Sans, sans-serif" }}>{p.name} </h3>


                  </div>
                </div>
                <p className="mt-4 text-3xl flex items-center " >
                  <span className="text-3xl font-normal" style={{ fontFamily: "subscribe, sans-serif" }}>${p.fee.amountFormatted}/month</span>
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <p className="font-bold mb-3">What’s included</p>
                <ul className="space-y-2">
                  {/* Use fetched features if available, assuming structure matches */}
                  {p.features && p.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-red-500 font-bold">✔</span>
                      {feature.name || feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              {(() => {
                const { cta, disabled, badge, status, item } = resolvePlanUI(p.id);
                const hideResubscribe =
                  status === "active" &&
                  data?.subscriptionItems?.length === 1;
                return (
                  !hideResubscribe && (
                    <button
                      disabled={disabled}
                      onClick={() => !disabled && handleSubscribe(p)}
                      className={`cursor-pointer transition-all  -6 py-2 rounded-lg

               active:border-b-[2px] active:brightness-90 active:translate-y-[2px] mt-auto w-full py-3 rounded-lg font-semibold
        ${disabled
                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                          : `${style.buttonColor}                border-[#EE3A3D]
               border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]`
                        }
      `}




                    >

                      {status == "upcoming" ? badge : cta}
                    </button>)
                );
              })()}

            </div>
          )
        })}
      </div>
      <div className=" text-center mt-10">
        <h2 className="text-4xl  ">
          <span className="text-red-500 uppercase p-2">Can’t Find What You’re Looking For? </span>
        </h2>
        <p className="mt-3 text-black text-lg">
          Contact <span className="underline">info@itsraw.ai</span>- we’ll reply within 24 hours.
        </p>
      </div>
      {/* ALWAYS mounted */}
      <CheckoutProvider
        for="user"
        planId={selectedPlan?.id}
        planPeriod={selectedPlan?.period}
      >
        {selectedPlan && (
          <CheckoutModal
            planId={selectedPlan?.id}
            onClose={() => setSelectedPlan(null)}
          />
        )}
      </CheckoutProvider>
    </section>
  );
}










function CheckoutModal({ planId, onClose }) {
  if (!planId) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 overflow-auto h-screen ">
      <div className="bg-white rounded-lg p-8 max-w-md w-full ">
        <button onClick={onClose} className="float-right text-gray-500">✕</button>
        <CustomCheckout />
      </div>
    </div>
  )
}

function CustomCheckout() {
  const { checkout } = useCheckout()
  const { plan } = checkout

  return (
    <div className="checkout-container">

      {/* <h3 className="text-2xl mb-4">Subscribe to {plan.name}</h3> */}
      <PaymentElementProvider checkout={checkout}>
        <PaymentSection checkout={checkout} start={checkout.start} />
      </PaymentElementProvider>

    </div>
  )
}

function PaymentSection({ checkout, start }) {

  const { isConfirming, confirm, finalize, status, subscription } = checkout
  const { isFormReady, submit } = usePaymentElement()
  const { data: paymentMethods, isLoading } = usePaymentMethods()
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter()
  const startedRef = useRef(false);
  const [submittingCardId, setSubmittingCardId] = useState(null);

  // useEffect(() => {
  //   if (!startedRef.current) {
  //     start();
  //     startedRef.current = true; // ← YOU MUST HAVE THIS
  //   }
  // }, [start]);
  const [isCheckoutReady, setIsCheckoutReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    if (!startedRef.current) {
      (async () => {
        try {
          await start();
          if (mounted) {
            startedRef.current = true;
            setIsCheckoutReady(true);
          }
        } catch (e) {
          console.error("Checkout start failed", e);
        }
      })();
    }

    return () => {
      mounted = false;
    };
  }, [start]);

  const subscribe = async () => {
    if (isSubmitting || !isCheckoutReady || !isFormReady) return;
    setIsSubmitting(true);

    try {

      const { data, error } = await submit();
      if (error || !data) {
        throw error || new Error("Submit failed");
      }
      // console.log("Clerk submit:", data);
      // console.log("Error", error)
      // console.log("Checkout", checkout)

      // if (checkout.totals?.totalDueNow?.amount == 0) {

      //   alert("You already own this plan.")
      //   router.push("/dashboard")
      //   return;
      // }

      const result = await confirm(data)
      console.log("Result", result)

      if (result.data.status == "completed" || result.data.status == "succeeded") {

        // finalize first
        await finalize();
        // Use window.location.origin to ensure a clean redirect if router.push hangs
        window.location.href = "/dashboard-dashboard";
        return;
      }

      throw new Error(`Unexpected status: ${status}`);


    }
    catch (error) {


      console.log("Checkout failed:", error);

    }
    finally {
      setIsSubmitting(false);
    }
  }

  const subscribe_method = async (method) => {
    if (isSubmitting || !isCheckoutReady) return;
    setIsSubmitting(true);

    try {
      // If you're using an existing payment method, you might skip the form submission
      // and just confirm the checkout using this method
      const result = await confirm({ paymentMethodId: method.id });
      console.log("Result", result);

      if (result.data.status === "completed" || result.data.status === "succeeded") {
        await finalize({
          navigate: () => {
            window.location.href = "/dashboard-dashboard";
          }
        });
      }
      throw new Error(`Unexpected status: ${status}`);
    } catch (error) {
      console.log("Checkout failed:", error);

    }
    finally {
      setIsSubmitting(false);
    }
  };

  const Billing = !isFormReady
  return (
    <>


      {paymentMethods?.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Saved Payment Methods</h4>
          <div className="space-y-2">

            {paymentMethods.map((method) => (
              <button
                key={method.id}
                disabled={Billing || submittingCardId === method.id} // disable only this button

                onClick={() => subscribe_method(method)}
                className={`
          ${Billing ? ' mt-4 bg-red-400 opacity-10 cursor-not-allowed  px-4 w-full py-4' : '  mt-4  bg-red-500 hover:bg-red-400 w-full py-4 cursor-pointer px-4 rounded text-white'}
          ${submittingCardId === method.id ? ' mt-4 bg-red-400 opacity-10 cursor-not-allowed  px-4 w-full py-4' : '  mt-4  bg-red-500 hover:bg-red-400 w-full py-4 cursor-pointer px-4 rounded text-white'}`}
              >

                {submittingCardId === method.id ? 'Processing…' : `${method.cardType} **** **** **** ${method.last4}`}


                {/* Expiry */}
              </button>
            ))}
          </div>
        </div>
      )}


      <PaymentElement fallback={<div>Loading payment element...</div>} />
      {/* 
      { }  <button
        disabled={!isFormReady || isConfirming}
        onClick={() => subscribe()}
        className="mt-4 w-full bg-red-500 text-white py-3 rounded-lg font-semibold"
      >
        {isConfirming ? 'Processing...' : 'Complete Purchase'}
      </button> */}


      {/* {data?.map((method) => ( */}
      <button
        // key={method.id}
        disabled={!isFormReady || isSubmitting}
        onClick={subscribe}
        className={`
          ${Billing ? ' mt-4 bg-red-400 opacity-10 cursor-not-allowed  px-4 w-full py-4' : '  mt-4  bg-red-500 hover:bg-red-400 w-full py-4 cursor-pointer px-4 rounded text-white'}
          ${isSubmitting ? ' mt-4 bg-red-400 opacity-10 cursor-not-allowed  px-4 w-full py-4' : '  mt-4  bg-red-500 hover:bg-red-400 w-full py-4 cursor-pointer px-4 rounded text-white'}`}
      >
        {isSubmitting ? 'Processing…' : `Pay `}
      </button>
      {/* ))} */}
    </>
  )
}