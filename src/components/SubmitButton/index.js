/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';

export const SubmitButton = ({ children, disabled, onClick }) => (
  <Button disabled={disabled} onClick={onClick}>
    {children}
  </Button>
);

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
