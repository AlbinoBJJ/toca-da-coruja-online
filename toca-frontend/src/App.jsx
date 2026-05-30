/* ==========================================================================
   Toca da Coruja - Componente Principal (App Root)
   Versão: 1.1
   Descrição: Gerencia os estados de telas do jogo e dispara os fluxos core.
   ========================================================================== */

import React from 'react';
import './styles/Home.css'; // Importação da camada de estilização isolada

function App() {
  
  // Handlers operacionais disparados pelos botões invisíveis
  const handleAprenda = () => {
    alert('Iniciando o Prólogo: Conversa com a Coruja Kaburé-Iwa e a Estrada Quadriculada!');
  };

  const handlePratique = () => {
    alert('Em breve: Hub de Puzzles e Desafios Táticos!');
  };

  const handleJogue = () => {
    alert('Em breve: Partidas contra o Ogro Invasor (Sumô dos Reis)!');
  };

  return (
    <div className="home-viewport">
      <div className="home-container">
        
        {/* Trigger Invisível: APRENDA (Placa Roxa) */}
        <button 
          className="trigger-btn trigger-aprenda"
          onClick={handleAprenda}
          title="Aprenda"
        />

        {/* Trigger Invisível: PRATIQUE (Placa Azul) */}
        <button 
          className="trigger-btn trigger-pratique"
          onClick={handlePratique}
          title="Pratique"
        />

        {/* Trigger Invisível: JOGUE (Placa Verde) */}
        <button 
          className="trigger-btn trigger-jogue"
          onClick={handleJogue}
          title="Jogue"
        />

      </div>
    </div>
  );
}

export default App;