import React from "react";
import { Input } from "antd";

const getItems = () => {
  const InputComponent = () => <Input />;
  const components = [
    {
      component: InputComponent,
      children: <span>Text</span>,
    },
    {
      component: InputComponent,
    },
  ];

  return components;
};

export default getItems;
