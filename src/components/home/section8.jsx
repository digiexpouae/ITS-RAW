// components/Pricing.tsx
import Image from "next/image";

export default function Pricing() {
  return (
    <section className="w-full flex items-center justify-center">
  <div
    className="w-[90%] md:w-[70%] h-auto p-14 mx-auto text-center 
               rounded-4xl  flex flex-col items-center justify-center"
               style={{backgroundImage:'url(/assets/home/1.png)',backgroundSize:'cover'}}
  >
    <div className="max-w-2xl mx-auto flex flex-col items-center  gap-8">
     <div> <h2 className="text-5xl md:text-7xl tracking-tight  uppercase leading-[0.8] md:leading-[1]">
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
      <button   className="cursor-pointer transition-all  bg-[#EE3A3D] text-white px-6 py-2 rounded-lg
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