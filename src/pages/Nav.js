// Importation des bibliothèques nécessaires depuis React et React Router
import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Nav.css";

// Définition de la fonction de composant Nav
function Nav() {
  // Utilisation du state pour gérer l'affichage des liens de navigation
  const [showLinks, setShowLinks] = useState(false);

  // Fonction pour basculer l'affichage des liens de navigation
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  // Rendu du composant
  return (
    <>
      {/* Section d'en-tête de la page */}
      <header>
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
          {/* Logo de la navigation */}
          <div className="navbar_logo">
            <img
              src="https://oguzdonmez.com/wp-content/uploads/2019/01/logo-blanc.png"
              alt="Logo"
              width="200"
            />
          </div>
          {/* Liste des liens de navigation */}
          <ul className="navbar_links">
            {/* Lien vers la page d'accueil */}
            <li className="navbar_item slideInDown-1">
              <Link
                to="/"
                className="navbar_link menuCouleur"
                onClick={handleShowLinks}
              >
                Accueil
              </Link>
            </li>
            {/* Lien vers la page des Services */}
            <li className="navbar_item slideInDown-2">
              <Link
                to="/Services"
                className="navbar_link menuCouleur"
                onClick={handleShowLinks}
              >
                Services
              </Link>
            </li>
            {/* Lien vers la page "À propos" */}
            <li className="navbar_item slideInDown-3">
              <Link
                to="/Apropos"
                className="navbar_link menuCouleur"
                onClick={handleShowLinks}
              >
                À propos
              </Link>
            </li>
            {/* Lien vers la page de demande de devis */}
            <li className="navbar_item slideInDown-4">
              <Link
                to="/Devis"
                className="navbar_link menuCouleur"
                onClick={handleShowLinks}
              >
                Demander un devis
              </Link>
            </li>
            {/* Lien vers la page Portfolio */}
            <li className="navbar_item slideInDown-5">
              <Link
                to="/Portfolio"
                className="navbar_link menuCouleur"
                onClick={handleShowLinks}
              >
                Portfolio
              </Link>
            </li>
          </ul>
          {/* Bouton pour afficher/masquer les liens de navigation sur mobile */}
          <button className="navbar_burger" onClick={handleShowLinks}>
            <span className="burger-bar"></span>
          </button>
        </nav>
      </header>
      {/* Section principale de la page qui affiche le contenu de la page courante */}
      <main>
        <Outlet />
      </main>
      {/* Pied de page avec l'année actuelle et un lien vers les mentions légales */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Oguz Donmez | Tous droits réservés.</p>
        <p className="mentions-legales">
          <Link to="/Mention">Mentions Légales</Link>
        </p>
      </footer>
    </>
  );
}

// Exportation du composant Nav pour qu'il puisse être utilisé ailleurs
export default Nav;


