import React, { useState } from 'react';
import * as Yup from 'yup'; // Importe toutes les fonctionnalités du module Yup (bibliothèque)
import { yupResolver } from '@hookform/resolvers/yup'; // Importe la fonction yupResolver depuis le module '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'; // Importation du hook useForm pour gérer le formulaire
import axios from 'axios';
// Importe le composant Popup depuis le fichier './Popup' et importe le CSS
import Popup from './Popup';
import './Popup.css';



// Composant ErrorMsg exporté par défaut, prenant "projectType,servicesRequests" comme argument.
export default function ErrorMsg({ projectType, servicesRequests, otherText }) {
  // Ajoutez un état pour gérer l'affichage de la popup
  const [showPopup, setShowPopup] = useState(false); // Crée 'showPopup' à l'aide de useState et initialise sa valeur à 'false'.
  // "Yup.object()" crée un schéma de validation. La méthode "shape({})" définir les règles de VALIDATION
  const yupValidation = Yup.object().shape({
    first_name: Yup.string().required('Veuillez entrer votre prénom.').min(4, 'Le prénom doit contenir au moins 4 caractères.'), // méthode Yup indique que la valeur de la propriété "firstName" doit être une chaîne de caractères. Si la propriété "firstName" est vide, une erreur sera renvoyée avec le message "Veuillez entrer votre prénom." 
    last_name: Yup.string().required('Veuillez entrer votre nom.').min(4, 'Le nom doit contenir au moins 4 caractères.'),
    company_name: Yup.string().required('Veuillez entrer le nom de votre entreprise/organisation.').min(4, 'Le nom de l\'entreprise/organisation doit contenir au moins 4 caractères.'),
    email: Yup.string().required('L\'identifiant de messagerie est obligatoire.')
      .email("Veuillez entrer une adresse e-mail valide."),  // Vérifie si la valeur du champ correspond à un format d'adresse e-mail.
    phone_number: Yup.string().required('Veuillez entrer votre numéro de téléphone.').min(10, 'Le numéro de téléphone doit contenir au moins 10 caractères.'),
    website_url: Yup.string()
      .required('Veuillez entrer l\'URL de votre site.')
      .url("Veuillez entrer une URL valide."),   // Vérifie si la valeur du champ correspond à un format d'URL
    project_description: Yup.string().required('Veuillez nous parler de votre projet.').min(8, 'La description du projet doit contenir au moins 8 caractères.'),
  });


  const formOptions = { resolver: yupResolver(yupValidation) }; // Définit les options du formulaire avec une propriété "resolver" qui utilise la validation Yup.
  const { register, handleSubmit, reset, formState } = useForm(formOptions);  // Utilise la fonction useForm avec les options du formulaire pour obtenir les méthodes. Destructure les propriétés register, handleSubmit, reset et formState de l'objet retourné.
  const { errors } = formState; // Destructure la propriété errors de l'objet formState, qui contient les erreurs de validation du formulaire.



  // ENVOI DU FORMULAIRE VIA L'API
  const baseURL = 'http://projetlaravel/api/estimates'; // URL de base
  const method = 'POST'; // Définissez la méthode HTTP (POST)

  // fonction pour soumettre le formulaire
  async function onSubmit(data) { // Fonction asynchrone pour gérer la soumission du formulaire
    try {
      if (otherText === null || otherText === undefined) {
        console.error("La valeur de 'otherText' ne peut pas être nulle");
        return;
      }
      console.log("Le type de 'otherText' est :", typeof otherText);
      let response;
      // Utilisation d'une instruction switch pour gérer différentes méthodes HTTP
      switch (method) {
        case 'POST':
          data.project_type = projectType; // Attribue la valeur de "projectType" à la propriété "project_type" de l'objet "data"
          data.services_requests = servicesRequests.toString(); // Convertit l'objet servicesRequests en une chaîne de caractères et l'assigne à la variable data.services_requests 
          data.other_text = otherText;
          // Effectue une requête POST vers l'URL de base avec les données et un en-tête CSRF
          console.log(data);// Affiche les données du formulaire dans la console
          response = await axios.post(baseURL, data, { // Effectue une requête POST vers l'URL de base avec les données du formulaire
            headers: {// un en-tête CSRF (Cross-Site Request Forgery) pour renforcer la sécurité de la requête
              'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            },
          });
          break; // Sort du switch lorsque la méthode est 'POST'
        case 'PUT':
          response = await axios.put(baseURL, data); // Effectue une requête PUT avec les données à l'URL de base
          break; // Sort du switch lorsque la méthode est 'PUT'
        case 'DELETE':
          response = await axios.delete(baseURL, { data }); // Effectue une requête DELETE avec les données à l'URL de base
          break; // Sort du switch lorsque la méthode est 'DELETE'
        default:
          console.error('Méthode HTTP non prise en charge'); // Affiche une erreur si la méthode n'est pas reconnue
          return; // Sort de la fonction
      } // Après avoir traité la soumission avec succès, réinitialisez le formulaire
      reset(); // Réinitialise le formulaire en utilisant la fonction reset de react-hook-form
      setShowPopup(true); // Pour afficher le popup lorsque showPopup est true
    }
    catch (error) {
      // Gestion des erreurs en cas d'échec de la soumission (VIDE)
    }
  }


  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit(onSubmit)}> {/* Lorsqu'il est soumis, la fonction handleSubmit(onSubmit) sera appelée. */}
        <div className="form-group" style={{ width: '500px' }}>
          <label>Prénom</label>
          <input // balise <input> Créer un champ de saisie dans un formulaire web.
            name="first_name"
            type="text"
            className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
            // Définit les classes CSS du champ de saisie. 'form-control' est toujours présente.
            // 'is-invalid' est ajoutée si des erreurs existent pour le champ "first_name".  
            {...register('first_name')}  // Lie le champ de saisie au formulaire en utilisant la méthode register 
          />
          <div className="invalid-feedback">{errors.first_name?.message}</div>
        </div>
        <div className="form-group" style={{ width: '500px' }}>
          <label>Nom</label>
          <input
            name="last_name"
            type="text"
            className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
            {...register('last_name')} // Lie le champ de saisie au formulaire en utilisant la méthode register 
          />
          <div className="invalid-feedback">{errors.last_name?.message}</div>
        </div>
        <div className="form-group" style={{ width: '500px' }}>
          <label>Entreprise / Organisation</label>
          <input
            name="company_name"
            type="text"
            className={`form-control ${errors.company_name ? 'is-invalid' : ''}`}
            {...register('company_name')} // Lie le champ de saisie au formulaire en utilisant la méthode register 
          />
          <div className="invalid-feedback">{errors.company_name?.message}</div>
        </div>
        <div className="form-group" style={{ width: '500px' }}>
          <label>Email</label>
          <input
            name="email"
            type="text"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register('email')} // Lie le champ de saisie au formulaire en utilisant la méthode register 
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
        <div className="form-group" style={{ width: '500px' }}>
          <label>Téléphone</label>
          <input
            name="phone_number"
            type="text"
            className={`form-control ${errors.phone_number ? 'is-invalid' : ''}`}
            {...register('phone_number')} // Lie le champ de saisie au formulaire en utilisant la méthode register 
          />
          <div className="invalid-feedback">{errors.phone_number?.message}</div>
        </div>
        <div className="form-group" style={{ width: '500px' }}>
          <label>Site / URL</label>
          <input
            name="website_url"
            type="text"
            className={`form-control ${errors.website_url ? 'is-invalid' : ''}`}
            {...register('website_url')} // Lie le champ de saisie au formulaire en utilisant la méthode register 
          />
          <div className="invalid-feedback">{errors.website_url?.message}</div>
        </div>
        <div className="form-group" style={{ width: '500px' }}>
          <label>Parlez-nous de votre projet</label>
          <textarea
            name="project_description"
            className={`form-control ${errors.project_description ? 'is-invalid' : ''}`} style={{ height: '150px' }}
            {...register('project_description')} // Lie le champ de saisie au formulaire en utilisant la méthode register 
          />
          <div className="invalid-feedback">{errors.project_description?.message}</div>
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-primary"> Envoyer </button>
        </div>
        {/* Afficher la popup si showPopup est true */}
        <Popup
          showPopup={showPopup} // La propriété 'showPopup' contrôle l'affichage de la popup en fonction de la valeur de 'showPopup'. 
          onClose={() => setShowPopup(false)} /> {/* Définit la variable showPopup à false, pour masquer la popup (fermé)*/}
      </form>
    </div>
  );
}

