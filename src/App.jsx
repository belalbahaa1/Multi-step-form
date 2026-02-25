import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Navigation from "./components/Navigation";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Arcade",
    billingCycle: "monthly",
    addons: [],
  });

  const [errors, setErrors] = useState({});

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "This field is required";
    if (!formData.email.trim()) {
      newErrors.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "This field is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setCurrentStep((prev) => prev + 1);
      }
    } else {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        );
      case 2:
        return <Step2 formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <Step3 formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <Step4 formData={formData} setStep={setCurrentStep} />;

      case 5:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center py-10">
            <img
              src="/images/icon-thank-you.svg"
              alt="Thank You"
              className="mb-6 w-20 h-20"
            />
            <h1 className="text-3xl font-bold text-marine-blue mb-4">
              Thank you!
            </h1>
            <p className="text-cool-gray max-w-md">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-magnolia flex items-start md:items-center justify-center font-ubuntu overflow-hidden">
      <div className="bg-white md:bg-white p-4 md:p-4 rounded-2xl shadow-xl flex flex-col md:flex-row w-full max-w-[940px] md:h-[600px] relative mt-0 md:mt-0">
        <Sidebar currentStep={currentStep > 4 ? 4 : currentStep} />

        <div className="flex-1 px-4 md:px-24 py-10 md:py-10 flex flex-col h-full bg-white md:bg-white rounded-lg -mt-[72px] md:mt-0 mx-4 md:mx-0 shadow-lg md:shadow-none">
          {renderStep()}

          {currentStep <= 4 && (
            <Navigation
              currentStep={currentStep}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
