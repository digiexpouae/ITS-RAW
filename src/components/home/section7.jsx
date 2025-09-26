// components/Pricing.tsx
import Image from "next/image";

export default function Pricing() {
  return (
    <section className="w-full h-auto  py-20 md:py-12  flex items-center justify-center ">
    <div className="w-[80%] px-6 md:px-0 md:py-0 flex-col md:flex-row flex gap-4 items-center justify-center ">
      {/* Left Column - Image */}
      <div className="flex justify-center md:w-[40%] ">
        <Image
          src="/assets/home/group-people.png"
          alt="Don't be an idiot"
          width={300}
          height={300}
          className="object-cover"
        />
      </div>
      {/* Right Column - Content */}
      <div className="md:w-[60%] flex flex-col items-center ">
        <h2 className="text-[70px] font-extrabold leading-[1]  md:leading-none">
          <span className="text-black">DON'T BE AN</span>
          <span className="text-red-500"> IDIOT</span>
        </h2>
        <p className="mt-4 text-black text-center text-xl">
        Legally we cannot call you an ‘idiot s*****ch’, as a very famous chap with a ranty personality trademarked it. But if you don’t use ItsRaw, you really are one…
        </p>
      </div>
  
    </div>
  </section>
  
  );
}