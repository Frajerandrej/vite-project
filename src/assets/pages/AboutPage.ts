import React, { useState } from 'react';

// 1. Definice typů pro Props (vlastnosti předávané z nadřazené komponenty)
interface AboutPageProps {
  title?: string;      // Volitelný textový prop (díky otazníku)
  description: string; // Povinný textový prop
}

// 2. Vytvoření funkcionální komponenty (React.FC) s generickým typem
const AboutPage: React.FC<AboutPageProps> = ({ title = "Výchozí nadpis", description }) => {
  
  // 3. Použití hooku useState s explicitním typem <number>
  const [likes, setLikes] = useState<number>(0);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      {/* Vykreslení předaných props */}
      <h1>{title}</h1>
      <p>{description}</p>

      {/* Interaktivní část se stavem */}
      <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3>Podpořte tuto stránku</h3>
        <p>Počet lajků: <strong>{likes}</strong></p>
        
        <button 
          onClick={() => setLikes(likes + 1)}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Přidat lajk 👍
        </button>
      </div>
    </div>
  );
};

export default AboutPage;