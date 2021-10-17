/* eslint-disable import/prefer-default-export */
import React from 'react';

import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';
import { Link, Nav } from './styles';

const SIZE = '32px';

export const NavBar = () => (
  <Nav>
    <Link exact to="/">
      <MdHome size={SIZE} />
    </Link>
    <Link exact to="/favs">
      <MdFavoriteBorder size={SIZE} />
    </Link>
    <Link exact to="/user">
      <MdPersonOutline size={SIZE} />
    </Link>
  </Nav>
);
