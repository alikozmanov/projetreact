
import React from 'react'; // Importation du module React depuis la bibliothèque React
// Importation du composant FontAwesomeIcon depuis le package '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Importation des icônes spécifiques depuis le package '@fortawesome/free-solid-svg-icons'
import { faLaptop, faShoppingCart, faPuzzlePiece, faBlog, faSearch, faTools, faArrowRight } from '@fortawesome/free-solid-svg-icons';


// Définition d'un composant fonctionnel React nommé "Block" qui accepte trois propriétés (props) : icon, title, et paragraph
const Block = ({ icon, title, paragraph }) => {
  return (
    <div className="block">
      <div className="icon">{icon}</div> {/* Affiche l'icône passée en tant que propriété "icon" */}
      <h3 className="title">{title}</h3> {/* Affiche le titre passé en tant que propriété "title" */}
      <p className="paragraph">{paragraph}</p> {/* Affiche le paragraphe passé en tant que propriété "paragraph" */}
      <FontAwesomeIcon icon={faArrowRight} className='flecheDroite' size="sm" /> {/* Flèche droite de taille "m" */}
    </div>
  );
};


const Services = () => {
  // Tableau d'objets représentant les services, avec des icônes, titres et paragraphes
  const blocks = [
    {
      icon: <FontAwesomeIcon icon={faLaptop} />, // Icône d'un ordinateur portable
      title: 'Site Vitrine',
      paragraph: 'Présentez votre activité à travers un site internet moderne, propre et à votre image.', // Description du premier service
    },
    {
      icon: <FontAwesomeIcon icon={faShoppingCart} />, // Icône d'un panier d'achat
      title: 'Site E-Commerce',
      paragraph: 'Une boutique en ligne clés en main pour vendre vos produits sur internet.', // Description du deuxième service
    },
    {
      icon: <FontAwesomeIcon icon={faPuzzlePiece} />, // Icône d'une pièce de puzzle
      title: 'Application Web',
      paragraph: 'Une application web pour interagir avec vos collaborateurs ou vos clients.', // Description du troisième service
    },
    {
      icon: <FontAwesomeIcon icon={faBlog} />, // Icône d'un blog
      title: 'Blog',
      paragraph: 'Partagez vos connaissances et votre expérience avec vos lecteurs grâce à un blog.', // Description du quatrième service
    },
    {
      icon: <FontAwesomeIcon icon={faSearch} />, // Icône de recherche
      title: 'Référencement - SEO',
      paragraph: "Je vous accompagne dans l'amélioration de votre visibilité sur Google.", // Description du cinquième service
    },
    {
      icon: <FontAwesomeIcon icon={faTools} />, // Icône d'outils
      title: 'Maintenance WordPress',
      paragraph: "Votre site WordPress a besoin d'une maintenance ? Laissez-moi faire !", // Description du sixième service
    },
  ];

  return (
    <div>
      <h1 className="classh1">MES SERVICES</h1>
      <h2 className="classh2">MES PRINCIPAUX DOMAINES DE COMPÉTENCE</h2>
      <div className="services">
        {/* Mapping de chaque bloc de service avec son index */}
        {blocks.map((block, index) => ( // map parcours tableau blocks, ainsi que son index associé
          <Block // blocks contient des éléments de données 
            key={index} // Clé unique pour chaque bloc
            icon={block.icon} // Icône du bloc de service
            title={block.title} // Titre du bloc de service
            paragraph={block.paragraph} // Paragraphe de description du service 
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
