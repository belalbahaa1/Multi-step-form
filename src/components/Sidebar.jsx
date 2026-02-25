import React from "react";

const Sidebar = ({ currentStep }) => {
  const steps = [
    { id: 1, name: "YOUR INFO" },
    { id: 2, name: "SELECT PLAN" },
    { id: 3, name: "ADD-ONS" },
    { id: 4, name: "SUMMARY" },
  ];

  return (
    <aside className="relative w-full h-[172px] md:h-full md:w-[274px] overflow-hidden rounded-lg">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="/images/bg-sidebar-desktop.svg"
        />
        <img
          src="/images/bg-sidebar-mobile.svg"
          alt="Sidebar Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      <div className="relative z-10 flex md:flex-col justify-center md:justify-start gap-4 md:gap-8 p-8">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center gap-4">
            <div
              className={`w-8 h-8 rounded-full border border-white flex items-center justify-center font-bold text-sm transition-colors duration-300 ${
                currentStep === step.id
                  ? "bg-light-blue text-marine-blue border-light-blue"
                  : "text-white"
              }`}
            >
              {step.id}
            </div>
            <div className="hidden md:block">
              <p className="text-xs text-light-blue font-normal uppercase">
                Step {step.id}
              </p>
              <p className="text-sm text-white font-bold tracking-wider uppercase">
                {step.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
