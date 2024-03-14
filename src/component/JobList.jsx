import React from "react";
import JobCard from "./JobCard";
import { useFilterHook } from "../utils/useFilterHook";
import { useData } from "../context/dataContext";

const JobList = () => {
  const { jobList, setJobList } = useData();
  const dateFilterData = useFilterHook();

  return (
    <div className='p-5'>
      <div className='w-[900px] flex items-center justify-between mb-5'>
        <div className='text-white font-semibold'>
          SEARCH RESULTS /
          <span className='text-sm font-thin'> JOBS-2049 results</span>
        </div>
        <div className='flex gap-3 items-center'>
          <span className='text-white'>Sort By</span>
          <button className='w-[100px] h-[35px] bg-white'>Latest</button>
        </div>
      </div>
      <div className='bg-joblist w-[900px] p-5 flex flex-col items-center justify-center gap-5 rounded-xl'>
        {dateFilterData?.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;
