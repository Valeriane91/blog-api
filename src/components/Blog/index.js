// == Import
import React, { useState } from 'react';
// composant Route : permet de faire un affichage conditionnel en fonction de l'URL de
// la barre d'adresse. Comparaison "qui commence par" => si on veut une comparaison
// exacte, il faut ajouter la prop "exact" sur la Route
import { Route } from 'react-router-dom';

// Composants
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';

// data, styles et utilitaires
import categoriesData from 'src/data/categories';
import { getPostsByCategory } from 'src/utils/selectors';

import './styles.scss';

/*
Objectif : charger les articles depuis une API
x stocker les articles dans le state
x bouton pour déclencher le chargement
- challenge : faire une requête vers l'API pour récupérer les articles
- BONUS ajouter loading dans le state et en fonction de la valeur afficher le
composant Spinner
- BONUS : récupérer aussi les catégories depuis l'API
*/

// un composant peut être sous forme de fonction sauf si on veut certaines
// fonctionnalités :
// - state
// - méthodes de cycle de vie (componentDidUpdate etc)
// ou si on utilise des hooks => en utilisant les hooks, je peux utiliser un state
// et me servir du cycle de vie, en laissant mon composant sous forme de fonction

// hooks : le nom commence par use (par exemple useState)

// == Composant
const Blog = () => {
  // useState : hook d'état, permet de créer une case dans le state

  // useState prend en argument la valeur initiale à placer dans la case du state
  // useState retourne un tableau avec deux informations :
  // - la valeur de la case du state
  // - une fonction qui permet de changer la valeur de la case
  // on utilise le destructuring pour placer dans une variable chacune de ces
  // deux informations

  // indique si on est en mode zen
  // destructuring :
  // - on crée une variable zenMode dans laquelle on place le premier élément du
  // tableau retourné par useState
  // - on crée une variable setZenMode dans laquelle on place le deuxième élément du
  // tableau retourné par useState
  const [zenMode, setZenMode] = useState(false);

  // je crée une case dans le state pour stocker les articles
  // la liste des articles
  const [posts, setPosts] = useState([]);

  // quand on modifie une information qui est dans le state, automatiquement
  // React refait le rendu du composant qui contient le state

  // quand on appelle la fonction qui permet de changer la valeur d'une case du
  // state, c'est comme avec setState : en fait React programme un changement de
  // valeur de la case et en même temps un nouveau rendu => la nouvelle valeur
  // ne sera disponible qu'au moment du nouveau rendu

  const loadPosts = () => {
    console.log('Il faut charger les articles');

    // envoyer une requête à l'API

    // attendre la réponse puis la traiter => appeler setPosts en fournissant en
    // argument les articles, et normalement les articles devraient s'afficher

  };

  return (
    <div className="blog">
      <Header categories={categoriesData} isZenMode={zenMode} updateZenMode={setZenMode} />
      <button type="button" onClick={loadPosts}>Charger les articles</button>

      {categoriesData.map((category) => (
        <Route path={category.route} exact key={category.label}>
          <Posts posts={getPostsByCategory(category.label, posts)} isZenMode={zenMode} />
        </Route>
      ))}

      <Footer />
    </div>
  );
};

// == Export
export default Blog;
