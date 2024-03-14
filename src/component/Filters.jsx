import React from "react";
import { useState, useEffect } from "react";

const Filters = ({ handler }) => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedDatePosted, setSelectedDatePosted] = useState("");
  const [selectedSalaryRange, setSelectedSalaryRange] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedEducation, setSelectedEducation] = useState("");

  const companies = [
    { id: 1, name: "Amazon" },
    { id: 2, name: "CVS Health" },
    { id: 3, name: "Toyota" },
    { id: 4, name: "Apple" },
  ];

  const locations = [
    { id: 1, name: "Mumbai" },
    { id: 2, name: "Chandigarh" },
    { id: 3, name: "Karnataka" },
    { id: 4, name: "Bangalore" },
  ];

  const datePostedOptions = [
    "Last 24 hours",
    "Last 48 hours",
    "Last 7 days",
    "Last 14 days",
    "Last month",
  ];

  const salaryRangeOptions = [
    "3 Lakh+",
    "6 Lakh+",
    "10 Lakh+",
    "15 Lakh+",
    "25 Lakh+",
  ];

  const skillsOptions = [
    "Javascript",
    "Machine learning",
    "JQuery",
    "Artificial intelligence",
  ];

  const experienceOptions = [
    "0-2 years",
    "3-5 years",
    "5-8 years",
    "Above 8 years",
  ];

  const educationOptions = ["Bachelors", "Masters", "Phd", "Diploma"];

  const clearAllFilters = () => {
    setSelectedCompany(null);
    setSelectedLocations([]);
    setSelectedDatePosted("");
    setSelectedSalaryRange("");
    setSelectedSkills([]);
    setSelectedExperience("");
    setSelectedEducation("");
  };

  //   useEffect(() => {
  //     if (selectedCompany === null) handler("id", null);
  //   }, [selectedCompany]);

  const toggleCompany = (event, companyId) => {
    // handler("id", event.target.checked ? companyId : null);
    setSelectedCompany(companyId);
  };

  const toggleLocation = (locationId) => {
    const isSelected = selectedLocations.includes(locationId);
    if (isSelected) {
      setSelectedLocations(selectedLocations.filter((id) => id !== locationId));
    } else {
      setSelectedLocations([...selectedLocations, locationId]);
    }
  };

  const toggleSkill = (skill) => {
    const isSelected = selectedSkills.includes(skill);
    if (isSelected) {
      setSelectedSkills(
        selectedSkills.filter((selectedSkill) => selectedSkill !== skill)
      );
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };
  return (
    <div className='bg-backgroundColor text-gray-400 p-4 border-2 border-black rounded-md mt-2 ml-4'>
      <h2 className='text-lg font-semibold mb-4 '>Filter by</h2>

      <div>
        <h3 className='font-semibold mb-2'>Company</h3>
        {companies.map((company) => (
          <div key={company.id} className='flex items-center'>
            <input
              type='checkbox'
              id={`company_${company.id}`}
              checked={selectedCompany === company.id}
              onChange={(event) => toggleCompany(event, company.id)}
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

      <div className='mt-4  '>
        <h3 className='font-semibold mb-2'>Location</h3>
        {locations.map((location) => (
          <div key={location.id} className='flex items-center'>
            <input
              type='checkbox'
              id={`location_${location.id}`}
              checked={selectedLocations.includes(location.id)}
              onChange={() => toggleLocation(location.id)}
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

      <div className='mt-4 '>
        <h3 className='font-semibold mb-2'>Date Posted</h3>
        {datePostedOptions.map((option) => (
          <div key={option} className='flex items-center'>
            <input
              type='checkbox'
              id={`datePosted_${option}`}
              checked={selectedDatePosted === option}
              onChange={() => setSelectedDatePosted(option)}
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

      <div className='mt-4  '>
        <h3 className='font-semibold mb-2'>Salary Range</h3>
        {salaryRangeOptions.map((option) => (
          <div key={option} className='flex items-center'>
            <input
              type='checkbox'
              id={`salaryRange_${option}`}
              checked={selectedSalaryRange === option}
              onChange={() => setSelectedSalaryRange(option)}
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
        <h3 className='font-semibold mb-2'>Skills</h3>
        {skillsOptions.map((skill) => (
          <div key={skill} className='flex items-center'>
            <input
              type='checkbox'
              id={`skill_${skill}`}
              checked={selectedSkills.includes(skill)}
              onChange={() => toggleSkill(skill)}
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

      <div className='mt-4  text-gray-200'>
        <h3 className='font-semibold mb-2'>Experience</h3>
        {experienceOptions.map((option) => (
          <div key={option} className='flex items-center'>
            <input
              type='checkbox'
              id={`experience_${option}`}
              checked={selectedExperience === option}
              onChange={() => setSelectedExperience(option)}
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

      <div className='mt-4 '>
        <h3 className='font-semibold mb-2  text-gray-200'>Education</h3>
        {educationOptions.map((option) => (
          <div key={option} className='flex items-center'>
            <input
              type='checkbox'
              id={`education_${option}`}
              checked={selectedEducation === option}
              onChange={() =>
                setSelectedEducation(selectedEducation === option ? "" : option)
              }
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
          onClick={clearAllFilters}
          className='bg-red-500 text-white px-3 py-2 rounded-md'
        >
          Clear all
        </button>
      </div>
    </div>
  );
};

export default Filters;
