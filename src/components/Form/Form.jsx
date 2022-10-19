import { useState } from 'react';

import {
  StyledDiv,
  StyledH1,
  StyledForm,
  StyledInput,
  StyledButton,
  StyledInputText,
} from './Form.styled';

export default function Form({ onClick }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSuubmit = evt => {
    evt.preventDefault();
    onClick({ name, email, message });
    reset();
  };
  const reset = () => {
    setName('');
    setEmail('');
    setMessage('');
  };
  const onChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'message':
        setMessage(value);
        break;
      default:
        return;
    }
  };
  return (
    <StyledDiv>
      <StyledH1>Reach out to us!</StyledH1>
      <StyledForm onSubmit={onSuubmit}>
        <StyledInput
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Your name*"
          required
        />
        <StyledInput
          onChange={onChange}
          type="text"
          name="email"
          value={email}
          placeholder="Your e-mail*"
          required
        />
        <StyledInputText
          onChange={onChange}
          type="text"
          name="message"
          value={message}
          placeholder="Your message*"
          required
        />
        <StyledButton type="submit">Send message</StyledButton>
      </StyledForm>
    </StyledDiv>
  );
}
