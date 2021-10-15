/* eslint-disable import/prefer-default-export */
import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button } from './styles';

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked === true ? MdFavorite : MdFavoriteBorder;

  return (
    <Button onClick={onClick}>
      <Icon size="32px" /> {likes} likes!
    </Button>
  );
};
