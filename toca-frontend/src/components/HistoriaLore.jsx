import React, { useState } from 'react';
import { SCRIPT_BOTAO_1 } from '../constants/dialogos';
import kabureIwaImg from '/kabure-iwa.png';

function HistoriaLore({ onConcluirEtapa }) {
  const [index, setIndex] = useState(0);

  const avançarTexto = () => {
    if (index < SCRIPT_BOTAO_1.length - 1) {
      setIndex(index + 1);
    } else {
      onConcluirEtapa(); // Avisa o mestre (PrologoScreen) que a história acabou
    }
  };

  return (
    <div className="historia-lore-overlay">
      {/* Sprite da Coruja Guia */}
      <img 
        src={kabureIwaImg}
        alt="Professora Kaburé-Iwa" 
        className="sprite-kabure-narradora"
      />

      {/* Caixa Lúdica de História */}
      <div className="caixa-historia">
        <div className="caixa-historia-header">📜 Livro Ancestral do Reino</div>
        
        <p className="caixa-historia-texto">
          {SCRIPT_BOTAO_1[index]}
        </p>
        
        <div className="caixa-historia-rodape">
          <span className="progresso-paginas">Página {index + 1} de {SCRIPT_BOTAO_1.length}</span>
          <button className="btn-avançar-historia" onClick={avançarTexto}>
            {index === SCRIPT_BOTAO_1.length - 1 ? "Entrar na Estrada 🏁" : "Virar Página ▶"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HistoriaLore;