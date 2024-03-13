import { useState } from "react";
// import "./index.css";
import "./App.css";
import Navbar from "./component/Navbar";
import JobList from "./component/JobList";

function App() {
  return (
    <div className='bg-black min-h-[100vh] w-screen'>
      <Navbar />
      <JobList />
    </div>
  );
}

export default App;
