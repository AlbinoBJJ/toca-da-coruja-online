import React from 'react';

function PergaminhoSidebar({ onVoltarHome, onFechar }) {
  return (
    <div className="sidebar-overlay">
      {/* 🌟 CLIQUE FORA: Se a criança clicar na área escura, o menu também fecha */}
      <div className="sidebar-backdrop" onClick={onFechar} />

      <div className="pergaminho-sidebar">
        {/* 🌟 BOTÃO DE FECHAR (O "X" DO MENU) */}
        <button className="sidebar-close-btn" onClick={onFechar} title="Fechar Menu">
          ❌
        </button>

        <h3 className="sidebar-titulo">📜 Opções</h3>
        
        <div className="sidebar-links">
          <button className="sidebar-btn" onClick={onVoltarHome}>
            🏠 Voltar ao Menu Principal
          </button>
          
          {/* Outras opções de progresso ou configurações entram aqui */}
        </div>
      </div>
    </div>
  );
}

export default PergaminhoSidebar;