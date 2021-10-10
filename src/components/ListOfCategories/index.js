/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Category } from '../Category';
import { List, Item } from './styles';

import { initialState } from '../../../initialState';

export const ListOfCategories = () => (
  <List>
    {initialState.categories.map((category) => (
      <Item key={category.id}>
        <Category {...category} />
      </Item>
    ))}
  </List>
);
