import React from 'react';

const InstaSvg = () => (
  <a href="https://www.instagram.com/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white" width="24" height="24">
      {/* Le chemin SVG pour Instagram ici */}
    </svg>
  </a>
);

const LinkedinSvg = () => (
  <a href="https://www.linkedin.com/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
      {/* Le chemin SVG pour LinkedIn ici */}
    </svg>
  </a>
);

function Apropos() {
  return (
    <div className="backApropos">
      <h1 className="aPropos">Qui suis-je ?</h1>
      <img className="imgProfile" src="/images/img.jpeg" alt="Photo de profil" />
      <p className="prenom">Oguz Donmez</p>
      <p className="metier">Développeur Web</p>
      <p className="presentation">
        Ayant travaillé dans le domaine du web depuis 5 ans et ayant exploré toutes ses facettes, 
        j'ai décidé de me lancer en tant que freelance pour accompagner mes clients de A à Z dans 
        la digitalisation de leurs activités.
      </p>
      <div className="containerSvg">
        <InstaSvg />
        <LinkedinSvg />
      </div>
    </div>
  );
}

export default Apropos;
