import React from "react";
import { Input } from "antd";

const getItems = () => {
  const components = [
    {
      component: <Input />,
      children: <span>Text</span>,
    },
    {
      component: <Input />,
    },
  ];

  return components;
};

export default getItems;
