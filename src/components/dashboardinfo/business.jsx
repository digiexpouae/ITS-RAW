"use client";
import Image from "next/image";
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function BusinessHours() {
  return (
    <div className="w-full  text-[#9B9B9B] rounded-xl">
      <p className="text-md text-black font-medium mb-6">Business Operating hours</p>

      <div className="flex flex-col gap-4">
        {days.map((day, index) => (
          <div
            key={index}
            className="grid grid-cols-3 gap-4  gap-x-10 md:gap-0 md:grid-cols-[80px_auto_auto_auto_auto] items-center  text-[10px]"
          >
            {/* Day Name */}
            <p className="font-medium text-[#9B9B9B]">{day}</p>

            {/* Radio buttons */}
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name={`radio-${index}`}
                className="accent-red-500"
                defaultChecked={index === 0} // Monday open
              />
              <span className="text-[10px]">Open</span>
            </div>

            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name={`radio-${index}`}
                className="accent-red-500"
                defaultChecked={index !== 0} // Others closed
              />
              <span className="text-[10px]">Closed</span>
            </div>

            {/* Open Time */}
            <div className="flex items-center gap-2">
              <span className="text-[10px]">Open:</span>
              <input
                type="text"
                placeholder="_ _ : _ _"
                className="w-14 px-2 py-1 text-[10px] border rounded-md bg-white"
              />
            </div>

            {/* Close Time */}
            <div className="flex items-center gap-2">
              <span className="text-[10px]">Close:</span>
              <input
                type="text"
                placeholder="_ _ : _ _"
                className="w-14 px-2 py-1 border text-[10px] rounded-md bg-white"
              />
            </div>
          </div>
        ))}
      </div>
   
    </div>
  );
}
