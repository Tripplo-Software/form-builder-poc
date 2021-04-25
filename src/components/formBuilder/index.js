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

const ArrayComponent = ({ item, update, data }) => {
  console.log("ArrayComponent-Value", item);

  const fields = item.items;
  let valueItems = [];
  const addItem = () => {
    if (valueItems.length === 0) {
      let firstItem = {};
      fields.map((field) => (firstItem[`${field.name}`] = null));
      valueItems.push(firstItem);
    } else {
      let newItem = {};
      fields.map((field) => (newItem[`${field.name}`] = null));
      valueItems.push(newItem);
    }
  };

  return (
    <span>
      {item.items.map((component) => (
        <component.component />
      ))}
      <button onClick={() => addItem()}>{item.add_label}</button>
    </span>
  );
};
const FormBuilder = (props) => {
  console.log("FormBuilder", props);
  return (
    <div>
      {props.items.map((item, index) => (
        <>
          {item && !item.items && (
            <FieldComponent
              item={item}
              key={index}
              data={props.data}
              update={props.update}
            />
          )}

          {item.items && (
            <ArrayComponent
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
