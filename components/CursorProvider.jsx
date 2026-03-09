"use client";

import { createContext, useContext, useState } from "react";
import CustomCursor from "./CustomCursor";

const CursorContext = createContext({
  isHovering: false,
  setIsHovering: () => {},
});

export const useCursor = () => useContext(CursorContext);

export default function CursorProvider({ children }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <CursorContext.Provider value={{ isHovering, setIsHovering }}>
      <CustomCursor isHovering={isHovering} />
      {children}
    </CursorContext.Provider>
  );
}
