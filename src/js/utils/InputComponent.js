import React from 'react';

const InputComponent = ({ label, value, name, onChange }) => {
  return (
    <div className="form-group">
      <label className='form-label'>{label}:</label>
      <input
        type="text"
        value={value}
        name={name}
        onChange={onChange}
        className="form-input"
      />
    </div>
  );
};

export default InputComponent;
