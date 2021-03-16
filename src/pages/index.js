import React from "react";
import HeadingOne from "../components/HeadingOne";
import FormBuilder from "../components/formBuilder";
const Index = () => {
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

      <FormBuilder items={components} />
    </>
  );
};

export default Index;
