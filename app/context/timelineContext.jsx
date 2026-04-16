"use client";
import { createContext, useContext, useState } from "react";

const timelineContext = createContext();

export function timelineProvider({ children }) {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries((prev) => [entry, ...prev]);
  };

  return (
    <timelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </timelineContext.Provider>
  );
}

export const useTimeline = () => useContext(timelineContext);