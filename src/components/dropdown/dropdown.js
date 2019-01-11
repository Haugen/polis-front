import React from 'react';

const dropdown = props => {
  let options = [
    <option key="alla" value="alla">
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
      <select>{options}</select>
    </div>
  );
};

export default dropdown;
