import React, { useState } from "react";
import { FaMapMarkerAlt, FaUser, FaChild, FaCalendarAlt } from "react-icons/fa";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    adults: 1,
    children: 0,
    dates: [],
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = (formData) => {
    const errors = {};

    if (formData.adults < 1) {
      errors.adults = "At least 1 adult is required.";
    }
    if (formData.children < 0) {
      errors.children = "Number of children cannot be negative.";
    }
    if (formData.dates.length !== 2) {
      errors.dates = "Please select a start and end date.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setSuccessMessage("");
      return;
    }

    setValidationErrors({});
    setSuccessMessage("Booking request submitted successfully!");
    console.log("Form Data Submitted:", formData);

    setFormData({
      adults: 1,
      children: 0,
      dates: [],
    });
  };

  return (
    <section className="p-6 bg-white rounded-lg shadow-md">
      <h4 className="text-sm text-black mb-4 flex items-center">
        <FaMapMarkerAlt className="text-blue-500 mr-2" /> Ksamil
      </h4>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Adults */}
        <section className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
          <section className="flex items-center space-x-2">
            <FaUser className="text-gray-700" />
            <span className="text-gray-800">Adults</span>
          </section>
          <section className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() =>
                handleChange("adults", Math.max(1, formData.adults - 1))
              }
              className="w-8 h-8 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-gray-800">{formData.adults}</span>
            <button
              type="button"
              onClick={() => handleChange("adults", formData.adults + 1)}
              className="w-8 h-8 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300"
            >
              +
            </button>
          </section>
        </section>
        {validationErrors.adults && (
          <p className="text-red-500 text-sm">{validationErrors.adults}</p>
        )}

        {/* Children */}
        <section className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
          <section className="flex items-center space-x-2">
            <FaChild className="text-gray-700" />
            <span className="text-gray-800">Children</span>
          </section>
          <section className="flex items-center space-x-2">
            <button
              type="button"
              onClick={() =>
                handleChange("children", Math.max(0, formData.children - 1))
              }
              className="w-8 h-8 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-gray-800">{formData.children}</span>
            <button
              type="button"
              onClick={() => handleChange("children", formData.children + 1)}
              className="w-8 h-8 bg-gray-200 rounded-full text-gray-800 hover:bg-gray-300"
            >
              +
            </button>
          </section>
        </section>
        {validationErrors.children && (
          <p className="text-red-500 text-sm">{validationErrors.children}</p>
        )}

        {/* Date Range Picker */}
        <section className="bg-gray-100 p-3 rounded-md gap-2">
          <label className="text-gray-700 mb-2 flex items-center">
            <FaCalendarAlt className="text-gray-700 mr-2" />
            <span className="text-gray-700">Select Dates</span>
          </label>
          <Flatpickr
            options={{ mode: "range", dateFormat: "Y-m-d" }}
            value={formData.dates}
            onChange={(dates) => handleChange("dates", dates)}
            className="w-full border border-gray-300 rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </section>
        {validationErrors.dates && (
          <p className="text-red-500 text-sm">{validationErrors.dates}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-900 transition duration-300"
        >
          Check Availability
        </button>
      </form>

      {successMessage && (
        <p className="text-green-500 text-lg mt-4">{successMessage}</p>
      )}
    </section>
  );
};

export default BookingForm;
