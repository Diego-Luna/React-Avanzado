/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useParams } from 'react-router-dom';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCars } from '../components/ListOfPhotoCards';

export const Home = () => {
  const { id } = useParams();
  console.log('--> id :', id);
  return (
    <>
      {id !== undefined ? (
        <ListOfPhotoCars categoryId={id} />
      ) : (
        <ListOfCategories />
      )}
      {/* <ListOfCategories /ﬂ */}
    </>
  );
};
