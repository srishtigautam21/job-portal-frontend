import React from "react";

const JobCard = () => {
  return (
    <div className='bg-jobCard w-[840px] min-h-[140px] rounded-xl'>
      <div className='flex gap-5 p-3'>
        <img src='' alt='job' />
        <div>
          <div className='font-bold text-gray-400'>Junior Apple Asst</div>
          <div className='flex flex-col'>
            <span className='text-gray-500'>Company name</span>
            <span className='text-gray-500'>Mumbai, Maharashtra</span>
          </div>
        </div>
        {/* <div className='font-bold text-gray-400'>Skills match</div> */}
      </div>
      <div className='bg-cardFooter h-[60px] p-3 rounded-bl-xl rounded-br-xl flex items-center justify-between'>
        <div className='text-gray-400'>
          <span>Posted 1 day ago | </span>
          <span> 10 applicants</span>
        </div>
        <button className='w-[150px] h-[36px] bg-teal-600 text-white rounded-2xl'>
          Apply now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
