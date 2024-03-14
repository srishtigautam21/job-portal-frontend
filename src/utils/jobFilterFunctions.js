const getCompanyFilter = (updatedJobList, filterByCompanyName) => {
  if (filterByCompanyName?.length > 0) {
    return updatedJobList.filter((item) =>
      filterByCompanyName.includes(item.companyName)
    );
  } else {
    return updatedJobList;
  }
};

const getLocationFilter = (categoryFilterData, selectedLocations) => {
  if (selectedLocations?.length > 0) {
    return categoryFilterData.filter((job) => {
      const { location } = job;
      const city = location.split(", ")[0];

      return selectedLocations.includes(city);
    });
  } else {
    return categoryFilterData;
  }
};

const getSalaryFilter = (locationFilterData, selectedSalaryRange) => {
  if (selectedSalaryRange?.length > 0) {
    return locationFilterData.filter((item) =>
      selectedSalaryRange.includes(item.salary)
    );
  } else {
    return locationFilterData;
  }
};

const getExperienceFilter = (salaryFilterData, selectedExperience) => {
  if (selectedExperience?.length > 0) {
    return salaryFilterData.filter((item) =>
      selectedExperience.includes(item.experience)
    );
  } else {
    return salaryFilterData;
  }
};

const getDatePostedFilter = (experienceFilterData, selectedDatePosted) => {
  if (selectedDatePosted?.length > 0) {
    return experienceFilterData.filter((item) =>
      selectedDatePosted.includes(item.datePosted)
    );
  } else {
    return experienceFilterData;
  }
};

export {
  getCompanyFilter,
  getLocationFilter,
  getSalaryFilter,
  getExperienceFilter,
  getDatePostedFilter,
};
