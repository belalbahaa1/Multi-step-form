import React from "react";

const Step3 = ({ formData, updateFormData }) => {
  const addons = [
    {
      id: "online-service",
      title: "Online service",
      description: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      id: "larger-storage",
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      id: "customizable-profile",
      title: "Customizable profile",
      description: "Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];

  const toggleAddon = (addonId) => {
    const newAddons = formData.addons.includes(addonId)
      ? formData.addons.filter((id) => id !== addonId)
      : [...formData.addons, addonId];
    updateFormData({ addons: newAddons });
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-marine-blue mb-2">
          Pick add-ons
        </h1>
        <p className="text-cool-gray">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {addons.map((addon) => (
          <div
            key={addon.id}
            onClick={() => toggleAddon(addon.id)}
            className={`flex items-center gap-4 md:gap-6 p-4 rounded-lg border cursor-pointer transition-all ${
              formData.addons.includes(addon.id)
                ? "border-purplish-blue bg-alabaster"
                : "border-light-gray hover:border-purplish-blue"
            }`}
          >
            <div
              className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                formData.addons.includes(addon.id)
                  ? "bg-purplish-blue border-purplish-blue"
                  : "bg-white border-light-gray"
              }`}
            >
              {formData.addons.includes(addon.id) && (
                <img
                  src="/images/icon-checkmark.svg"
                  alt="Checked"
                  className="w-3 h-3"
                />
              )}
            </div>
            <div className="flex-1">
              <p className="font-bold text-marine-blue text-sm md:text-base">
                {addon.title}
              </p>
              <p className="text-xs md:text-sm text-cool-gray">
                {addon.description}
              </p>
            </div>
            <p className="text-purplish-blue text-xs md:text-sm">
              +$
              {formData.billingCycle === "monthly"
                ? addon.monthlyPrice
                : addon.yearlyPrice}
              /{formData.billingCycle === "monthly" ? "mo" : "yr"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step3;
