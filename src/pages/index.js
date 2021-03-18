import React, { useState } from "react";
import { useForm } from "react-hook-form";
import HeadingOne from "../components/HeadingOne";
import FormBuilder from "../components/formBuilder";

const Index = () => {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState({});
  const handleChange = (data) => console.log(data);
  const components = [
    {
      component: (
        <input name="player" ref={register} className="border border-red-400" />
      ),
      children: <span>Text</span>,
    },
    {
      component: (
        <input name="team" ref={register} className="border border-red-400" />
      ),
    },
  ];
  console.log("formData", formData);
  return (
    <>
      <HeadingOne className="text-center text-blue-500">
        This is the home page of the app!
      </HeadingOne>

      <FormBuilder items={components} />

      <button onClick={() => handleSubmit(handleChange)}>Click me</button>
    </>
  );
};

export default Index;
