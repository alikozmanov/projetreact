// Import des fonctions render et screen depuis '@testing-library/react'
import { render, screen } from '@testing-library/react';
import App from './App'; // Import du composant App depuis le fichier './App'



// Test qui vérifie si le lien "learn react" est rendu dans le composant App
test('renders learn react link', () => {
  // Rend le composant App dans un environnement de test
  render(<App />);

  // Recherche un élément dans le rendu du composant qui contient le texte "learn react" (insensible à la casse)
  const linkElement = screen.getByText(/learn react/i);

  // Vérifie que l'élément a été trouvé dans le rendu
  expect(linkElement).toBeInTheDocument();
});
