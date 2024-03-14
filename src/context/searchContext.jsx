import { useContext, createContext, useState } from "react";
import { useData } from "./dataContext";

const SearchContext = createContext({});

const SearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");

  const { jobList, setJobList } = useData();
  let tempData = [];

  const handleSearch = () => {
    let formattedSearchInput = "";
    if (searchInput[0] === "s" || searchInput[0] === "S") {
      formattedSearchInput = searchInput.split(" ").join("").toLowerCase();
    } else {
      formattedSearchInput = searchInput.toLowerCase();
    }

    tempData = jobList.filter((item) => {
      const { jobTitle } = item;
      let formattedTitle = "";
      if (jobTitle[0] === "S") {
        formattedTitle = jobTitle.split(" ").join("").toLowerCase();
      } else {
        formattedTitle = jobTitle.toLowerCase();
      }
      return formattedTitle === formattedSearchInput;
    });

    if (tempData.length === 0) return;
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
