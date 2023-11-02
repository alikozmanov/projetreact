// Importation du composant Link depuis react-router-dom, qui permet de gérer les liens dans une application React
import { Link } from 'react-router-dom';

const Devis = () => {
  return (
    <div className="backDevis">
      <h1 className="h1Devis">Vous Avez Un Projet En Tête ? Parlons-En.</h1>
      <p className="paraDevis">Vous pouvez me demander un devis gratuitement et en quelques minutes.</p>
       {/* Un lien (Link) qui pointe vers l'URL "/Projet" */}
      <Link to="/Projet" className="buttonDevis menuCouleur">Demander un devis</Link>
    </div>
  );
};

// Exportation du composant Devis pour qu'il puisse être utilisé ailleurs
export default Devis;
