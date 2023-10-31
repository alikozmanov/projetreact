import React, { useState } from "react";

// Importation de FontAwesome pour afficher des icônes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import de l'icône de la flèche gauche et droite


function Accueil() {
  const [currentSlide, setCurrentSlide] = useState(0); // État pour suivre l'index de la diapositive actuelle

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1)); // Fonction pour passer à la diapositive précédente
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1)); // Fonction pour passer à la diapositive suivante
  };

  // Déclenche la fonction `handleNextSlide` toutes les 4 secondes (images)
  setTimeout(handleNextSlide, 4000);

  const slides = [
    {
      image: "/images/goku.jpeg",
      title: "Titre de l'image 1",
      logo: "images/logo.jpeg",
      text: "goku",
      textColor: "white",
      background: "red",
    },
    {
      image: "/images/songohan.jpeg",
      title: "Titre de l'image 2",
      logo: "images/amazon.jpeg",
      text: "songohan",
      textColor: "white",
      background: "green",
    },
    {
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
          {slides.map((slide, index) => (
            <React.Fragment key={index}>
              {currentSlide === index && (
                <>
                  <div className="div_slider_image" style={{ backgroundImage: "url(" + slide.image + ")" }}>
                  </div>
                  <div className="slider_text" style={{ color: slide.textColor, backgroundColor: slide.background }}>
                    <img src={slide.logo} alt="Logo" className="logo_slider" />
                    <h2>{slide.title}</h2>
                    <p>{slide.text}</p>
                    <div className="slider_buttons">
                      <button className="slider_button previous" onClick={handlePrevSlide}>
                        <FontAwesomeIcon icon={faArrowLeft} /> Précédent
                      </button>
                      <div className="number">{`${index + 1}/${slides.length}`}</div>
                      <button className="slider_button next" onClick={handleNextSlide}>
                        Suivant <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Accueil;


