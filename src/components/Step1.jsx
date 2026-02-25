import React from "react";

const Step1 = ({ formData, updateFormData, errors }) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-marine-blue mb-2">
          Personal info
        </h1>
        <p className="text-cool-gray">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <label className="text-sm text-marine-blue font-medium">Name</label>
            {errors.name && (
              <span className="text-xs font-bold text-strawberry-red">
                {errors.name}
              </span>
            )}
          </div>
          <input
            type="text"
            placeholder="e.g. Vanessa Mint"
            value={formData.name}
            onChange={(e) => updateFormData({ name: e.target.value })}
            className={`px-4 py-3 rounded-lg border focus:ring-1 focus:ring-purplish-blue focus:outline-none placeholder:text-cool-gray font-medium text-marine-blue ${
              errors.name ? "border-strawberry-red" : "border-light-gray"
            }`}
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <label className="text-sm text-marine-blue font-medium">
              Email Address
            </label>
            {errors.email && (
              <span className="text-xs font-bold text-strawberry-red">
                {errors.email}
              </span>
            )}
          </div>
          <input
            type="email"
            placeholder="e.g. vanessamint@lorem.com"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            className={`px-4 py-3 rounded-lg border focus:ring-1 focus:ring-purplish-blue focus:outline-none placeholder:text-cool-gray font-medium text-marine-blue ${
              errors.email ? "border-strawberry-red" : "border-light-gray"
            }`}
          />
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <label className="text-sm text-marine-blue font-medium">
              Phone Number
            </label>
            {errors.phone && (
              <span className="text-xs font-bold text-strawberry-red">
                {errors.phone}
              </span>
            )}
          </div>
          <input
            type="tel"
            placeholder="e.g. +1 234 567 890"
            value={formData.phone}
            onChange={(e) => updateFormData({ phone: e.target.value })}
            className={`px-4 py-3 rounded-lg border focus:ring-1 focus:ring-purplish-blue focus:outline-none placeholder:text-cool-gray font-medium text-marine-blue ${
              errors.phone ? "border-strawberry-red" : "border-light-gray"
            }`}
          />
        </div>
      </form>
    </div>
  );
};

export default Step1;
