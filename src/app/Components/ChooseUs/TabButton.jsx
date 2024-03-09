import React from "react";

const TabButton = ({ active, selecttab, children }) => {
  const buttonClasses = active
    ? "text-black border px-4 w-50 bg-[#fcad17]"
    : "text-black border px-4 w-50 bg-stale-600";
  return (
    <button onClick={selecttab}><p className={`mr-3 border-none ${buttonClasses}`}>
      {children}
      </p>
    </button>
  );
};

export default TabButton;
