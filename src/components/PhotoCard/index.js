/* eslint-disable consistent-return */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import ReactPlaceholder from 'react-placeholder';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { ImgWrapper, Img, Article } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { FavButton } from '../FavButton';
import { useMuationToogleLike } from '../../hooks/useMuationToogleLike';

import { photoCardSkeleton } from './cardSkeleton';

const DEFAULT_IMG =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({
  id,
  liked,
  likes = 0,
  src = DEFAULT_IMG,
  loading,
}) => {
  const [show, element] = useNearScreen();

  const { mutation, mutationLoading, mutationError } = useMuationToogleLike();

  // const key = `like-${id}`;
  // const [likedTwo, setLiked] = useLocalStorage(key, false);

  // const handleFavClicl = () => setLiked(!liked);

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id },
      },
    });
    // setLiked(!likedTwo);
  };
  // console.log('{ mutation, mutationLoading, mutationError }', { mutation, mutationLoading, mutationError })

  return (
    <Article ref={element}>
      {show && (
        <ReactPlaceholder
          ready={!loading}
          showLoadingAnimation
          customPlaceholder={photoCardSkeleton}
        >
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} />
              </ImgWrapper>
            </Link>
            {/* <FavButton liked={likedTwo} likes={likes} onClick={handleFavClick} /> */}
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

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: (props, propName, componentName) => {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
