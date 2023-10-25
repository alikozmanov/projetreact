import React from 'react';


const InstaSvg = () => (
  <a href="https://www.instagram.com/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white" width="24" height="24">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
    </svg>
  </a>
);

const LinkedinSvg = () => (
  <a href="https://www.linkedin.com/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24" height="24">
      <path d="M22,2H2C0.9,2,0,2.9,0,4v16c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V4C24,2.9,23.1,2,22,2z M8.4,18.3h-3V9.1h3V18.3z M6.5,7.8
        C5.7,7.8,5,7,5,6.2s0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6S7.4,7.8,6.5,7.8z M19.3,18.3h-2.9v-4.3c0-1.1,0-2.5-1.5-2.5
        c-1.5,0-1.7,1.2-1.7,2.4v4.4h-3V9.1h2.8v1.3h0c0.4-0.8,1.5-1.7,3.1-1.7c3.3,0,3.9,2.2,3.9,5V18.3z"/>
    </svg>
  </a>
);

function Apropos() {
  return (
    <div className='backApropos'>
      <h1 className='aPropos'>Qui suis-je ?</h1>
      <img className='imgProfile' src="/images/img.jpeg" />
      <p className='prenom'>Oguz Donmez</p>
      <p className='metier'>Développeur Web</p>
      <p className='presentation'>Étant dans le Web depuis 5 ans et exploré tous les domaines du web, j’ai décidé 
        de me lancer en tant que Freelance afin d’accompagner mes clients de A à Z dans la digitalisation de leurs activités.</p>
      <div className='containerSvg'>
      <InstaSvg />
      <LinkedinSvg />
    </div>
    </div>
  );
}

export default Apropos;


