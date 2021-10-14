/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client';

export const whitPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;
