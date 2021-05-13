import React, { useState } from 'react';
import './Input.scss';

const Input = ({
  name,
  type,
  isSubmited,
  onChange,
  errorMessage,
  validator,
  isDisabled,
  hungarianName
}) => {
  const [value, setValue] = useState('');

  validator = validator ? validator : () => true;

  const handleChange = e => {
    setValue(e.target.value);
    onChange(name, e.target.value, validator(e.target.value));
  };

  return (
    <div className="form-input">
      <input
        type={type}
        className={
          !isSubmited
            ? ''
            : isSubmited && !validator(value)
            ? 'inputError'
            : 'inputSuccess'
        }
        placeholder={hungarianName}
        onChange={handleChange}
        disabled={isDisabled}
      />
      <p className="message">
        {isSubmited && !validator(value) ? errorMessage : ''}
      </p>
    </div>
  );
};

export default Input;
