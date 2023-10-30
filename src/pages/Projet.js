// Import des modules et composants nécessaires depuis 'react' et 'react-bootstrap'
import React, { useState } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import ErrorMsg from './ErrorMsg';


// composant fonctionnel appelé 'Projet'.
const Projet = () => {
  // Utilisation du hook useState pour gérer l'état du composant
  const [activeTab, setActiveTab] = useState(0);  // // Déclare une variable d'état 'activeTab' avec une valeur initiale de 0. Cette variable sera utilisée pour suivre l'onglet actif sélectionné dans le composant.
  const [selectedImages, setSelectedImages] = useState([]); // Déclare une variable d'état 'selectedImages' avec une valeur initiale d'un tableau vide. Cette variable sera utilisée pour stocker les images sélectionnées dans le projet.
  const [autreTexte, setAutreTexte] = useState(''); // Déclare une variable d'état 'autreTexte' avec une valeur initiale d'une chaîne vide. Cette variable peut être utilisée pour stocker un texte supplémentaire lié au projet. 
  const [project_description, setProjectDescription] = useState(''); // Déclare une variable d'état 'projectDescription' avec une valeur initiale d'une chaîne vide. Cette variable peut être utilisée pour stocker une description du projet. 
  const [project_type, setProjectType] = useState('');// Déclarez la variable d'état projectType et le setter setProjectType dans votre composant
  const [services_requests, setServicesRequests] = useState([]);


  // Fonction pour gérer le changement d'onglet
  const handleTabSelect = (index) => {
    setActiveTab(index);
  };


  // Fonction pour gérer le clic sur une image carrée dans l'onglet 1
  const handleImageClick = (index) => {
    console.log(index);

    const isSelected = selectedImages.includes(index);
    if (isSelected) {
      setSelectedImages(selectedImages.filter((item) => item !== index));
    } else {
      setSelectedImages([...selectedImages, index]);
    }

    // Mettre à jour project_type en fonction de la sélection de l'image carrée l'onglet 1
    if (index === 0) {
      setProjectType("Un Site Vitrine");
    } else if (index === 1) {
      setProjectType("Un Site E-commerce");
    } else if (index === 2) {
      setProjectType("Autre");
    }
  };

  // onglet 2 cocher une case
  const handleServiceRequestChange = (service) => {
    const updatedServices = [...services_requests]; // Créez une copie de la liste des services demandés
    const serviceIndex = updatedServices.indexOf(service);

    if (serviceIndex !== -1) {
      // Si le service est déjà dans la liste, retirez-le
      updatedServices.splice(serviceIndex, 1);
    } else {
      // Sinon, ajoutez-le à la liste
      updatedServices.push(service);
    }

    setServicesRequests(updatedServices); // Mettez à jour l'état des services demandés
  };


  // Vérifier si le bouton 'Suivant' doit être désactivé (l'onglet 3)
  const isNextButtonDisabled = (selectedImages.length === 0 && !autreTexte) || activeTab === 2;

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      project_description,
      project_type, // Ajoutez project_type
      services_requests, // Ajoutez services_requests
      selectedImages,
    };


    // Réinitialisez les valeurs du formulaire
    setProjectDescription('');
    setProjectType('');
    setServicesRequests([]);
    setSelectedImages([]); // Réinitialisez également les sélections des carrés dans le premier onglet
  };


  // Rendu du composant 'Projet'
  return (
    <div className="backProjet">
      <h1 className="h1Projet">Un projet ?</h1>
      <p className="paraProjet">Déterminons votre besoin avec le formulaire ci-dessous</p>
      {/* Composant 'Tabs' pour gérer les onglets */}
      <Tabs activeKey={activeTab} onSelect={handleTabSelect} id="devis-tabs" className="blockInfo">
        {/* Onglet 1 */}
        <Tab eventKey={0} title="Informations sur votre projet">
          {/* Contenu de l'onglet 1 */}
          <p className="paraDemande">Votre demande concerne : <span style={{ color: "red" }}>*</span></p>
          {/* Sélection des images carrées */}
          <div className="containerSquare">
            <div className={`square ${selectedImages.includes(0) ? 'selected' : ''}`} onClick={() => handleImageClick(0)}>
              <img className='imgSquare' src="https://oguzdonmez.com/wp-content/uploads/2021/01/website.jpg" title="Un Site Vitrine" />
              {selectedImages.includes(0) && <span className="checkMark">✓</span>}
              <p className="paraSite1">Un Site Vitrine</p>
            </div>
            <div className={`square ${selectedImages.includes(1) ? 'selected' : ''}`} onClick={() => handleImageClick(1)}>
              <img className='imgSquare' src="https://oguzdonmez.com/wp-content/uploads/2021/04/magasin-carte-credit-coffrets-cadeaux-illustration-acheteurs_1262-18980-1.jpg" title="Un Site e-commerce" />
              {selectedImages.includes(1) && <span className="checkMark">✓</span>}
              <p className="paraSite2">Un Site E-commerce</p>
            </div>
            <div className={`square ${selectedImages.includes(2) ? 'selected' : ''}`} onClick={() => handleImageClick(2)}>
              <img className='imgSquare' src="https://oguzdonmez.com/wp-content/uploads/2021/04/unnamed.png" title="Autre" />
              {selectedImages.includes(2) && <span className="checkMark">✓</span>}
              <p className="paraSite3">Autre</p>
            </div>
          </div>
          {/* Champ de texte pour spécifier la nature du site si 'Autre' est sélectionné */}
          {selectedImages.includes(2) && (
            <div>
              <p className='projetPara'>Veuillez préciser la nature de votre site :</p>
              <div className='champText'>
                <input
                  type="text"
                  value={autreTexte}
                  onChange={(e) => setAutreTexte(e.target.value)}
                  placeholder="Si vous ne savez pas exactement, expliquez votre site en 1 phrase."
                  style={{ height: '50%', width: '50%' }}
                />
              </div>
            </div>
          )}
        </Tab>
        {/* Onglet 2 */}
        <Tab eventKey={1} title="Informations sur votre demande">
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
        <Tab eventKey={2} title="Informations sur vous">
          {/* Contenu de l'onglet 3 */}
          {/* Composant 'ErrorMsg'*/}
          <ErrorMsg projectType={project_type} servicesRequests={services_requests} />  {/* crée une instance "ErrorMsg" en lui passant la valeur "project_type".Ensuite l'utilisée à l'intérieur "ErrorMsg" */}
        </Tab>
      </Tabs>
      {/* Boutons pour naviguer entre les onglets */}
      <div className="buttonProjet">
        <Button disabled={activeTab === 0} onClick={() => setActiveTab((prev) => prev - 1)}>
          Précédent
        </Button>
        <Button disabled={isNextButtonDisabled} onClick={() => setActiveTab((prev) => prev + 1)}>
          Suivant
        </Button>
      </div>
    </div>
  );
};

// Export du composant 'Projet' par défaut
export default Projet;