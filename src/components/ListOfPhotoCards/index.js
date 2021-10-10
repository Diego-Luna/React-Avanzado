/* eslint-disable import/prefer-default-export */
import React from 'react';
import { PhotoCard } from '../PhotoCard';

export const ListOfPhotocars = () => (
  <ul>
    {[1, 2, 3].map((id) => (
      <PhotoCard key={id} />
    ))}
  </ul>
);
