import React from 'react';

// Composant Popup fonctionnel prenant deux propriétés : showPopup et onClose.
const Popup = ({ showPopup, onClose }) => {
  // Affiche le contenu du composant uniquement si showPopup est vrai.
  return (
    showPopup && (
      <div className="popup">
        <div className="popup-content">
          <p>Le formulaire a bien été envoyé.</p>
          {/* Un bouton pour fermer le Popup, qui appelle la fonction onClose lorsqu'il est cliqué. */}
          <button onClick={onClose}>Fermer</button>
        </div>
      </div>
    )
  );
};

// Exporte le composant Popup pour qu'il puisse être utilisé dans d'autres parties de l'application.
export default Popup;