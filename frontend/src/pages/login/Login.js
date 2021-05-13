import React, { useState } from 'react';
import Box from '../../common/box/Box';
import Form from '../../common/form/Form';
import Input from '../../common/form/Input';
import { submit, login } from '../../actions/loginActions';

import { connect } from 'react-redux';
import {
  checkIfInputIsEmpty,
  checkLengthOfInput,
} from '../../common/services/validators';

const Login = ({ isSubmited, error, loading, submit, login }) => {
  const [inputStates, setInputState] = useState({
    username: false,
    password: false,
  });
  const [inputs, setInputs] = useState({});

  const inputChange = (inputName, inputValue, isValid) => {
    setInputState({ ...inputStates, [inputName]: isValid });
    setInputs({ ...inputs, [inputName]: inputValue });
  };

  const isValidInputs = () => Object.values(inputStates).every(input => input);

  const handleSubmit = async event => {

    event.preventDefault();
    submit();
    if (isValidInputs()) {
      login(inputs.username, inputs.password);
    }
  };

  return (
    <div>
      <h1>
        BFK <span className="highlight"> Projektek</span>
      </h1>
      <Box>
        <Form formName={'Bejelentkezés'} handleSubmit={handleSubmit} method={'post'}>
          <Input
            isSubmited={isSubmited}
            name="username"
            type="text"
            hungarianName="felhasználó"
            onChange={inputChange}
            validator={checkIfInputIsEmpty}
            errorMessage="Felhasználó hiányzik."
            isDisabled={loading}
          />
          <Input
            isSubmited={isSubmited}
            name="password"
            type="password"
            hungarianName="jelszó"
            onChange={inputChange}
            validator={checkLengthOfInput(8)}
            errorMessage="A jelszó rövidebb, mint 8 karakter.."
            isDisabled={loading}
          />
          <p className="message">{error}</p>
        </Form>
      </Box>

    </div>
  );
};

const mapStateToProps = state => {
  return {
    isSubmited: state.login.isSubmited,
    error: state.login.error,
    loading: state.login.loading,
  };
};

export default connect(mapStateToProps, { submit, login })(Login);