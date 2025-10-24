import Image from "next/image";

const StepsSection = () => {
  const steps = [
    {
      id: 1,
      image: "/assets/dashboardtwo/t-1.svg",
      title: "CREATE CONTENT",
      description: "Use our AI or draft your own",
      borderColor: "border-[#EE3A3D]",
      offset: "translate-y-0", // normal position
    },
    {
      id: 2,
      image: "/assets/dashboardtwo/t-2.svg",
      title: "SEND IT",
      description: "Check and send to media",
      borderColor: "border-[#EE3A3D]",
      offset: "md:translate-y-[60px]", // lowered 60px
    },
    {
      id: 3,
      image: "/assets/dashboardtwo/t-3.svg",
      title: "REVIEW RESULTS",
      description: "See media hits and links",
       borderColor: "border-[#EE3A3D]",
      offset: "translate-y-0", // normal position
    },
  ];

  return (
    <section className="w-full py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 px-6">
        {steps.map((item) => (
          <div
            key={item.id}
            className={`border-[3px] border-dashed bg-white rounded-2xl flex flex-col items-center text-center p-4 md:p-10 w-full md:w-[300px] transition-transform duration-300 hover:scale-[1.05] hover:shadow-lg ${item.borderColor} ${item.offset}`}
          >
            {/* Icon */}
            <div className="relative w-[120px] h-[120px] mb-6">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="font-extrabold text-2xl md:text-3xl uppercase text-black ">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
