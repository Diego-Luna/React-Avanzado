/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useGetFavorites } from '../hooks/useGetFavorites';
import { ListOfFavs } from '../components/ListOdFavs';
import { Layout } from '../components/Layout';

export const Favs = () => {
  const { loading, data, error } = useGetFavorites();

  if (error) {
    return <h1>Error</h1>;
  }

  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <Layout
      title="Tus favoritos"
      subtitle="Aqui puedes encontrar tus favoritos"
    >
      <ListOfFavs favs={data.favs} />
    </Layout>
  );
};
