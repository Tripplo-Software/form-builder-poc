import React from "react";

const FieldComponent = ({ item, update, data }) => {
  const Component = () => item.component;
  return (
    <span>
      <Component
        onChange={(value) => {
          if (value.currentTarget) {
            update(_.set(data, item.name, value.currentTarget.value));
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
