export const validateForm = (formData) => {
    const validationErrors = {};
    if (!formData.country) validationErrors.country = 'Country is required';
    if (!formData.address)
      validationErrors.address = 'Street address is required';
    if (!formData.city) validationErrors.city = 'City is required';
    if (!formData.state) validationErrors.state = 'State is required';
    if (formData.description.length < 30)
      validationErrors.description = 'Description needs 30 or more characters';
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.price) validationErrors.price = 'Price per night is required';
    if (!formData.previewImage)
      validationErrors.previewImage = 'Preview image is required';
    return validationErrors;
  };