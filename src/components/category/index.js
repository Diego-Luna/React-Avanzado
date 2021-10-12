/* eslint-disable import/prefer-default-export */

import React from 'react';
import { Anchor, Image } from './styles';

const DEFAULT_IMGE = 'https://i.imgur.com/dJa0Hpl.jpg';

export const Category = ({ cover = DEFAULT_IMGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} alt="imagen de categoria" />
    {emoji}
  </Anchor>
);
