import React, { useState } from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importation de FontAwesome pour afficher des icônes
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import de l'icône de la flèche gauche et droite


// État pour suivre l'index de la diapositive actuelle
function Accueil() {
  const [currentSlide, setCurrentSlide] = useState(0);  // Déclaration d'une variable d'état "currentSlide" initialisée à 0

  // Fonction pour passer à la diapositive précédente
  const handlePrevSlide = () => {
    //Si prevSlide est égal à 0, currentSlide prend la valeur 2 sinon, currentSlide est décrémentée de 1 pour passer à la diapositive précédente
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1)); // (?) ternaire évaluer une condition
  };

  // Fonction pour passer à la diapositive suivante
  const handleNextSlide = () => {
    // Si prevSlide est égal à 2, currentSlide prend la valeur 0 (?ternaire) sinon, currentSlide +1 pour passer à la diapositive suivante 
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
  };


  // Déclenche la fonction `handleNextSlide` toutes les 4 secondes (images)
  setTimeout(handleNextSlide, 4000);

  // Variable 'slides' qui contient un tableau de données 
  const slides = [
    {
      // Première diapositive
      image: "/images/goku.jpeg",
      title: "Titre de l'image 1",
      logo: "images/logo.jpeg",
      text: "goku",
      textColor: "white",
      background: "red",
    },
    {
      // Deuxième diapositive
      image: "/images/songohan.jpeg",
      title: "Titre de l'image 2",
      logo: "images/amazon.jpeg",
      text: "songohan",
      textColor: "white",
      background: "green",
    },
    {
      // Troisième diapositive
      image: "/images/songoten.jpeg",
      title: "Titre de l'image 3",
      logo: "images/youtube.jpeg",
      text: "songoten",
      textColor: "white",
      background: "blue",
    },
  ];


  return (
    <>
      <div className="slider">
        <div className="slider_content">
          {/* Boucle de mappage sur le tableau 'slides' pour afficher chaque diapositive */}
          {slides.map((slide, index) => (
            <React.Fragment key={index}> {/* Fragment React avec une clé unique basée sur (l'index) pour chaque diapositive */}
              {/* vérifie si currentSlide est égale à la l'index */}
              {currentSlide === index && (
                <>
                  <div className="div_slider_image" style={{ backgroundImage: "url(" + slide.image + ")" }}>
                  </div>
                  <div className="slider_text" style={{ color: slide.textColor, backgroundColor: slide.background }}>
                    <img src={slide.logo} alt="Logo" className="logo_slider" />
                    {/* Affiche l'image du logo de la diapositive avec une classe "logo_slider" */}
                    <h2>{slide.title}</h2> {/* Affiche le titre de la diapositive */}
                    <p>{slide.text}</p> {/* Affiche le texte de la diapositive */}
                    <div className="slider_buttons">
                      <button className="slider_button previous" onClick={handlePrevSlide}>
                        <FontAwesomeIcon icon={faArrowLeft} /> {/* Affiche une icône (flèche gauche) en utilisant FontAwesome */}
                        Précédent
                      </button> 
                      {/* Affiche le numéro de la diapositive actuelle et (index + 1) suivi du nombre total de diapositives */}
                      <div className="number">{`${index + 1}/${slides.length}`}</div> {/* nombre d'élémenets du tableau 'slides'*/}
                      <button className="slider_button next" onClick={handleNextSlide}>
                        Suivant <FontAwesomeIcon icon={faArrowRight} /> {/* Affiche une icône (flèche droite) en utilisant FontAwesome */}
                      </button>
                    </div>

                  </div>
                </>
              )}
              {/* Ferme le fragment React */}
            </React.Fragment> 
          ))}
        </div>
      </div>
    </>
  );
}

export default Accueil;


