import React, { useState } from "react";
import { useForm } from "react-hook-form";
import HeadingOne from "../components/HeadingOne";
import FormBuilder from "../components/formBuilder";

const Index = () => {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState({});
  const handleChange = (form) => setFormData(form);
  const components = [
    {
      component: <input ref={register} className="border border-red-400" />,
    },
    { component: <input ref={register} className="border border-red-400" /> },
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
