import React, { ReactNode } from "react";

const TitleHeader: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <h1 className="font-semibold text-lg text-gray-800">{children}</h1>;
};

export default TitleHeader;
