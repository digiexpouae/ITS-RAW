// components/Pricing.tsx
import Image from "next/image";

export default function Pricing() {
  return (
    <section className="w-full  flex items-center justify-center ">
    <div className="w-[80%] py-20  border-y-2 border-dashed border-black flex md:flex-row flex-col items-center justify-center gap-12 items-center  ">
  
      {/* Right Column - Content */}
      <div className="md:w-[60%]">
        <h2 className="text-[60px] leading-[1] md:text-[80px]">
          <span className="text-black">MONEY</span><span>-</span><span>BACK</span><br />
          <span className="text-red-500">GUARANTEE!</span>
        </h2>
        <p className="mt-4 text-black text-xl">
          If your distribution doesn’t generate any website hits or links after 7 days, we’ll give you your money back. No questions asked, no fuss. We’re so confident, if we let you down, we’ll dress up in a gorilla outfit and hand you your money back in person. How d’ya like them bananas?
        </p>
      </div>
  
      {/* Left Column - Image */}
      <div className="flex justify-center md:w-[40%]">
        <Image
          src="/assets/home/money.png"
          alt="Money Back Guarantee"
          width={400}
          height={400}
        />
      </div>
    </div>
  </section>
  
  );
}
