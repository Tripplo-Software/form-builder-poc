import React from "react";
import _ from "lodash";
const FieldComponent = ({ item, update, data }) => {
  console.log("item", item, data);
  return (
    <span>
      {/* <Component name={item.name} onChange={onChange}>
        {item.children}
      </Component> */}

      <item.component
        onChange={(e) => {
          const dataClone = { ...data };

          dataClone[`${item.name}`] = e.currentTarget.value;

          update(dataClone);
        }}
      >
        {item.children}
      </item.component>
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
              key={index}
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
