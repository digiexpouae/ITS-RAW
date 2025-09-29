// components/Pricing.tsx
import Image from "next/image";

export default function Pricing() {
  return (
    <section className="h-screen w-full flex items-center justify-center">
  <div
    className="w-[90%] md:w-[70%] h-[80%] p-8 mx-auto text-center 
               rounded-2xl bg-gradient-to-br from-[#ffffff] to-[#fbb6b6] flex flex-col items-center justify-center"
  >
    <div className="max-w-2xl mx-auto flex flex-col items-center  gap-4">
     <div> <h2 className="text-5xl md:text-7xl tracking-tight  uppercase leading-[0.8] md:leading-tight">
        <span className="text-black">Ready To Get Your </span><br />
        <span className="text-red-500">Restaurant Noticed?</span>
      </h2>
      <p className="mt-6 text-black text-lg">
        Yes Chef! Choose the subscription plan that fits your needs. From
        occasional PR campaigns to comprehensive media coverage, we have
        options to suit restaurants, hospitality groups, agencies and
        freelancers.
      </p>
      </div>
      <button   className="cursor-pointer transition-all md:w-[40%] bg-[#EE3A3D] text-white px-6 py-2 rounded-lg
border-[#EE3A3D]
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
        Start Your PR Campaign
      </button>
    </div>
  </div>
</section>

  
  );
}