import React, { useState } from 'react';
import { SCRIPT_BOTAO_2 } from '../constants/dialogos';
import TabuleiroDemonstracao from './TabuleiroDemonstracao'; // 🌟 Injetando o tabuleiro visual
import kabureIwaImg from '/kabure-iwa.png';

function CampoDeJogo({ onConcluirEtapa }) {
  const [index, setIndex] = useState(0);

  const avançarTexto = () => {
    if (index < SCRIPT_BOTAO_2.length - 1) {
      setIndex(index + 1);
    } else {
      onConcluirEtapa();
    }
  };

  // 🧠 Lógica Dinâmica Interativa:
  // Mostra o tabuleiro a partir da página 1 (index >= 1)
  const deveExibirTabuleiro = index >= 1;
  
  // Faz a casa h1 piscar exatamente quando a coruja fala do "Truque da Mão Direita" (páginas finais)
  const deveDestacarCanto = index === 8 || index === 9;

  return (
    <div className="historia-lore-overlay">
      
      {/* 🌟 O TABULEIRO INTERATIVO SÓ APARECE QUANDO A CORUJA COMEÇA A EXPLICAR O CAMPO */}
      {deveExibirTabuleiro && (
        <TabuleiroDemonstracao destacarCantoDireito={deveDestacarCanto} />
      )}

      {/* Sprite da Mestra Coruja ao lado da caixa */}
      <img 
        src={kabureIwaImg}
        alt="Professora Kaburé-Iwa" 
        className="sprite-kabure-narradora"
      />

      {/* Caixa de Texto do Tabuleiro no Rodapé */}
      <div className="caixa-historia">
        <div className="caixa-historia-header">♟️ Lição 2: O Campo de Batalha</div>
        
        <p className="caixa-historia-texto">
          {SCRIPT_BOTAO_2[index]}
        </p>
        
        <div className="caixa-historia-rodape">
          <span className="progresso-paginas">Página {index + 1} de {SCRIPT_BOTAO_2.length}</span>
          <button className="btn-avançar-historia" onClick={avançarTexto}>
            {index === SCRIPT_BOTAO_2.length - 1 ? "Marcar Concluído! 🏆" : "Continuar ▶"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CampoDeJogo;