/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Helmet } from 'react-helmet';

export const Layout = ({ children, title, subtitle }) => (
  <>
    <Helmet>
      {title ? <title>{title} | moongram </title> : ''}
      {subtitle ? <meta name="description" content={subtitle} /> : ''}
    </Helmet>
    <div>
      {title ? <h1>{title}</h1> : ''}
      {subtitle ? <h2>{subtitle}</h2> : ''}
      {children}
    </div>
  </>
);
