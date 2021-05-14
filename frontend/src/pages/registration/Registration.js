import React, { useState } from 'react';
import Input from '../../common/form/Input';
import Form from '../../common/form/Form';
import apiService from '../../common/services/apiService';
import {
  checkIfInputIsEmpty,
  checkLengthOfInput,
} from '../../common/services/validators';
import Box from '../../common/box/Box';


const Registration = () => {
  const [inputStates, setInputStates] = useState({
    username: false,
    password: false,
    rights: false
  });
  const [inputs, setInputs] = useState({});
  const [backendError, setBackendError] = useState('');
  const [isSubmited, setSubmited] = useState(false);

  const inputChange = (inputName, inputValue, isValid) => {
    const newInputStates = { ...inputStates };
    const newInputs = { ...inputs };
    newInputStates[inputName] = isValid;
    newInputs[inputName] = inputValue;
    setInputStates(newInputStates);
    setInputs(newInputs);
  };

  const handleSubmit = async event => {
    if (backendError) {
      setBackendError('');
    }
    event.preventDefault();
    setSubmited(true);
    if (Object.values(inputStates).every(input => input)) {
      const response = await apiService.post('/registration', inputs, false);
      if (response && response.status === 'error') {
        setBackendError(response.message);
      } else if (response) {
        window.location.href = '/login';
      }
    }
  };

  return (
    <div className="registrationBox">
      <h1>
        BFK <span className="highlight">Projektek</span>
      </h1>
      <Box>
        <Form formName={'REGISZTRÁCIÓ'} handleSubmit={handleSubmit} method={'post'}>
          <Input
            isSubmited={isSubmited}
            name="username"
            type="text"
            hungarianName="felhasználó"
            onChange={inputChange}
            validator={checkIfInputIsEmpty}
            errorMessage="Felhasználónév kitöltése kötelező."
          />
          <Input
            isSubmited={isSubmited}
            name="password"
            type="password"
            hungarianName="jelszó"
            onChange={inputChange}
            validator={checkLengthOfInput(8)}
            errorMessage="A jelszó legalább 8 karakter kell, hogy legyen.."
          />
          <Input
            isSubmited={isSubmited}
            name="rights"
            type="text"
            hungarianName="jogosultság"
            onChange={inputChange}
            validator={checkIfInputIsEmpty}
            errorMessage="Jogosultság kitöltése kötelező"
          />
          
          <p className="message">{backendError}</p>
        </Form>
      </Box>
    </div>
  );
};
export default Registration;
