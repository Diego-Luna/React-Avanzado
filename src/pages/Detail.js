/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useParams } from 'react-router-dom';
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery';
import { Layout } from '../components/Layout';

export const Detail = () => {
  const { detailId } = useParams();

  return (
    <Layout title={`Fotografía ${} `} >
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  );
};
