// components/AnalyticsSection.jsx
import React from 'react';
import Image from 'next/image'
import Chart from './chart'
import Link from 'next/link';
const AnalyticsSection = () => {

  return (
    <div className="space-y-6 py-18 px-4 overflow-hidden  max-w-5xl mx-auto ">
      {/* Top Metrics */}
     
      <div className="flex flex-col md:flex-row justify-between gap-4">
       <div className='flex flex-col md:w-1/2 justify-center bg-[#FBDFDF] p-4 rounded-lg'> <div className="flex-1  flex items-center gap-4 md:gap-0 justify-between">
          <div className='md:w-1/2'>
            <p className="text-sm text-gray-600">Site monthly visits</p>
            <span className="text-5xl  text-[#EE3A3D]" style={{ fontFamily: 'Subscribe'}}>833,925,212</span>
             <p className='text-sm'>(Via Hypestat)</p>
          </div>
<div className='relative md:w-1/3 h-full flex items-center justify-center md:items-end md:justify-end '>
  <Image 
    src={'/assets/dashboardrelease/eye.svg'} 
height={120}
width={200}
className='object-cover'
  />
</div>
        </div>
         </div>

       <div className=' bg-[#FBEDDF] md:w-1/2 p-4 rounded-lg'> <div className="flex-1 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Total AVE</p>
            <span className="text-5xl  text-[#EE3A3D] flex items-center" style={{ fontFamily: 'Subscribe,sans-serif'}}> $839,250</span>
        <p className='text-sm'>(Via Hypestat)</p>
          </div>
          <div>
                    <Image src={'/assets/dashboardrelease/money.svg'} width={200} height={140}/>

          </div>
        </div>
               </div>
      </div>
    

      {/* Charts */}
      <div className=" w-full gap-4">
        <div className="bg-white p-4 rounded-lg ">
          {/* <p className="font-semibold mb-2">Performance by Release</p> */}
          {/* <div className="h-48 bg-gray-200 rounded"></div> */}
       {/* <Chart /> */}
       </div>

        {/* <div className="bg-white p-4 rounded-lg shadow">
          <p className="font-semibold mb-2">AVE by Release</p>
          <div className="h-48 bg-gray-200 rounded"></div>
        </div> */}
      </div>

      {/* Draft Section */}
              <p className="mb-6 font-medium text-xl">Draft Press Release</p>

      <div className="bg-[#FBEDDF]  py-10 p-4 rounded-lg">
        <p className="mb-8 font-medium">No Draft press release yet</p>
      <Link href="/new">  <button className="bg-red-600 text-white cursor-pointer px-4 py-2 rounded hover:bg-red-300">
          Create new press release
        </button></Link>
      </div>
    </div>
  );
};

export default AnalyticsSection;
