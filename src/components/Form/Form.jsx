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
  const [mail, setMail] = useState('');
  const [text, setText] = useState('');

  const onSuubmit = evt => {
    evt.preventDefault();
    onClick({ name, mail, text });
    reset();
  };
  const reset = () => {
    setName('');
    setMail('');
    setText('');
  };
  const onChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setMail(value);
        break;

      case 'text':
        setText(value);
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
          name="mail"
          value={mail}
          placeholder="Your e-mail*"
          required
        />
        <StyledInputText
          onChange={onChange}
          type="text"
          name="text"
          value={text}
          placeholder="Your message*"
          required
        />
        <StyledButton type="submit">Send message</StyledButton>
      </StyledForm>
    </StyledDiv>
  );
}
