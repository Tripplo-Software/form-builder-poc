import React from "react";

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
