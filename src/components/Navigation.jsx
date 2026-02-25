import React from "react";

const Navigation = ({ currentStep, nextStep, prevStep }) => {
  return (
    <div className="mt-auto flex justify-between items-center bg-white md:bg-transparent p-4 md:p-0 absolute bottom-0 left-0 right-0 md:static">
      {currentStep > 1 && currentStep < 5 ? (
        <button
          onClick={prevStep}
          className="text-cool-gray font-bold hover:text-marine-blue transition-colors"
        >
          Go Back
        </button>
      ) : (
        <div></div>
      )}

      {currentStep < 4 ? (
        <button
          onClick={nextStep}
          className="bg-marine-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all"
        >
          Next Step
        </button>
      ) : (
        currentStep === 4 && (
          <button
            onClick={nextStep}
            className="bg-purplish-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-80 transition-all"
          >
            Confirm
          </button>
        )
      )}
    </div>
  );
};

export default Navigation;
