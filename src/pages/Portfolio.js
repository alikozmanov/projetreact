
import React from 'react'; // Importation de la bibliothèque React
import { Helmet } from "react-helmet"; // Importation du composant Helmet depuis la bibliothèque react-helmet

// Définition d'un tableau de projets avec des données de démonstration
const projects = [
  {
    id: 1,
    title: 'Cabinet Dentaire Qwartz',
    description: 'Le cabinet dentaire Qwartz se trouve dans le centre commercial Qwartz à Villeuve-la-Garenne.',
    intervention: 'Je suis intervenu sur le site du cabinet afin de faire une refonte graphique. En effet, malgré la qualité du contenu, le site présentait des bugs ou des éléments cassés.',
    type: 'Application web',
    image: 'images/dentaire.jpeg'
  },
  {
    id: 2,
    title: 'Fondation FACE',
    description: 'Le Concours S’engager pour les Quartiers a été initié par la Fondation FACE et l’ANRU en 2011.',
    intervention: 'Le Concours, divisé en catégories, récompense chaque année des projets à vocation sociale, économique et environnementale développés dans des quartiers politique de la ville et, dans une moindre mesure, dans les territoires ruraux « fragiles ».',
    type: 'Application web',
    image: 'images/CSPQ.jpeg'
  },
];

// Définition du composant Portfolio
function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="Découvrez mes projets récents et explorez les détails de mon travail. Consultez les refontes graphiques, les applications web, et d'autres interventions que j'ai réalisées pour mes clients." />
      </Helmet>
      <div>
        {projects.map(project => ( // Parcourt le tableau de projets et crée un élément pour chaque projet
          <div key={project.id} style={{ display: 'flex' }}>
            <div style={{ marginRight: '20px', padding: '100px' }}>
              {/* Titre du projet */}
              <h2 className="project-title">{project.title}</h2>
              {/* Description du projet */}
              <p className="project-description">{project.description}</p>
              {/* Description de l'intervention sur le projet */}
              <p className="project-intervention">{project.intervention}</p>
            </div>
            <div>
              {/* Image du projet */}
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// Exportation du composant Portfolio pour qu'il puisse être utilisé ailleurs dans l'application
export default Portfolio;


