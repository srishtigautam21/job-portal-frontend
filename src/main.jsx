import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SearchProvider } from "./context/searchContext.jsx";
import { DataProvider } from "./context/dataContext.jsx";
import { FilterProvider } from "./context/filterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <FilterProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </FilterProvider>
    </DataProvider>
  </React.StrictMode>
);
