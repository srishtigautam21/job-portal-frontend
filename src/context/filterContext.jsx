import { useContext, createContext, useReducer } from "react";
import { useData } from "./dataContext";

const FilterContext = createContext({});

const FilterProvider = ({ children }) => {
  const { jobList } = useData();
  //   const [selectedCompany, setSelectedCompany] = useState(null);
  //   const [selectedLocations, setSelectedLocations] = useState([]);
  //   const [selectedDatePosted, setSelectedDatePosted] = useState("");
  //   const [selectedSalaryRange, setSelectedSalaryRange] = useState("");
  //   const [selectedSkills, setSelectedSkills] = useState([]);
  //   const [selectedExperience, setSelectedExperience] = useState("");
  //   const [selectedEducation, setSelectedEducation] = useState("");

  const companies = [
    { id: 1, name: "Amazon" },
    { id: 2, name: "CSV Health" },
    { id: 3, name: "Toyota" },
    { id: 4, name: "Apple" },
  ];

  const locations = [
    { id: 1, name: "Mumbai" },
    { id: 2, name: "Gurugram" },
    { id: 3, name: "Bangalore" },
  ];

  const datePostedOptions = [
    "1 day ago",
    "2 day ago",
    "7 day ago",
    "10 day ago",
    "14 day ago",
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

  //   const clearAllFilters = () => {
  //     setSelectedCompany(null);
  //     setSelectedLocations([]);
  //     setSelectedDatePosted("");
  //     setSelectedSalaryRange("");
  //     setSelectedSkills([]);
  //     setSelectedExperience("");
  //     setSelectedEducation("");
  //   };

  //   useEffect(() => {
  //     if (selectedCompany === null) handler("id", null);
  //   }, [selectedCompany]);

  const toggleCompany = (companyId) => {
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

  const initialState = {
    selectedCompany: [],
    selectedLocations: [],
    selectedSalaryRange: [],
    selectedExperience: [],
    selectedDatePosted: [],
    updateJoblist: jobList,
  };
  const filterReducerFunc = (state, action) => {
    switch (action.type) {
      case "CLEAR":
        return { ...action.payload, updateJoblist: [...state.updateJoblist] };
      case "COMPANY":
        return {
          ...state,
          selectedCompany: state.selectedCompany.includes(action.payload)
            ? state.selectedCompany.filter((i) => i !== action.payload)
            : [...state.selectedCompany, action.payload],
        };
      case "LOCATION":
        return {
          ...state,
          selectedLocations: state.selectedLocations.includes(action.payload)
            ? state.selectedLocations.filter((i) => i !== action.payload)
            : [...state.selectedLocations, action.payload],
        };
      case "SALARY":
        return {
          ...state,
          selectedSalaryRange: state.selectedSalaryRange.includes(
            action.payload
          )
            ? state.selectedSalaryRange.filter((i) => i !== action.payload)
            : [...state.selectedSalaryRange, action.payload],
        };
      case "EXPERIENCE":
        return {
          ...state,
          selectedExperience: state.selectedExperience.includes(action.payload)
            ? state.selectedExperience.filter((i) => i !== action.payload)
            : [...state.selectedExperience, action.payload],
        };
      case "DATE_POSTED":
        return {
          ...state,
          selectedDatePosted: state.selectedDatePosted.includes(action.payload)
            ? state.selectedDatePosted.filter((i) => i !== action.payload)
            : [...state.selectedDatePosted, action.payload],
        };
    }
  };

  const [state, dispatch] = useReducer(filterReducerFunc, initialState);
  return (
    <FilterContext.Provider
      value={{
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
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };
