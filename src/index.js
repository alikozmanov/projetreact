// Import des modules (React et ReactDom)
import React from "react";
import ReactDOM from "react-dom/client";

/* La ligne suivante pour le css (Projet.js (Tabs)) */ 
import 'bootstrap/dist/css/bootstrap.min.css';

// Import de style CSS (App.css)
import "./App.css"

// importe les modules nécessaires de la bibliothèque react-router-dom. 
//BrowserRouter est un composant qui fournit le contexte pour le routage, 
//Routes est un composant qui contient les routes de l'application, et Route est un composant qui définit une route spécifique.
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Les lignes suivantes importent les composants et les pages utilisés dans l'application :
import Nav from "./pages/Nav";
import Accueil from "./pages/Accueil";
import Services from "./pages/Services";
import Apropos from "./pages/Apropos";
import Devis from "./pages/Devis";
import Projet from "./pages/Projet";
import Portfolio from "./pages/Portfolio";
import Mention from "./pages/Mention";
import NoPage from "./pages/NoPage";

// Définition du composant principal de l'application
export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        {/* Route principale avec les composant : */}
          <Route path="/" element={<Nav />}>
          <Route index element={<Accueil />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Devis" element={<Devis />} />
          <Route path="/Projet" element={<Projet />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Mention" element={<Mention />} />
          {/* Route pour toutes les autres pages non définies (404) */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Rendu de l'application dans l'élément avec l'ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);





