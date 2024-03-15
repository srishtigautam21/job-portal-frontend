import React from "react";
import companyImg from "../assets/appleimg.png";
import { CircularProgressbar } from "react-circular-progressbar";

const JobCard = ({ job }) => {
  const percentage = 60;
  return (
    <div className='bg-jobCard w-[840px] min-h-[140px] rounded-xl'>
      <div className='flex gap-5 p-3 items-center justify-between'>
        <div>
          <img
            src={companyImg}
            alt='job'
            style={{ objectFit: "cover", width: "60px" }}
          />
          <div>
            <div className='font-bold text-gray-200'>{job.jobTitle}</div>
            <div className='flex flex-col'>
              <span className='text-gray-200'>{job.companyName}</span>
              <span className='text-gray-200'>{job.location}</span>
            </div>
          </div>
        </div>
        <div className='flex gap-7 items-center justify-center'>
          <div className='font-bold text-base text-[#FFFFFF]'>Skill Match</div>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            className='w-20 h-20'
            styles={{
              // Customize the root svg element
              root: {},

              // Customize the path, i.e. the "completed progress"
              path: {
                // Path color
                stroke: `rgb(64, 162, 227, ${percentage / 100})`,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",
                // Customize transition animation
                // transition: 'stroke-dashoffset 0.5s ease 0s',
                // Rotate the path
                // transform: 'rotate(0.25turn)',
                transformOrigin: "center center",
              },
              // Customize the circle behind the path, i.e. the "total progress"
              trail: {
                // Trail color
                stroke: "#E83363",
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",
                // Rotate the trail
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
              // Customize the text
              text: {
                // Text color
                fill: "#FFFFFF",
                // Text size
                fontSize: "20px",
                fontWeight: "600",
                transformOrigin: "center center",
              },
              // Customize background - only used when the `background` prop is true
              background: {
                fill: "#E83363",
              },
            }}
          />
        </div>
      </div>

      {/* <div className='font-bold text-gray-400'>Skills match</div>
      </div> */}
      <div className='bg-cardFooter h-[60px] p-3 rounded-bl-xl rounded-br-xl flex items-center justify-between'>
        <div className='text-gray-200'>
          <span>Posted {job.datePosted} | </span>
          <span> 10 applicants</span>
        </div>
        <button className='w-[150px] h-[36px] bg-teal-600 text-white rounded-2xl hover:cursor-pointer hover:bg-teal-400'>
          Apply now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
