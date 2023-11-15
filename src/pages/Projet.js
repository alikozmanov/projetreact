
import React, { useState } from 'react';// Importe React et la fonction useState depuis la bibliothèque React.
import { Tabs, Tab, Button } from 'react-bootstrap'; // Importe les composants Tabs, Tab et Button depuis React-Bootstrap.
import ErrorMsg from './ErrorMsg'; // Importe ErrorMsg depuis le fichier ErrorMsg.js


// composant fonctionnel appelé 'Projet'.
const Projet = () => {
  // Utilisation du hook "useState" pour gérer l'état du composant
  const [activeTab, setActiveTab] = useState(0);  // // Déclare une variable d'état 'activeTab' avec une valeur initiale de 0. Cette variable sera utilisée pour suivre l'onglet actif sélectionné dans le composant.
  const [selectedImages, setSelectedImages] = useState([]); // Déclare une variable d'état 'selectedImages' avec une valeur initiale d'un tableau vide. Cette variable sera utilisée pour stocker les images sélectionnées dans le projet.
  const [other_text, setOtherText] = useState(''); // Déclare une variable d'état 'autreTexte' avec une valeur initiale d'une chaîne vide.
  const [project_description, setProjectDescription] = useState(''); // Déclare une variable d'état 'projectDescription' avec une valeur initiale d'une chaîne vide. Cette variable peut être utilisée pour stocker une description du projet. 
  const [project_type, setProjectType] = useState('');// Déclarez la variable d'état projectType et le setter setProjectType dans votre composant
  const [services_requests, setServicesRequests] = useState([]);
  



  // Fonction pour gérer le changement d'onglet (0,1,2)
  const handleTabSelect = (index) => { // Fonction handleTabSelect avec un paramètre 'index'
    setActiveTab(index); // Met à jour la valeur de l'onglet actif en utilisant la valeur 'index'
  };


  // Onglet 1 : fonction pour gérer le clic sur une image carrée 
  const handleImageClick = (index) => {
    // Vérifie si l'image est déjà sélectionnée
    const isSelected = selectedImages.includes(index);
    if (isSelected) {
      // Si l'image est déjà sélectionnée, la désélectionne
      setSelectedImages(selectedImages.filter((item) => item !== index));
    } else {
      // Si l'image n'est pas sélectionnée, l'ajoute à la liste des sélections
      setSelectedImages([...selectedImages, index]);
    }

    // Mettre à jour project_type en fonction de la sélection de l'image carrée dans l'onglet 1
    if (index === 0) {
      // Si l'image sélectionnée a un index de 0, définir le type de projet comme "Un Site Vitrine"
      setProjectType("Un Site Vitrine");
    } else if (index === 1) {
      // Si l'image sélectionnée a un index de 1, définir le type de projet comme "Un Site E-commerce"
      setProjectType("Un Site E-commerce");
    } else if (index === 2) {
      // Si l'image sélectionnée a un index de 2, définir le type de projet comme "Autre"
      setProjectType("Autre");
    }
  };


  // Onglet 2 : cocher une case
  const handleServiceRequestChange = (service) => {
    // Créez une copie de la liste des services demandés
    const updatedServices = [...services_requests];

    // Trouvez l'indice du service dans la liste
    const serviceIndex = updatedServices.indexOf(service);

    if (serviceIndex !== -1) {
      // Si le service est déjà dans la liste, retirez-le
      updatedServices.splice(serviceIndex, 1);
    } else {
      // Sinon, ajoutez-le à la liste
      updatedServices.push(service);
    }

    // Mettez à jour l'état des services demandés
    setServicesRequests(updatedServices);
  };


  // Vérifier si le bouton 'Suivant' doit être désactivé (l'onglet 3)
  const isNextButtonDisabled = (selectedImages.length === 0 && !other_text) || activeTab === 2;

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche la soumission du formulaire par défaut

    // Crée un objet formData avec les valeurs du formulaire
    const formData = {
      project_description, // Récupère la description du projet
      project_type, // Récupère le type de projet
      services_requests, // Récupère les demandes de services
      selectedImages, // Récupère les images sélectionnées
      other_text,
    };
    console.log('Données avant envoi :', formData); // Affiche les données du formulaire dans la console pour le débogage


    // Réinitialisez les valeurs du formulaire pour les vider
    setProjectDescription(''); // Réinitialise la description du projet
    setProjectType(''); // Réinitialise le type de projet
    setServicesRequests([]); // Réinitialise les demandes de services
    setSelectedImages([]); // Réinitialise également les sélections des carrés dans le premier onglet
    setOtherText(''); // Réinitialisez également la variable d'état "other_text" pour vider le champ de texte
  };


  // Rendu du composant 'Projet'
  return (
    <div className="backProjet">
      <h1 className="h1Projet">Un projet ?</h1>
      <p className="paraProjet">Déterminons votre besoin avec le formulaire ci-dessous</p>
      {/* Composant 'Tabs' pour gérer les onglets */}
      <Tabs activeKey={activeTab} onSelect={handleTabSelect} id="devis-tabs" className="blockInfo">
        {/* Onglet 1 */}
        <Tab eventKey={0} title="Informations sur votre projet"> {/*Définit un onglet avec une clé unique (eventKey) égale à 0*/}
          {/* Contenu de l'onglet 1 */}
          <p className="paraDemande">Votre demande concerne : <span style={{ color: "red" }}>*</span></p>
          {/* Sélection des images carrées */}
          <div className="containerSquare">
            <div className={`square ${selectedImages.includes(0) ? 'selected' : ''}`} onClick={() => handleImageClick(0)}>
              <img className='imgSquare' src="/images/site-web-vitrine.jpg" title="Un Site Vitrine" />
              {selectedImages.includes(0) && <span className="checkMark">✓</span>}
              <p className="paraSite1">Un Site Vitrine</p>
            </div>
            <div className={`square ${selectedImages.includes(1) ? 'selected' : ''}`} onClick={() => handleImageClick(1)}>
              <img className='imgSquare' src="/images/Ecommerce.png" title="Un Site e-commerce" />
              {selectedImages.includes(1) && <span className="checkMark">✓</span>}
              <p className="paraSite2">Un Site E-commerce</p>
            </div>
            <div className={`square ${selectedImages.includes(2) ? 'selected' : ''}`} onClick={() => handleImageClick(2)}>
              <img className='imgSquare' src="/images/ordinateur.jpeg" title="Autre" />
              {selectedImages.includes(2) && <span className="checkMark">✓</span>}
              <p className="paraSite3">Autre</p>
            </div>
          </div>
          {/* Champ de texte pour spécifier si 'Autre' est sélectionné */}
          {selectedImages.includes(2) && (  // Vérifie si l'image avec l'index 2 est sélectionnée
            <div>
              <p className='projetPara'>Veuillez préciser la nature de votre site :</p>
              <div className='champText'>
                <input
                  type="text"
                  value={other_text}
                  onChange={(e) => setOtherText(e.target.value)} // Lorsque champ de texte change, met à jour l'état 'autreTexte'
                  placeholder="Si vous ne savez pas exactement, expliquez votre site en 1 phrase."
                  style={{ height: '50%', width: '50%' }}
                />
              </div>
            </div>
          )}
        </Tab>
        {/* Onglet 2 */}
        <Tab eventKey={1} title="Informations sur votre demande">{/*Définit un onglet avec une clé unique (eventKey) égale à 1*/}
          {/* Contenu de l'onglet 2 */}
          <h3 style={{ padding: "10px" }}>
            Vous souhaitez :<span style={{ color: "red" }}>*</span>
          </h3>
          {/* Choix des services demandés avec des cases à cocher */}
          <label style={{ padding: "10px" }}>
            <input
              type="checkbox"
              name="service"
              value="creation-site-internet"
              onChange={() => handleServiceRequestChange("creation-site-internet")}
            />
            <span style={{ marginLeft: "10px" }}>Créer votre site internet</span>
          </label>
          <br />
          <label style={{ padding: "10px" }}>
            <input
              type="checkbox"
              name="service"
              value="refonte-site-existant"
              onChange={() => handleServiceRequestChange("refonte-site-existant")}
            />
            <span style={{ marginLeft: "10px" }}>Faire une refonte d'un site existant</span>
          </label>
          <br />
          <label style={{ padding: "10px" }}>
            <input
              type="checkbox"
              name="service"
              value="ameliorer-site"
              onChange={() => handleServiceRequestChange("ameliorer-site")}
            />
            <span style={{ marginLeft: "10px" }}>Améliorer votre site</span>
          </label>
          <br />
          <label style={{ padding: "10px" }}>
            <input
              type="checkbox"
              name="service"
              value="maintenance-site"
              onChange={() => handleServiceRequestChange("maintenance-site")}
            />
            <span style={{ marginLeft: "10px" }}>Une maintenance de votre site</span>
          </label>
          <br />
          <label style={{ padding: "10px" }}>
            <input
              type="checkbox"
              name="service"
              value="migration-site"
              onChange={() => handleServiceRequestChange("migration-site")}
            />
            <span style={{ marginLeft: "10px" }}>Une migration de votre site</span>
          </label>
          <br />
          <label style={{ padding: "10px" }}>
            <input
              type="checkbox"
              name="service"
              value="logo-site"
              onChange={() => handleServiceRequestChange("logo-site")}
            />
            <span style={{ marginLeft: "10px" }}>Un logo pour votre site</span>
          </label>
          <br />
          <p style={{ padding: "20px", textAlign: "left", color: "green" }}>
            Vous pouvez choisir plusieurs options si vous le souhaitez.
          </p>
        </Tab>
        {/* Onglet 3 */}
        <Tab eventKey={2} title="Informations sur vous">{/*Définit un onglet avec une clé unique (eventKey) égale à 2*/}
          {/* Contenu de l'onglet 3 */}
          {/* Crée une instance "ErrorMsg" en lui passant la valeur "project_type, services".Ensuite l'utilisée à l'intérieur "ErrorMsg" */}
          <ErrorMsg
            projectType={project_type}
            servicesRequests={services_requests}
            otherText={other_text}
          />
        </Tab>
      </Tabs>
      {/* Boutons pour naviguer entre les onglets */}
      <div className="buttonProjet">
        {/* onglet précédent */}
        {/* activeTab est égal à 0. Je clique sur ce bouton, l'onglet active est réduit de 1,permet de passer à l'onglet précédent.*/}
        <Button disabled={activeTab === 0} onClick={() => setActiveTab((prev) => prev - 1)}>
          Précédent
        </Button>
        {/* onglet suivant */}
        {/* Bouton est désactivé en fonction de la valeur de isNextButtonDisabled.Je clique sur ce bouton, l'onglet active est augmenté de 1, ce qui permet de passer à l'onglet suivant.*/}
        <Button disabled={isNextButtonDisabled} onClick={() => setActiveTab((prev) => prev + 1)}>
          Suivant
        </Button>
      </div>
    </div>
  );
};

// Export du composant 'Projet' par défaut
export default Projet;