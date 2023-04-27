import React, { createContext, useEffect, useState } from "react";
import dataUser from "./data/users.json";
import dataTimesheets from "./data/timesheets.json";
import "./App.css";
import { IGlobalContext } from "./types";
import MainPage from "./pages/main";
import { Route, Routes } from "react-router-dom";
import TimesheetPage from "./pages/timesheet";

//@ts-ignore
const initGlobalContext: IGlobalContext = { dataTimesheets, dataUser };
export const GlobalContext = createContext(initGlobalContext);

const App = () => {
  return (
    <GlobalContext.Provider value={initGlobalContext}>
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/timesheet" element={<TimesheetPage />} />
      </Routes>
    </GlobalContext.Provider>
  );
};

export default App;
