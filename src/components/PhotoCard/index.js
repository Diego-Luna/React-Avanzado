/* eslint-disable import/prefer-default-export */
import React from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { Button, ImgWrapper, Img } from './styles';

const DEFAULT_IMG =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => (
  <article>
    <a href={`/detail/${id}`}>
      <ImgWrapper>
        <Img src={src} alt="imagen" />
      </ImgWrapper>
    </a>

    <Button type="button">
      <MdFavoriteBorder size="32px" /> {likes} likes !
    </Button>
  </article>
);
