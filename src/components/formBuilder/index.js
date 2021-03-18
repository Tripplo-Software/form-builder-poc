import React from "react";
import _ from "lodash";
const FieldComponent = ({ item, update, data }) => {
  console.log("item", item.component);
  const Component = () => item.component;
  return (
    <span>
      <Component
        name={item.name}
        onChange={(e) => {
          console.log("value", e);
          if (e.currentTarget) {
            update(_.set(data, item.name, e.currentTarget.value));
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
        <>
          {item && (
            <FieldComponent
              item={item}
              data={props.data}
              update={props.update}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default FormBuilder;
