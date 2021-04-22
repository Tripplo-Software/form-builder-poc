import React, { useState } from "react";
import HeadingOne from "../components/HeadingOne";
import FormBuilder from "../components/formBuilder";

const FancyInput = React.forwardRef((props, ref, onChange) => (
  <input
    ref={ref}
    className="border border-red-400"
    {...props}
    onChange={onChange}
  />
));
const Index = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (data) => setFormData({ ...data });
  const ref = React.createRef();
  const components = [
    {
      component: <FancyInput name="player" ref={ref} />,
      children: <span>Text</span>,
    },
    {
      component: <FancyInput name="ball" />,
    },
  ];
  console.log("formData", formData);
  return (
    <>
      <HeadingOne className="text-center text-blue-500">
        This is the home page of the app!
      </HeadingOne>

      <FormBuilder items={components} data={formData} update={handleChange} />

      {/* <button onClick={() => handleSubmit(handleChange)}>Click me</button> */}
    </>
  );
};

export default Index;
