import React from 'react'

const TabButton = ({active ,selectTab, children }) => {

  const buttonClasses = active
    ? "text-white border-b border-purple-600"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold hover:text-purple-600 ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
}

export default TabButton