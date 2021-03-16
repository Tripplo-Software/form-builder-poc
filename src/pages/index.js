import React from "react";
import HeadingOne from "../components/HeadingOne";
import FormBuilder from "../components/formBuilder";
const Index = () => {
  const input = () => <input />;
  const Button = (children) => <button>{children}</button>;
  const components = [
    {
      component: input(),
    },
    { component: Button("hi") },
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
