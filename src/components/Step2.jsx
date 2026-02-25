import React from "react";

const Step2 = ({ formData, updateFormData }) => {
  const plans = [
    {
      id: "Arcade",
      icon: "/images/icon-arcade.svg",
      monthlyPrice: 9,
      yearlyPrice: 90,
    },
    {
      id: "Advanced",
      icon: "/images/icon-advanced.svg",
      monthlyPrice: 12,
      yearlyPrice: 120,
    },
    {
      id: "Pro",
      icon: "/images/icon-pro.svg",
      monthlyPrice: 15,
      yearlyPrice: 150,
    },
  ];

  const handleToggle = () => {
    updateFormData({
      billingCycle: formData.billingCycle === "monthly" ? "yearly" : "monthly",
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-marine-blue mb-2">
          Select your plan
        </h1>
        <p className="text-cool-gray">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => updateFormData({ plan: plan.id })}
            className={`flex md:flex-col items-start gap-4 md:gap-10 p-4 rounded-lg border transition-all text-left ${
              formData.plan === plan.id
                ? "border-purplish-blue bg-alabaster"
                : "border-light-gray hover:border-purplish-blue"
            }`}
          >
            <img src={plan.icon} alt={plan.id} className="w-10 h-10" />
            <div>
              <p className="font-bold text-marine-blue">{plan.id}</p>
              <p className="text-sm text-cool-gray">
                $
                {formData.billingCycle === "monthly"
                  ? plan.monthlyPrice
                  : plan.yearlyPrice}
                /{formData.billingCycle === "monthly" ? "mo" : "yr"}
              </p>
              {formData.billingCycle === "yearly" && (
                <p className="text-xs text-marine-blue mt-1">2 months free</p>
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="bg-alabaster rounded-lg p-3 flex justify-center items-center gap-6 mt-4">
        <span
          className={`text-sm font-bold transition-colors ${
            formData.billingCycle === "monthly"
              ? "text-marine-blue"
              : "text-cool-gray"
          }`}
        >
          Monthly
        </span>
        <button
          onClick={handleToggle}
          className="w-10 h-5 bg-marine-blue rounded-full relative p-1 transition-all"
        >
          <div
            className={`w-3 h-3 bg-white rounded-full transition-all duration-300 transform ${
              formData.billingCycle === "yearly"
                ? "translate-x-5"
                : "translate-x-0"
            }`}
          ></div>
        </button>
        <span
          className={`text-sm font-bold transition-colors ${
            formData.billingCycle === "yearly"
              ? "text-marine-blue"
              : "text-cool-gray"
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
};

export default Step2;
