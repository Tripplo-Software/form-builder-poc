import React, { useState } from "react";
import HeadingOne from "../components/HeadingOne";
import FormBuilder from "../components/formBuilder";
import getItems from "./getItems";
import getArrayItems from "./getArrayItems";

const Index = () => {
  const [formData, setFormData] = useState({});
  const [arrayData, setArrayData] = useState({});
  const handleChange = (data) => setFormData({ ...data });
  const handleArrayChange = (data) => setArrayData({ ...data });

  const ref = React.createRef();

  console.log("formData", formData);
  return (
    <>
      <HeadingOne className="text-center text-blue-500">
        This is the home page of the app!
      </HeadingOne>
      <p>Single forms</p>
      <FormBuilder items={getItems()} data={formData} update={handleChange} />
      <p>Array forms</p>
      <FormBuilder
        items={getArrayItems()}
        data={arrayData}
        update={handleArrayChange}
      />

      {/* <button onClick={() => handleSubmit(handleChange)}>Click me</button> */}
    </>
  );
};

export default Index;
