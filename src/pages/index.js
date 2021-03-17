import React, { useState } from "react";
import HeadingOne from "../components/HeadingOne";
import FormBuilder from "../components/formBuilder";
const Index = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (form) => setFormData(form);
  const components = [
    {
      component: <input />,
    },
    { component: <button>children</button> },
  ];
  console.log("formData", formData);
  return (
    <>
      <HeadingOne className="text-center text-blue-500">
        This is the home page of the app!
      </HeadingOne>

      <FormBuilder data={formData} items={components} update={handleChange} />
    </>
  );
};

export default Index;
