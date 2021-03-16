import React from "react";

const FormBuilder = (props) => {
  return (
    <div>
      {props.items.map((item, index) => (
        <>{item.hasLabel && <item.component>{item.children}</item.component>}</>
      ))}
    </div>
  );
};

export default FormBuilder;
