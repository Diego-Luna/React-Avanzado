/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useQuery } from '@apollo/client';
import { PhotoCard } from '../PhotoCard';

import { whitPhotos } from '../../hoc/withPhotos';

export const ListOfPhotoCars = ({ categoryId }) => {
  const { loading, error, data } = useQuery(whitPhotos, {
    variables: { categoryId },
  });

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
        // <PhotoCard key={id} id={id} {...photoCard} />
      ))}
    </ul>
  );
};
