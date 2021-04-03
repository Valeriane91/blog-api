import React from 'react';
import PropTypes from 'prop-types';
// composant Link : permet de représenter un lien (balise a) vers une autre page,
// un clic sur ce lien placera la valeur de la prop "to" dans la barre d'adresse,
// mais sans recharger la page
// import { Link } from 'react-router-dom';

// composant NavLink : comme Link mais en appliquant en plus une classe CSS si le
// contenu de la prop "to" correspond à ce qui est dans la barre d'adresse
// La comparaison qui est faite est "qui commence par" : si URL "/react" alors le
// lien de l'accueil est sélectionné aussi, car "/react" commence par son URL "/"
// Pour avoir une comparaison exacte de l'URL, on ajoute la prop "exact"
import { NavLink } from 'react-router-dom';

import './styles.scss';

const Header = ({ categories, isZenMode, updateZenMode }) => (
  <header className="menu">
    <nav>
      {categories.map((category) => (
        <NavLink
          key={category.label}
          className="menu-link"
          to={category.route}
          activeClassName="menu-link--selected"
          exact
        >
          {category.label}
        </NavLink>
      ))}
      <button
        className="menu-btn"
        type="button"
        onClick={() => {
          updateZenMode(!isZenMode);
        }}
      >
        {isZenMode ? 'Désactiver le mode zen' : 'Activer le mode zen'}
      </button>
    </nav>
  </header>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  isZenMode: PropTypes.bool.isRequired,
  // paramètre : nouvelle valeur
  updateZenMode: PropTypes.func.isRequired,
};

export default Header;
