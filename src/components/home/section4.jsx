import Image from "next/image";
export default function SecretSauce() {
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
        <section className="relative flex flex-col-reverse md:flex-row h-auto mt-4  items-center justify-center overflow-hidden  bg-[#FFEFEF] w-full">
        {/* Left Content */}
       <div className="w-[90%] md:w-[80%] h-full flex ">
        <div className="w-full md:w-[60%] py-16 flex flex-col h-auto md:h-full">
          {/* Title */}
          <h2 className="text-[45px] md:text-[80px] leading-tight">
            <span className="text-black">OUR </span>
            <span className="text-red-500">SECRET SAUCE</span>
          </h2>
          <p className="text-lg md:text-[20px] ">
            Three simple steps to restaurant PR success
          </p>
      <div className="flex gap-4 md:gap-12 items-center justify-center">
        <div className="h-[300px] w-[150px] md:w-[80px]"><Image src={'/assets/home/steps.svg'} className="object-cover" height={300} width={300} /></div>
          <div className="mt-12  space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                {/* Number circle */}
                
      
                {/* Step Content */}
                <div className="">
                  <h3 className="text-2xl leading-[0.8] md:text-[35px]">{step.title}</h3>
                  <p className="text-black text-base md:text-[20px] ">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      
        {/* Right Image */}
        <div className="hidden md:flex w-full md:w-[35%]  h-[90%] mb-10 md:mb-0 absolute -bottom-2 right-0">
          <Image
            src="/assets/home/r-4-1.webp"
            width={250}
            height={600}
            alt="Chef illustration"
            className="h-full w-full object-contain"
          />
        </div>
        </div>
      </section>
      
    );
  }
  