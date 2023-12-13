
// Importation du composant Link de 'react-router-dom' pour gérer la navigation dans l'application React.
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet"; // Importation du composant Helmet depuis la bibliothèque react-helmet

const Devis = () => {
  return (
    <>
     <Helmet>
        <title>Demander Un Devis</title>
        <meta name="description" content="Vous avez un projet en tête ? Parlons-en. Demandez un devis gratuitement et en quelques minutes. Découvrez comment je peux vous aider dans le développement web et la réalisation de vos projets en ligne." />
      </Helmet>
      <div className="backDevis">
        <h1 className="h1Devis">Vous Avez Un Projet En Tête ? Parlons-En.</h1>
        <p className="paraDevis">Vous pouvez me demander un devis gratuitement et en quelques minutes.</p>
        {/* 
        Composant Link permettant de créer un lien vers l'URL "/Projet". 
        Lorsque l'utilisateur clique sur ce lien, la navigation se fait sans rechargement de la page entière.
      */}
        <Link to="/Projet" className="buttonDevis menuCouleur">Demander un devis</Link>
      </div>
    </>
  );
};

// Exportation du composant Devis pour qu'il puisse être utilisé ailleurs
export default Devis;
