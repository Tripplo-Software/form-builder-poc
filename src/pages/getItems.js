import { Input } from "antd";

const getItems = () => {
  //   const InputComponent = <Input />;
  const components = [
    {
      component: Input,
      name: "email",
      //   children: <span>Text</span>,
    },
    {
      component: Input,
      name: "job",
    },
  ];

  return components;
};

export default getItems;
