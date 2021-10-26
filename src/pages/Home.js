/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useParams } from 'react-router-dom';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCars } from '../components/ListOfPhotoCards';
import { Layout } from '../components/Layout';

const HomePage = () => {
  const { id } = useParams();
  // console.log('--> id :', id);

  const idNumber = typeof id === 'string';

  return (
    <Layout
      title="tu app fotos de mascotas"
      subtitle="Con moongram puedes encontrar fotos de animales domésticos muy bonitos"
    >
      <ListOfCategories />

      {idNumber ? <ListOfPhotoCars categoryId={id} /> : <ListOfPhotoCars />}
    </Layout>
  );
};

export const Home = React.memo(
  HomePage,
  (prevProps, props) => prevProps.id === props.id
);
