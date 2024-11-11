import React from "react";

function PrimaryButton({ label }) {
  return (
    <button
      className={`bg-primary text-white px-[30px] py-[10px] rounded-[3px] font-Montserrat font-medium hover:bg-title/80 hover:-translate-y-1 transition-all ease-in-out duration-700 delay-75`}
    >
      {label}
    </button>
  );
}

export default PrimaryButton;
