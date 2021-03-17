import React, { useState } from "react";
import HeadingOne from "../components/HeadingOne";
import FormBuilder from "../components/formBuilder";
const Index = () => {
  const [formData, setFormData] = useState({});
  const components = [
    {
      component: <input />,
    },
    { component: <button>children</button> },
  ];
  return (
    <>
      <HeadingOne className="text-center text-blue-500">
        This is the home page of the app!
      </HeadingOne>

      <FormBuilder data={formData} items={components} />
    </>
  );
};

export default Index;
