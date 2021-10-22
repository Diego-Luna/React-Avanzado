/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { PhotoCard } from '../components/PhotoCard';

import { useGetFavorites } from '../hooks/useGetFavorites';

export const Favs = () => {
  const { loading, data, error } = useGetFavorites();

  console.log("-> data > ", data);

  if(error){
    return <h1>Error</h1>
  }

  if(loading){
    return <h1>Loading</h1>
  }

  return <>
  {data.favs.map((photo) => (
        <PhotoCard key={photo.id} liked {...photo} />
        // <PhotoCard key={id} id={id} {...photoCard} />
      ))}
  </>;
};
