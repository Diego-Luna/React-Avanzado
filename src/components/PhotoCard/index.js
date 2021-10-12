/* eslint-disable import/prefer-default-export */
import React, { useEffect, useRef, useState } from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { Button, ImgWrapper, Img, Article } from './styles';

const DEFAULT_IMG =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG }) => {
  const element = useRef(null);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        console.log('si');
        setShow(true);
        // desconectamos el observador
        observer.disconnect();
      }
    });

    observer.observe(element.current);
  }, [element]);

  return (
    <Article ref={element}>
      {show ? (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="imagen" />
            </ImgWrapper>
          </a>

          <Button type="button">
            <MdFavoriteBorder size="32px" /> {likes} likes !
          </Button>
        </>
      ) : (
        ''
      )}
    </Article>
  );
};
