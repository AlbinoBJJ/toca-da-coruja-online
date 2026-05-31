/* ==========================================================================
   Toca da Coruja - Orquestrador Principal (Maestro)
   Versão: 2.0
   Descrição: Centraliza a máquina de estados de navegação injetando os 
              componentes modulares e gerenciando os estados globais.
   ========================================================================== */

import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import PrologoScreen from './components/PrologoScreen';
import PergaminhoSidebar from './components/PergaminhoSidebar';
import './styles/Home.css';
import './styles/Prologo.css';

function App() {
  const [telaAtiva, setTelaAtiva] = useState('HOME');
  const [menuAberto, setMenuAberto] = useState(false);

  // Handlers operacionais globais
  const alternarMenu = () => setMenuAberto(!menuAberto);

  const irParaHome = () => {
    setTelaAtiva('HOME');
    setMenuAberto(false);
  };

  const irParaPrologo = () => setTelaAtiva('PROLOGO');
  
  const iniciarFase1 = () => {
    alert('Avançando para a Fase 1: A Estrada Quadriculada!');
  };

  return (
    <div className="home-viewport">
      
      {/* HUD Global: Visível apenas quando não estiver na Home */}
      {telaAtiva !== 'HOME' && (
        <button className="hud-menu-btn" onClick={alternarMenu} title="Menu de Opções">
          ⚙️
        </button>
      )}

      {/* Menu Lateral Persistente */}
      {menuAberto && <PergaminhoSidebar onVoltarHome={irParaHome} />}

      {/* Máquina de Estados de Renderização de Telas */}
      {telaAtiva === 'HOME' && (
        <HomeScreen 
          onAprenda={irParaPrologo}
          onPratique={() => alert('Em breve: Hub de Puzzles!')}
          onJogue={() => alert('Em breve: Sumô dos Reis!')}
        />
      )}

      {telaAtiva === 'PROLOGO' && (
        <PrologoScreen onConcluirJornada={iniciarFase1} />
      )}

    </div>
  );
}

export default App;