/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { PhotoCard } from '../components/PhotoCard';
// import { photoCardSkeleton } from '../components/PhotoCard/cardSkeleton';

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id,
    },
  });
  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <PhotoCard loading={loading} />;
  }

  return <PhotoCard {...data.photo} />;
};
