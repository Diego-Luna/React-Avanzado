/* eslint-disable import/prefer-default-export */
import React from 'react';

// import { gql } from 'apollo-boost';
// import { Query } from 'react-apollo';
// import { PhotoCard } from '../components/PhotoCard';

import { gql, useQuery } from '@apollo/client';

export const whitPhotos = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {({ loading, error, data }) => {
      const { photo = {} } = data;
      return <PhotoCard {...photo} />;
    }}
  </Query>
);
