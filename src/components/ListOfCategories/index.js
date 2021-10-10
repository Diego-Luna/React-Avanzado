/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

export const ListOfCategories = () => (
  <List>
    {[1, 2, 3, 4, 5].map((category) => (
      <Item key={category}>
        <Category />
      </Item>
    ))}
  </List>
);
