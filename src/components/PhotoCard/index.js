/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import ReactPlaceholder from 'react-placeholder';

import { Button, ImgWrapper, Img, Article } from './styles';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';

//
import { photoCardSkeleton } from './cardSkeleton';

const DEFAULT_IMG =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG, loading }) => {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, element] = useNearScreen();

  const Icon = liked === true ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={element}>
      {show && (
        <ReactPlaceholder
          ready={!loading}
          showLoadingAnimation
          customPlaceholder={photoCardSkeleton}
        >
          <>
            <a href={`/?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </a>
            <Button onClick={() => setLiked(!liked)}>
              <Icon size="32px" /> {likes} likes!
            </Button>
          </>
        </ReactPlaceholder>
      )}
    </Article>
  );
  // return (
  //   <Article ref={element}>
  //     {show ? (
  //       <>
  //         <a href={`/?detail=${id}`}>
  //           <ImgWrapper>
  //             <Img src={src} alt="imagen" />
  //           </ImgWrapper>
  //         </a>

  //         <Button type="button" onClick={() => setLiked(!liked)}>
  //           <Icon size="32px" /> {likes} likes !
  //         </Button>
  //       </>
  //     ) : (
  //       ''
  //     )}
  //   </Article>
  // );
};
