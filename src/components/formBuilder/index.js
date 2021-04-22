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

  let valueItems = [];
  const addItem = () => {
    if (valueItems.length === 0) {
      const firstItem = {
        name: null,
        job: null,
      };
      valueItems.push(firstItem);
    } else {
      valueItems.push({ name: null, job: null });
    }
  };

  return <span></span>;
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
