import React, { useState } from 'react';

const Dropdown = ({ options, value, onChange }) => {

    return (
        <div className='form-selection'>
            <label>{options.mainLabel}:</label>
            <select  className='form-select' name={options.mainLabel} value={value} onChange={onChange}>
                <option value="">Select Department</option>
                {options.departments.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
