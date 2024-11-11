import React from "react";

function StackSlider() {
  const slideItems = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Redwood Js",
    "C#",
    "ASP.NET",
    "React Js",
    "React Native",
    "Tailwind CSS",
    "Bootstrap",
    "Graph QL",
    "SQL",
    "WordPress",
    "Figma",
  ];

  const slideItemsDuplicate = [...slideItems, ...slideItems];

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        {slideItemsDuplicate.map((item, index) => (
          <div key={index} className="slider-item">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <h4 className="text-[#34C38F]">{item}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StackSlider;
