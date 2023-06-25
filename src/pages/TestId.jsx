import React, { useState } from 'react';

const MyComponent = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    const { value } = event.target;
    setSelectedValue(value);
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>Selected value: {selectedValue}</p>
    </div>
  );
};

export default MyComponent;