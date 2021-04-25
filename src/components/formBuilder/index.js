import React, { useState } from "react";
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
  const [valueItems, setValueItems] = useState([]);
  const fields = item.items;
  console.log("ArrayComponent-Value-1", fields);

  const addItem = () => {
    if (valueItems.length === 0) {
      let firstItem = {};
      fields.map((field) => (firstItem[`${field.name}`] = null));

      setValueItems(firstItem);
      console.log("xxx");
    } else {
      let newItem = [...valueItems];
      fields.map((field) => (newItem[`${field.name}`] = null));

      newItem.push(newItem);
      setValueItems(newItem);
      console.log("xxx-2");
    }
  };

  console.log("ArrayComponent-Value-2", item, valueItems);

  return (
    <span>
      {valueItems.map((valueItem, index) => (
        <div>
          {item.items.map((component) => (
            <component.component />
          ))}
        </div>
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
