import React, { useState } from "react";
import HeadingOne from "../components/HeadingOne";
import FormBuilder from "../components/formBuilder";

const Index = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (data) => setFormData({ ...data });
  const components = [
    {
      component: <input name="player" className="border border-red-400" />,
      children: <span>Text</span>,
    },
    {
      component: <input name="team" className="border border-red-400" />,
    },
  ];
  console.log("formData", formData);
  return (
    <>
      <HeadingOne className="text-center text-blue-500">
        This is the home page of the app!
      </HeadingOne>

      <FormBuilder items={components} data={formData} update={handleChange} />

      <button onClick={() => handleSubmit(handleChange)}>Click me</button>
    </>
  );
};

export default Index;
