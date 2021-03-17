import React from "react";

const FormBuilder = (props) => {
  return (
    <div>
      {props.items.map((item, index) => (
        <>
          {item && (
            <span data={props.data} update={props.update}>
              {item.component}
            </span>
          )}
        </>
      ))}
    </div>
  );
};

export default FormBuilder;
