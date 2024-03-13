import React from "react";
import JobCard from "./JobCard";

const JobList = () => {
  return (
    <div className='p-5'>
      <div className='w-[918px] flex items-center justify-between mb-5'>
        <div className='text-white font-semibold'>
          SEARCH RESULTS /
          <span className='text-sm font-thin'> JOBS-2049 results</span>
        </div>
        <div className='flex gap-3 items-center'>
          <span className='text-white'>Sort By</span>
          <button className='w-[100px] h-[35px] bg-white'>Latest v</button>
        </div>
      </div>
      <div className='bg-joblist w-[918px] h-full p-5 flex flex-row items-center justify-center'>
        <JobCard />
      </div>
    </div>
  );
};

export default JobList;
