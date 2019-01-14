import React from 'react';

const dropdown = props => {
  let options = [
    <option key="alla" value="Alla">
      Alla
    </option>
  ];

  props.values.forEach(value => {
    options.push(
      <option key={value} value={value}>
        {value}
      </option>
    );
  });

  return (
    <div className="form-select">
      <select onChange={props.handleChange}>{options}</select>
    </div>
  );
};

export default dropdown;
