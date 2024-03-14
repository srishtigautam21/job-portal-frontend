import { useContext, createContext, useState } from "react";
import { useData } from "./dataContext";

const SearchContext = createContext({});

const SearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [message, setErrorMsg] = useState("");
  const { jobList, setJobList } = useData();
  let tempData = [];

  const handleSearch = () => {
    console.log(searchInput[0]);
    // if(searchInput)
    let formattedSearchInput = "";
    if (searchInput[0] === "s" || searchInput[0] === "S") {
      formattedSearchInput = searchInput.split(" ").join("").toLowerCase();
    } else {
      formattedSearchInput = searchInput.toLowerCase();
    }
    console.log(formattedSearchInput, typeof searchInput);
    tempData = jobList.filter((item) => {
      const { jobTitle } = item;
      let formattedTitle = "";
      if (jobTitle[0] === "S") {
        formattedTitle = jobTitle.split(" ").join("").toLowerCase();
      } else {
        formattedTitle = jobTitle.toLowerCase();
      }
      return formattedTitle === formattedSearchInput;
      // jobTitle.toLowerCase().includes(searchInput.toLowerCase());
    });
    console.log(tempData);
    if (tempData.length === 0) setErrorMsg("No matching data");
    else {
      setJobList(tempData);
    }
  };
  return (
    <SearchContext.Provider
      value={{ searchInput, setSearchInput, handleSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => useContext(SearchContext);
export { SearchProvider, useSearch };
