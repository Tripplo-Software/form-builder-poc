import React from "react";

const FieldComponent = ({ item }) => {
  return (
    <>
      <item.component />
    </>
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
