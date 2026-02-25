import React from "react";

const Step4 = ({ formData, setStep }) => {
  const plans = [
    { id: "Arcade", monthlyPrice: 9, yearlyPrice: 90 },
    { id: "Advanced", monthlyPrice: 12, yearlyPrice: 120 },
    { id: "Pro", monthlyPrice: 15, yearlyPrice: 150 },
  ];

  const addonsData = [
    {
      id: "online-service",
      title: "Online service",
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      id: "larger-storage",
      title: "Larger storage",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      id: "customizable-profile",
      title: "Customizable profile",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];

  const selectedPlan = plans.find((p) => p.id === formData.plan);
  const selectedAddons = addonsData.filter((a) =>
    formData.addons.includes(a.id),
  );

  const planPrice =
    formData.billingCycle === "monthly"
      ? selectedPlan.monthlyPrice
      : selectedPlan.yearlyPrice;

  const addonsPrice = selectedAddons.reduce(
    (acc, curr) =>
      acc +
      (formData.billingCycle === "monthly"
        ? curr.monthlyPrice
        : curr.yearlyPrice),
    0,
  );

  const totalPrice = planPrice + addonsPrice;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-marine-blue mb-2">
          Finishing up
        </h1>
        <p className="text-cool-gray">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div className="bg-alabaster rounded-lg p-6">
        <div className="flex justify-between items-center border-b border-light-gray pb-6 mb-4">
          <div>
            <p className="font-bold text-marine-blue md:text-lg">
              {formData.plan} (
              {formData.billingCycle === "monthly" ? "Monthly" : "Yearly"})
            </p>
            <button
              onClick={() => setStep(2)}
              className="text-cool-gray text-sm underline hover:text-purplish-blue transition-colors"
            >
              Change
            </button>
          </div>
          <p className="font-bold text-marine-blue md:text-lg">
            ${planPrice}/{formData.billingCycle === "monthly" ? "mo" : "yr"}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {selectedAddons.map((addon) => (
            <div
              key={addon.id}
              className="flex justify-between items-center text-sm"
            >
              <p className="text-cool-gray">{addon.title}</p>
              <p className="text-marine-blue font-medium">
                +$
                {formData.billingCycle === "monthly"
                  ? addon.monthlyPrice
                  : addon.yearlyPrice}
                /{formData.billingCycle === "monthly" ? "mo" : "yr"}
              </p>
            </div>
          ))}
          {selectedAddons.length === 0 && (
            <p className="text-cool-gray text-sm italic">No add-ons selected</p>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center px-6">
        <p className="text-cool-gray text-sm">
          Total (per {formData.billingCycle === "monthly" ? "month" : "year"})
        </p>
        <p className="text-purplish-blue font-bold text-lg md:text-xl">
          +${totalPrice}/{formData.billingCycle === "monthly" ? "mo" : "yr"}
        </p>
      </div>
    </div>
  );
};

export default Step4;
