import React, { useState } from "react";

const FormFeild = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress1: "",
    streetAddress2: "",
    town: "",
    city: "",
    state: "",
    postcode: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <div className=" mt-8 ">
      <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-transparent"
            />
          </div>
          <div className="col-span-2 mb-4">
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-600">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-transparent"
            />
          </div>
          <div className="col-span-2 mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-600">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-transparent"
            />
          </div>
          <div className="col-span-2 mb-4">
            <label htmlFor="streetAddress1" className="block text-sm font-medium text-gray-600">
              Street Address (Line 1)
            </label>
            <input
              type="text"
              id="streetAddress1"
              name="streetAddress1"
              value={formData.streetAddress1}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-transparent"
            />
          </div>
          <div className="col-span-2 mb-4">
            <label htmlFor="streetAddress2" className="block text-sm font-medium text-gray-600">
              Street Address (Line 2)
            </label>
            <input
              type="text"
              id="streetAddress2"
              name="streetAddress2"
              value={formData.streetAddress2}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="town" className="block text-sm font-medium text-gray-600">
              Town
            </label>
            <input
              type="text"
              id="town"
              name="town"
              value={formData.town}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-600">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="state" className="block text-sm font-medium text-gray-600">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="postcode" className="block text-sm font-medium text-gray-600">
              Postcode
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-transparent"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormFeild;
