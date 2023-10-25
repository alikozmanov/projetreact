import { Link } from 'react-router-dom';

const Devis = () => {
  return (
    <div className="backDevis">
      <h1 className="h1Devis">Vous Avez Un Projet En Tête ? Parlons-En.</h1>
      <p className="paraDevis">Vous pouvez me demander un devis gratuitement et en quelques minutes.</p>
      <Link to="/Projet" className="buttonDevis menuCouleur">Demander un devis</Link>
    </div>
  );
};

export default Devis;
