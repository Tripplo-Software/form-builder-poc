import { Input } from "antd";

const getArrayItems = () => {
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

export default getArrayItems;
