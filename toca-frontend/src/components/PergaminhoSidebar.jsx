import React from 'react';

function PergaminhoSidebar({ onVoltarHome }) {
  return (
    <aside className="pergaminho-sidebar">
      <h2>📜 Menu do Reino</h2>
      <div className="sidebar-stats">
        <p><strong>Fase:</strong> Prólogo</p>
        <p><strong>Estrelas:</strong> ⭐ 0</p>
      </div>
      <nav className="sidebar-nav">
        <button onClick={onVoltarHome}>Voltar para a Home</button>
        <button onClick={() => alert('Seletor de fases em breve!')}>Escolher Fase</button>
      </nav>
    </aside>
  );
}

export default PergaminhoSidebar;