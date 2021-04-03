import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Post from 'src/components/Post';

import './styles.scss';

// responsabilité de Posts : afficher un titre, et demander à Post d'afficher
// chaque article
const Posts = ({ posts, isZenMode }) => {
  const cssClass = classNames('posts', { 'posts--zen': isZenMode });

  return (
    <main className={cssClass}>
      <h1 className="posts-title">Dev Of Thrones</h1>
      <div className="posts-list">
        {posts.map((post) => (
          <Post
            key={post.id}
            {...post}
          />
        ))}
      </div>
    </main>
  );
};

/*
{...post}
je déverse chaque information de post dans les props de Post
c'est équivalent à :
id={post.id}
title={post.title}
category={post.category}
excerpt={post.excerpt}
*/

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      // on valide seulement les informations qu'on utilise dans ce composant
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  isZenMode: PropTypes.bool.isRequired,
};

export default Posts;
