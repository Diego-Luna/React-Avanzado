/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import ReactPlaceholder from 'react-placeholder';

import { ImgWrapper, Img, Article } from './styles';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../FavButton';
import { useMuationToogleLike } from '../../hooks/useMuationToogleLike';

import { photoCardSkeleton } from './cardSkeleton';

const DEFAULT_IMG =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMG, loading }) => {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [show, element] = useNearScreen();

  const { mutation, mutationLoading, mutationError } = useMuationToogleLike();

  // const handleFavClicl = () => setLiked(!liked);

  const handleFavClick = () => {
    !liked &&
      mutation({
        variables: {
          input: { id },
        },
      });
    setLiked(!liked);
  };
  console.log('{ mutation, mutationLoading, mutationError }', { mutation, mutationLoading, mutationError })

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
            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
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
