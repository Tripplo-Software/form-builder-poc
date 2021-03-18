import React from "react";

const FieldComponent = ({ item }) => {
  const Component = () => item.component;
  return (
    <span>
      <Component>{item.children}</Component>
    </span>
  );
};
const FormBuilder = (props) => {
  return (
    <div>
      {props.items.map((item, index) => (
        <>{item && <FieldComponent item={item} />}</>
      ))}
    </div>
  );
};

export default FormBuilder;
