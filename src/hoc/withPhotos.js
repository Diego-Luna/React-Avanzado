/* eslint-disable import/prefer-default-export */
import { gql } from '@apollo/client';

const GET_PHOTOS = gql`
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

export const whitPhotos = GET_PHOTOS;
