import { useContext, createContext, useState, useEffect } from "react";

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [jobList, setJobList] = useState([]);

  const fetchJobs = async () => {
    const response = await fetch("http://localhost:3000/jobs");
    const data = await response.json();
    console.log(data.jobs);
    setJobList(data.jobs);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <DataContext.Provider value={{ jobList, setJobList }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);
export { DataProvider, useData };
