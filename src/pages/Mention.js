import React from 'react';

const Mention = () => {
  return (
    <footer className="footer-Mention">
      <div>
        <p><strong>Hébergeur :</strong></p>
        <p><strong>1&1 IONOS SARL</strong></p>
        <p><strong>Siège social :</strong> 7 place de la Gare, 57201 SARREGUEMINES – France</p>  
        <p><strong>SIREN :</strong> 431 303 775</p>
        <p><strong>SIRET :</strong> 43130377500016</p>
        <p><strong>Capital social :</strong> 100 000,00 €</p>
      </div>

      <div>
        <p><strong>Système de gestion de contenu :</strong></p>
        <p>
          Ce site est créé sous React.
        </p>
      </div>

      <div>
        <p><strong>Copyright :</strong></p>
        <p>
          Sauf mention contraire, l’ensemble de ce site relève des législations française et internationale sur le droit d’auteur 
          et la propriété intellectuelle, notamment par les dispositions des articles L111-1 et L122-4 du Code de la Propriété Intellectuelle.
          Toute reproduction de son contenu est interdite sans autorisation préalable, expresse et écrite.
          Tout autre matériel contenu sur ce site ne nous appartenant pas : photos, textes, images, codes source, logos, noms de produits 
          ou marques citées, etc., est la propriété de leurs détenteurs respectifs.
        </p>
      </div>
    </footer>
  );
};

export default Mention;

