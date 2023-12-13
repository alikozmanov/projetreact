
import React from 'react'; // Importation du module React depuis la bibliothèque React
import { Helmet } from 'react-helmet'; // Importation du composant Helmet depuis la bibliothèque react-helmet


const NoPage = () => {
  const containerStyle = {
    width: '100%',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  return (
    <>
      <Helmet>
        <title>404 - Page non trouvée</title>
        <meta name="description" content="La page que vous recherchez n'a pas été trouvée. Consultez notre site pour découvrir d'autres contenus intéressants." />
      </Helmet>
      <div style={containerStyle}>
        <h1>404 - Page non trouvée</h1>
      </div>
    </>
  );
};

export default NoPage;