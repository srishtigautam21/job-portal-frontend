import { useContext, createContext, useState, useEffect } from "react";

const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [jobList, setJobList] = useState([]);

  const fetchJobs = async () => {
    const response = await fetch(
      "https://job-portal-backend-drab.vercel.app/jobs"
    );
    const data = await response.json();

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
