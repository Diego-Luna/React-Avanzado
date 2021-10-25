/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Helmet } from 'react-helmet';
import { useGetFavorites } from '../hooks/useGetFavorites';
import { ListOfFavs } from '../components/ListOdFavs';

export const Favs = () => {
  const { loading, data, error } = useGetFavorites();

  console.log('-> data > ', data);

  if (error) {
    return <h1>Error</h1>;
  }

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <Helmet>
        <title>moongram - tus favoritos</title>
        <meta
          name="description"
          content="Aqui puedes encontrar tus favoritos"
        />
      </Helmet>
      <ListOfFavs favs={data.favs} />
    </>
  );
};
