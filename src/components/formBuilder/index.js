import React from "react";

const FieldComponent = ({ item, update }) => {
  const Component = () => item.component;
  return (
    <span>
      <Component
        onChange={(value) => {
          if (value.currentTarget) {
          }
        }}
      >
        {item.children}
      </Component>
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
