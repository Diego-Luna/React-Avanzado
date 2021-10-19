/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */

import React from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Error, Form, Input, Button, Title } from './styles';

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input disabled={disabled} placeholder="Email" {...email} />
        <Input
          disabled={disabled}
          placeholder="Password"
          type="password"
          {...password}
        />
        <Button>{title}</Button>
      </Form>
      {error ? <Error>{error}</Error> : ''}
    </>
  );
};
