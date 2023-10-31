// Importation des bibliothèques nécessaires depuis React et React Router
import React, { useState } from "react"; // Importe React et la fonction d'état useState
import { Outlet, Link } from "react-router-dom"; // Importe le composant Outlet et Link de React Router
import "./Nav.css"; // Importe le fichier de style "Nav.css"

// La fonction de composant Nav
function Nav() {
  // Utilisation du state pour gérer l'affichage des liens de navigation
  const [showLinks, setShowLinks] = useState(false); // showlinks est true les liens de navigations seront affichés sinon false seront cachés

  // Fonction pour basculer l'affichage des liens de navigation
  const handleShowLinks = () => {
    setShowLinks(!showLinks); // HandleShowLinks utilise la négation '!'inverser la valeur actuelle de l'état showLinks. Elle passe de true à false ou false à true
  };

  // Rendu du composant
  return (
    <>
      {/* Section d'en-tête de la page */}
      <header>
        {/* Si showLinks est vrai, la classe "show-nav" sinon, c'est la classe "hide-nav" qui est appliquée, 
        permettant ainsi d'ajuster l'apparence de la barre en fonction de showLinks */}
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}> {/*'?'ternaire vrai ou faux showLinks/'$'insérer des variables */}
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
              <Link // créer des liens de navigation
                to="/" // l'URL de destination lorsque je clique sur Accueil
                className="navbar_link menuCouleur"
                onClick={handleShowLinks} // L'attribut onClick afficher ou masquer les liens de navigation sur un clic.
              >
                Accueil
              </Link>
            </li>
            {/* Lien vers la page des Services */}
            <li className="navbar_item slideInDown-2">
              <Link
                to="/Services" // l'URL de destination lorsque je clique sur Services
                className="navbar_link menuCouleur"
                onClick={handleShowLinks} // L'attribut onClick afficher ou masquer les liens de navigation sur un clic.
              >
                Services
              </Link>
            </li>
            {/* Lien vers la page "À propos" */}
            <li className="navbar_item slideInDown-3">
              <Link
                to="/Apropos" // l'URL de destination lorsque je clique sur A propos
                className="navbar_link menuCouleur"
                onClick={handleShowLinks} // L'attribut onClick afficher ou masquer les liens de navigation sur un clic.
              >
                À propos
              </Link>
            </li>
            {/* Lien vers la page de demande de devis */}
            <li className="navbar_item slideInDown-4">
              <Link
                to="/Devis" // l'URL de destination lorsque je clique sur Devis
                className="navbar_link menuCouleur"
                onClick={handleShowLinks} // L'attribut onClick afficher ou masquer les liens de navigation sur un clic.
              >
                Demander un devis
              </Link>
            </li>
            {/* Lien vers la page Portfolio */}
            <li className="navbar_item slideInDown-5">
              <Link
                to="/Portfolio" // l'URL de destination lorsque je clique sur Portfolio
                className="navbar_link menuCouleur"
                onClick={handleShowLinks} // L'attribut onClick afficher ou masquer les liens de navigation sur un clic.
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
        {/* l'objet Date pour obtenir la date actuelle, puis la méthode getFullYear() est appelée pour récupérer l'année */}
        <p>&copy; {new Date().getFullYear()} Oguz Donmez | Tous droits réservés.</p>
        <p className="mentions-legales">
          <Link to="/Mention">Mentions Légales</Link> {/* l'URL de destination lorsque je clique sur Mention */}
        </p>
      </footer>
    </>
  );
}

// Exportation du composant Nav pour qu'il puisse être utilisé ailleurs
export default Nav;


