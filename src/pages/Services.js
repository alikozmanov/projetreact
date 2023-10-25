import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLaptop, faShoppingCart, faPuzzlePiece, faBlog, faSearch, faTools, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Block = ({ icon, title, paragraph }) => {
  return (
    <div className="block">
      <div className="icon">
      {icon}
      </div>
      <h3 className="title">{title}</h3>
      <p className="paragraph">{paragraph}</p>
      <FontAwesomeIcon icon={faArrowRight} size="xl" />
    </div>
  );
};

const Services = () => {
  const blocks = [
    {
      icon: <FontAwesomeIcon icon={faLaptop} />,
      title: 'Site Vitrine',
      paragraph: 'Présentez votre activité à travers un site internet moderne, propre et à votre image.',
    },
    {
      icon: <FontAwesomeIcon icon={faShoppingCart} />,
      title: 'Site E-Commerce',
      paragraph: 'Une boutique en ligne clés en main pour vendre vos produits sur internet.',
    },
    {
      icon: <FontAwesomeIcon icon={faPuzzlePiece} />,
      title: 'Application Web',
      paragraph: 'Une application web pour interragir avec vos collaborateurs ou vos clients.',
    },
    {
      icon: <FontAwesomeIcon icon={faBlog} />,
      title: 'Blog',
      paragraph: 'Partagez vos connaissances expérience avec vos lecteurs avec un blog',
    },
    {
      icon: <FontAwesomeIcon icon={faSearch} />,
      title: 'Référencement - SEO',
      paragraph: 'Je vous accompagne dans l\'amélioration de votre visibilité sur Google',
    },
    {
      icon: <FontAwesomeIcon icon={faTools} />,
      title: 'Maintenance WordPress',
      paragraph: 'Votre site WordPress a besoin d\'une maintenance ? Laissez-moi faire !',
    },
  ];

  return (
    <div>
      <h1 className='classh1'>MES SERVICES</h1>
      <h2 className='classh2'>MES PRINCIPAUX DOMAINES DE COMPÉTENCE</h2>
      <div className="services">
        {blocks.map((block, index) => (
          <Block
            key={index}
            icon={block.icon}
            title={block.title}
            paragraph={block.paragraph}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
