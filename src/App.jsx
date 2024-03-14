import { useState } from "react";
// import "./index.css";
import "./App.css";
import Navbar from "./component/Navbar";
import JobList from "./component/JobList";
import Filters from "./component/Filters";

function App() {
  return (
    <div className='bg-black min-h-[100vh] w-screen'>
      <Navbar />
      <div className='flex gap-3'>
        <Filters />
        <JobList />
      </div>
    </div>
  );
}

export default App;
