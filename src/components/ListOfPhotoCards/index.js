/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { PhotoCard } from '../PhotoCard';

const whitPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotocars = () => {
  const { loading, error, data } = useQuery(whitPhotos);

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {data.photos.map((photoCard, id) => (
        <PhotoCard key={id} {...photoCard} />
        // <PhotoCard key={id} id={id} {...photoCard} />
      ))}
    </ul>
  );
};

// export const ListOfPhotocars = () => {
//   const { loading, error, data } = useQuery(whitPhotos);

//   if (error) {
//     return <h2>Internal Server Error</h2>;
//   }
//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   return (
//     <ul>
//       {data.photos.map((photo) => (
//         <PhotoCard key={photo.id} {...photo} />
//       ))}
//     </ul>
//   );
// };
