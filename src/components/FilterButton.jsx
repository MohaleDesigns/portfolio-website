import React from "react";

function FilterButton({ title, subTitle, onClick, active }) {
  return (
    <button
      className={`w-[150px] ${
        active ? "bg-title/50" : "bg-primary/50"
      } border border-paragraph/10 text-white p-[10px] rounded-[5px] hover:bg-title/50 hover:-translate-y-1 transition-all ease-in-out duration-700 delay-75`}
      onClick={onClick}
    >
      <p className="font-Montserrat font-medium text-[13px] sm:text-[13px] sm:mb-[1px]">
        {title}
      </p>
      <p className="font-Montserrat font-normal text-[8px] sm:text-[10px]">
        {subTitle}
      </p>
    </button>
  );
}

export default FilterButton;
