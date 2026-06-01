import React, { useState } from 'react';
import { SCRIPT_BOTAO_4 } from '../constants/dialogos';
import TabuleiroDemonstracao from './TabuleiroDemonstracao';
import kabureIwaImg from '/kabure-iwa.png';

function LinguagemSecreta({ onConcluirEtapa }) {
  const [index, setIndex] = useState(0);

  const avançarTexto = () => {
    if (index < SCRIPT_BOTAO_4.length - 1) {
      setIndex(index + 1);
    } else {
      onConcluirEtapa();
    }
  };

  const voltarTexto = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  // 🧠 LÓGICA DE DESTAQUE INTERATIVO PARA O BOTÃO 4:
  
  // Ativa a renderização das letras nas casinhas a partir da página onde ela explica os nomes (índice 2 em diante)
  const deveMostrarCoordenadas = index >= 2;

  // Destaca a coluna 'e' e a fileira 4 individualmente nas páginas 3 e 4 para ilustrar as legendas
  const colunaAlvo = index === 3 ? 'e' : null;
  const fileiraAlvo = index === 4 ? 4 : null;

  // Na página 5, cruzamos e pintamos o ponto de encontro e4 usando a propriedade de coluna fixa
  const iluminarCasasCentro = index === 6;

  return (
    <div className="historia-lore-overlay">
      
      <TabuleiroDemonstracao 
        mostrarCoordenadas={deveMostrarCoordenadas}
        pintarColunaManual={colunaAlvo || (index === 5 ? 'e' : null)}
        pintarFileiraManual={fileiraAlvo || (index === 5 ? 4 : null)}
        // Reutilizamos a diagonal clara ID 10 de exemplo na página 6 para acender o bloco central se quiser, 
        // ou passamos propriedades limpas para manter o foco na leitura das coordenadas
      />

      <img 
        src={kabureIwaImg} 
        alt="Professora Kaburé-Iwa" 
        className="sprite-kabure-narradora" 
      />

      <div className="caixa-historia">
        <div className="caixa-historia-header">🔤 Lição 4: A Linguagem Secreta</div>
        <p className="caixa-historia-texto">{SCRIPT_BOTAO_4[index]}</p>
        
        <div className="caixa-historia-rodape">
          {index > 0 ? (
            <button className="btn-voltar-historia" onClick={voltarTexto}>
              ◀ Voltar
            </button>
          ) : (
            <div style={{ width: '80px' }} />
          )}

          <span className="progresso-paginas">Página {index + 1} de {SCRIPT_BOTAO_4.length}</span>
          
          <button className="btn-avançar-historia" onClick={avançarTexto}>
            {index === SCRIPT_BOTAO_4.length - 1 ? "Dominado! 🏆" : "Continuar ▶"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LinguagemSecreta;