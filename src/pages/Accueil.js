
import React, { useState } from "react"; // Importe de React et useState depuis la bibliothèque React
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importe FontAwesomeIcon pour afficher des icônes
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Importe de l'icône de la flèche gauche et droite
import { Helmet } from "react-helmet"; // Importation du composant Helmet depuis la bibliothèque react-helmet


// État pour suivre l'index de la diapositive actuelle
function Accueil() {
  const [currentSlide, setCurrentSlide] = useState(0);  // Déclaration d'une variable d'état "currentSlide" initialisée à 0


  const handlePrevSlide = () => {
    // Si prevSlide est égal à 0, retourne à la dernière diapositive, sinon décrémente de 1.
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? (slides.length - 1) : prevSlide - 1)); // (?) ternaire évaluer une condition
  };

  const handleNextSlide = () => {
    // Si prevSlide est égal à la dernière diapositive, retourne à la première diapositive, sinon incrémente de 1.
    setCurrentSlide((prevSlide) => (prevSlide === (slides.length - 1) ? 0 : prevSlide + 1));
  };


  setTimeout(handleNextSlide, 4000);


  // slides qui contient un tableau d'objets
  const slides = [ 
    {
      // Première diapositive
      image: "/images/image1.png",
      title: "Titre de l'image 1",
      logo: "images/logo.png",
      text: "sous-titre 1",
      textColor: "white",
      background: "orange",
    },
    {
      // Deuxième diapositive
      image: "/images/image2.png",
      title: "Titre de l'image 2",
      logo: "images/amazon.png",
      text: "sous-titre 2",
      textColor: "white",
      background: "blue",
    },
    {
      // Troisième diapositive
      image: "/images/image3.png",
      title: "Titre de l'image 3",
      logo: "images/youtube.png",
      text: "sous-titre 3",
      textColor: "white",
      background: "violet",
    },
  ];


  return (
    <>
      <Helmet>
        <title>développeur web WordPress</title>
        <meta name="description" content="Découvrez des images captivantes et des informations passionnantes sur notre site. Parcourez notre carrousel pour explorer différentes diapositives riches en couleur et en contenu." />
        <meta name="keywords" content="Oguz Donmez, html, css, php, javascript" />
      </Helmet>
      <div className="slider">
        <div className="slider_content">
          {/* Boucle de mappage sur le tableau 'slides' pour afficher chaque diapositive */}
          {slides.map((slide, index) => (
            <React.Fragment key={index}> {/* Fragment React avec une clé unique basée sur (l'index) pour chaque diapositive */}
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
                        <FontAwesomeIcon icon={faArrowLeft} />
                        Précédent
                      </button>
                      {/* Affiche le numéro de la diapositive actuelle et (index + 1) suivi du nombre total de diapositives */}
                      <div className="number">{`${index + 1}/${slides.length}`}</div> {/* nombre d'élémenets du tableau 'slides'*/}
                      <button className="slider_button next nextButton" onClick={handleNextSlide}>
                        Suivant
                        <FontAwesomeIcon icon={faArrowRight} className="custom-arrow-right" />
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


