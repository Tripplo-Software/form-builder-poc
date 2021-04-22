import React from "react";
import _ from "lodash";
const FieldComponent = ({ item, update, data, onChange }) => {
  console.log("item", item, data);
  return (
    <span>
      {/* <Component name={item.name} onChange={onChange}>
        {item.children}
      </Component> */}

      <item.component onChange={(e) => console.log("e", e)}>
        {item.children}
      </item.component>
    </span>
  );
};
const FormBuilder = (props) => {
  const onChange = (e) => console.log("FormBuilder-e", e);

  return (
    <div>
      {props.items.map((item, index) => (
        <>
          {item && (
            <FieldComponent
              item={item}
              key={index}
              data={props.data}
              onChange={onChange}
              update={props.update}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default FormBuilder;
