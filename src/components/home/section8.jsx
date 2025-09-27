// components/Pricing.tsx
import Image from "next/image";

export default function Pricing() {
  return (
    <section className="h-screen w-full flex items-center justify-center">
  <div
    className="w-[90%] md:w-[70%] h-[80%] p-8 mx-auto text-center 
               rounded-2xl bg-gradient-to-br from-[#ffffff] to-[#fbb6b6] flex flex-col items-center justify-center"
  >
    <div className="max-w-2xl mx-auto ">
      <h2 className="text-5xl md:text-7xl tracking-tight  uppercase leading-[0.8] md:leading-tight">
        <span className="text-black">Ready To Get Your </span><br />
        <span className="text-red-500">Restaurant Noticed?</span>
      </h2>
      <p className="mt-6 text-black text-lg">
        Yes Chef! Choose the subscription plan that fits your needs. From
        occasional PR campaigns to comprehensive media coverage, we have
        options to suit restaurants, hospitality groups, agencies and
        freelancers.
      </p>
      <button   className="mt-8 px-5 py-2 sm:px-6 sm:py-2.5 md:px-4 md:py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
        Start Your PR Campaign
      </button>
    </div>
  </div>
</section>

  
  );
}