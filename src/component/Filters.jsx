import React from "react";

import { useFilter } from "../context/filterContext";

const Filters = () => {
  const {
    companies,
    locations,
    datePostedOptions,
    salaryRangeOptions,
    skillsOptions,
    experienceOptions,
    educationOptions,
    state,
    dispatch,
    initialState,
  } = useFilter();
  const {
    selectedCompany,
    selectedLocations,
    selectedSalaryRange,
    selectedExperience,
    selectedDatePosted,
    updateJoblist,
  } = state;

  return (
    <div className='bg-backgroundColor text-gray-400 p-4 border-2 border-black rounded-md mt-2 ml-4 w-[20%]'>
      <h2 className='text-lg font-semibold mb-4 '>Filter by</h2>

      <div className=' text-gray-200'>
        <h3 className='font-semibold mb-2'>Company</h3>
        {companies.map((company) => (
          <div key={company.id} className='flex items-center'>
            <input
              type='checkbox'
              id={`company_${company.id}`}
              checked={selectedCompany?.includes(company.name)}
              onChange={() =>
                dispatch({ type: "COMPANY", payload: company.name })
              }
              className='form-checkbox h-5 w-5  text-blue-500 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none bg-slate-500'
            />
            <label
              htmlFor={`company_${company.id}`}
              className='ml-2  cursor-pointer select-none'
            >
              {company.name}
            </label>
          </div>
        ))}
      </div>

      <div className='mt-4  text-gray-200 '>
        <h3 className='font-semibold mb-2'>Location</h3>
        {locations.map((location) => (
          <div key={location.id} className='flex items-center'>
            <input
              type='checkbox'
              id={`location_${location.id}`}
              checked={selectedLocations?.includes(location.name)}
              onChange={() =>
                dispatch({ type: "LOCATION", payload: location.name })
              }
              className='form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none'
            />
            <label
              htmlFor={`location_${location.id}`}
              className='ml-2  cursor-pointer select-none'
            >
              {location.name}
            </label>
          </div>
        ))}
      </div>

      <div className='mt-4  text-gray-200 '>
        <h3 className='font-semibold mb-2'>Salary Range</h3>
        {salaryRangeOptions.map((option) => (
          <div key={option} className='flex items-center'>
            <input
              type='checkbox'
              id={`salaryRange_${option}`}
              checked={selectedSalaryRange?.includes(option)}
              onChange={() => dispatch({ type: "SALARY", payload: option })}
              className='form-radio h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none'
            />
            <label
              htmlFor={`salaryRange_${option}`}
              className='ml-2 cursor-pointer select-none'
            >
              {option}
            </label>
          </div>
        ))}
      </div>

      <div className='mt-4  text-gray-200'>
        <h3 className='font-semibold mb-2'>Experience</h3>
        {experienceOptions.map((option) => (
          <div key={option} className='flex items-center'>
            <input
              type='checkbox'
              id={`experience_${option}`}
              checked={selectedExperience?.includes(option)}
              onChange={() => dispatch({ type: "EXPERIENCE", payload: option })}
              className='form-radio h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none'
            />
            <label
              htmlFor={`experience_${option}`}
              className='ml-2  text-gray-200 cursor-pointer select-none'
            >
              {option}
            </label>
          </div>
        ))}
      </div>

      <div className='mt-4  text-gray-200 '>
        <h3 className='font-semibold mb-2'>Date Posted</h3>
        {datePostedOptions.map((option) => (
          <div key={option} className='flex items-center'>
            <input
              type='checkbox'
              id={`datePosted_${option}`}
              checked={selectedDatePosted?.includes(option)}
              onChange={() =>
                dispatch({ type: "DATE_POSTED", payload: option })
              }
              className='form-radio h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none'
            />
            <label
              htmlFor={`datePosted_${option}`}
              className='ml-2 cursor-pointer select-none'
            >
              {option}
            </label>
          </div>
        ))}
      </div>

      <div className='mt-4  text-gray-200'>
        <h3 className='font-semibold mb-2'>Skills</h3>
        {skillsOptions.map((skill) => (
          <div key={skill} className='flex items-center'>
            <input
              type='checkbox'
              id={`skill_${skill}`}
              className='form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none'
            />
            <label
              htmlFor={`skill_${skill}`}
              className='ml-2  text-gray-200 cursor-pointer select-none'
            >
              {skill}
            </label>
          </div>
        ))}
      </div>

      <div className='mt-4 '>
        <h3 className='font-semibold mb-2  text-gray-200'>Education</h3>
        {educationOptions.map((option) => (
          <div key={option} className='flex items-center'>
            <input
              type='checkbox'
              id={`education_${option}`}
              className='form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none'
            />
            <label
              htmlFor={`education_${option}`}
              className='ml-2  text-gray-200 cursor-pointer select-none'
            >
              {option}
            </label>
          </div>
        ))}
      </div>

      <div className='mt-6'>
        <button
          onClick={() => {
            dispatch({ type: "CLEAR", payload: { ...initialState } });
          }}
          className='bg-red-500 text-white px-3 py-2 rounded-md'
        >
          Clear all
        </button>
      </div>
    </div>
  );
};

export default Filters;
