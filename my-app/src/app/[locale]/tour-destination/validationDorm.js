const validateForm = (formData) => {
    const errors = {};
  
    // Validate adults
    if (formData.adults < 1) {
      errors.adults = "At least 1 adult is required.";
    }
  
    // Validate startDate
    if (!formData.startDate) {
      errors.startDate = "Start date is required.";
    }
  
    // Validate endDate
    if (!formData.endDate) {
      errors.endDate = "End date is required.";
    } else if (formData.startDate && formData.endDate <= formData.startDate) {
      errors.endDate = "End date must be after the start date.";
    }
  
    return errors;
  };
  