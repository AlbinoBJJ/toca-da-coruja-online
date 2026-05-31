/* ==========================================================================
   Toca da Coruja - Componente Principal (App Root)
   Versão: 1.2
   Descrição: Controla a máquina de estados de navegação interna das telas do jogo.
   ========================================================================== */

/*import React, { useState } from 'react';
import './styles/Home.css'; // Importação da camada de estilização isolada

function App() {
  // Estado centralizador da tela ativa do jogo: 'HOME' ou 'PROLOGO'
  const [telaAtiva, setTelaAtiva] = useState('HOME');

  // Transição de tela disparada pelo botão "APRENDA"
  const handleAprenda = () => {
    setTelaAtiva('PROLOGO');
  };

  const handlePratique = () => {
    alert('Em breve: Hub de Puzzles e Desafios Táticos!');
  };

  const handleJogue = () => {
    alert('Em breve: Partidas contra o Ogro Invasor (Sumô dos Reis)!');
  };

  // Se a tela ativa for o PRÓLOGO, renderiza temporariamente um container de teste limpo
  if (telaAtiva === 'PROLOGO') {
    return (
      <div className="home-viewport">
        <h1 style={{ color: '#fff', fontFamily: 'sans-serif' }}>
          [Aqui vai nascer o cenário do Prólogo e os diálogos da Kaburé-Iwa]
        </h1>
      </div>
    );
  }

  // Por padrão, renderiza a tela HOME
  return (
    <div className="home-viewport">
      <div className="home-container">
        
        {/* Trigger Invisível: APRENDA (Placa Roxa) *//*}
        /*<button 
          className="trigger-btn trigger-aprenda"
          onClick={handleAprenda}
          title="Aprenda"
        />

        {/* Trigger Invisível: PRATIQUE (Placa Azul) *//*}
        /*<button 
          className="trigger-btn trigger-pratique"
          onClick={handlePratique}
          title="Pratique"
        />

        {/* Trigger Invisível: JOGUE (Placa Verde) *//*}
        /*<button 
          className="trigger-btn trigger-jogue"
          onClick={handleJogue}
          title="Jogue"
        />

      </div>
    </div>
  );
}

export default App;

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

// Nota técnica: O arquivo Prologo.css será importado aqui futuramente para dar estilo global às telas
// import './styles/Prologo.css'; 

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