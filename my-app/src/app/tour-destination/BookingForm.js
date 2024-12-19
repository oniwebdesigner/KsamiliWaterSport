import React, { useState } from "react";
import { FaMapMarkerAlt, FaUser, FaChild, FaCalendarAlt } from "react-icons/fa";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    adults: 1,
    children: 0,
    date: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Title with Icon */}
      <h4 className="text-sm text-black mb-4 flex items-center">
        <FaMapMarkerAlt className="text-blue-500 mr-2" /> Ksamil
      </h4>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Adults */}
        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
          <div className="flex items-center space-x-2">
            <FaUser className="text-gray-800" />
            <span className="text-gray-800">Adults</span>
          </div>
          <div className="flex items-center space-x-2">
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
          </div>
        </div>

        {/* Children */}
        <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
          <div className="flex items-center space-x-2">
            <FaChild className="text-gray-800" />
            <span className="text-gray-800">Children</span>
          </div>
          <div className="flex items-center space-x-2">
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
          </div>
        </div>

        {/* Date Selection */}
        <div className="bg-gray-100 p-3 rounded-md">
          <label htmlFor="date" className="text-gray-800 mb-2 flex items-center">
            <FaCalendarAlt className="text-blue-700 mr-2" /> Select Date
          </label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) => handleChange("date", e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-900 transition duration-300"
        >
          Check Availability
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
