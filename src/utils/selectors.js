/* eslint-disable import/prefer-default-export */
// get the posts for a category
export const getPostsByCategory = (category, posts) => {
  // si la catégorie est 'Accueil' on veut tous les articles
  let result = posts;

  if (category !== 'Accueil') {
    result = posts.filter((post) => post.category === category);
  }

  return result;
};
