import React from "react";
import HeadingOne from "../components/HeadingOne";
import FormBuilder from "../components/FormBuilder";
const Index = () => {
  const componets = [
    {
      component: <input />,
    },
    { component: <select /> },
  ];
  return (
    <>
      <HeadingOne className="text-center text-blue-500">
        This is the home page of the app!
      </HeadingOne>
    </>
  );
};

export default Index;
