import React from "react";

function ProjectButton({ label, url }) {
  return (
    <button
      className={`bg-primary text-white px-5 py-2 text-[10px] rounded-[3px] w-full font-Montserrat font-medium hover:bg-title/80 hover:-translate-y-1 transition-all ease-in-out duration-700 delay-75`}
    >
      <a href={url} target="_blank" rel="noreferrer">
        {label}
      </a>
    </button>
  );
}

export default ProjectButton;
