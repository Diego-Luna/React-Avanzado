/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useParams } from 'react-router-dom';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCars } from '../components/ListOfPhotoCards';

export const Home = () => {
  const { id } = useParams();
  // console.log('--> id :', id);

  const idNumber = typeof id === 'string';

  return (
    <>
      <ListOfCategories />

      {idNumber ? <ListOfPhotoCars categoryId={id} /> : <ListOfPhotoCars />}
    </>
  );
};
