import React from 'react';

// Composant InstaSvg qui affiche l'icône Instagram avec un lien
const Insta = () => (
  <a class="icon-linkedin" href="https://www.instagram.com/">
    <img
      src="/images/insta.png"
      alt="Instagram"
      width="24" 
      height="24" 
    />
  </a>
);

// Composant LinkedinSvg qui affiche l'icône LinkedIn avec un lien
const Linkedin = () => (
  <a class="icon-instagram" href="https://www.linkedin.com/">
     <img
      src="/images/link.png"
      alt="Instagram"
      width="24" 
      height="24" 
    />
  </a>
);

// Composant Apropos qui affiche les informations de la page "À propos" et les icônes
function Apropos() {
  return (
    <div className="backApropos apropos-container">
      <h1 className="aPropos">Qui suis-je ?</h1>
      <img className="imgProfile animatedProfile" src="/images/img.jpeg" alt="Photo de profil" />
      <p className="prenom">Oguz Donmez</p>
      <p className="metier">Développeur Web</p>
      <p className="presentation">
        Ayant travaillé dans le domaine du web depuis 5 ans et ayant exploré toutes ses facettes, 
        j'ai décidé de me lancer en tant que freelance pour accompagner mes clients de A à Z dans 
        la digitalisation de leurs activités.
      </p>
      <div className="containerImage">
        <Insta /> {/* Inclut l'icône Instagram */}
        <Linkedin /> {/* Inclut l'icône LinkedIn */}
      </div>
    </div>
  );
}

export default Apropos;