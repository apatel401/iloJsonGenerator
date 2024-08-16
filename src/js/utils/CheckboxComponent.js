import React from 'react';

const CheckboxComponent = ({ label, checked, name, onChange }) => {
  return (
    <div className="form-group">
      <label className='form-label'>
        {label}:
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="form-checkbox"
        />
      </label>
    </div>
  );
};

export default CheckboxComponent;