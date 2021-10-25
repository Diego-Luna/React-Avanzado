/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCars } from '../components/ListOfPhotoCards';

export const Home = () => {
  const { id } = useParams();
  // console.log('--> id :', id);

  const idNumber = typeof id === 'string';

  return (
    <>
      <Helmet>
        <title>moongram - tu app fotos de mascotas</title>
        <meta
          name="description"
          content="Con moongram puedes encontrar fotos de animales domésticos muy bonitos"
        />
      </Helmet>

      <ListOfCategories />

      {idNumber ? <ListOfPhotoCars categoryId={id} /> : <ListOfPhotoCars />}
    </>
  );
};
