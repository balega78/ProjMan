import React from 'react';
import apiService from '../services/apiService';
import './Form.scss';

export const backendValidation = async (setBackendError, path) => {
  const api = await apiService.post(path, {});
  setBackendError(api.message);
};

function Form({ formName, method, handleSubmit, children }) {
  return (
    <form className="projman-form" method={method}>
      <div className="highlight box-header">
        <h3>{formName}</h3>
      </div>
      <div className="form-content">
        <div className="form-inputs">{children}</div>
        <div className="form-buttons">
          <button className="form-submit" onClick={e => handleSubmit(e)}>
            {formName}
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
