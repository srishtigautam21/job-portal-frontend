import { useFilter } from "../context/filterContext";
import { useData } from "../context/dataContext";
import {
  getCompanyFilter,
  getLocationFilter,
  getSalaryFilter,
  getExperienceFilter,
  getDatePostedFilter,
} from "./jobFilterFunctions";

const useFilterHook = () => {
  const { state } = useFilter();
  const { jobList } = useData();
  const {
    selectedCompany,
    selectedLocations,
    selectedSalaryRange,
    selectedExperience,
    selectedDatePosted,
  } = state;
  const filtereredJobs = [...jobList];

  const categoryFilterData = getCompanyFilter(filtereredJobs, selectedCompany);

  const locationFilterData = getLocationFilter(
    categoryFilterData,
    selectedLocations
  );

  const salaryFilterData = getSalaryFilter(
    locationFilterData,
    selectedSalaryRange
  );

  const experienceFilterData = getExperienceFilter(
    salaryFilterData,
    selectedExperience
  );

  const dateFilterData = getDatePostedFilter(
    experienceFilterData,
    selectedDatePosted
  );

  if (dateFilterData.length === 0) {
    return jobList;
  } else {
    return dateFilterData;
  }
};
export { useFilterHook };
