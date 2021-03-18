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
        <>{item && item.component}</>
      ))}
    </div>
  );
};

export default FormBuilder;
