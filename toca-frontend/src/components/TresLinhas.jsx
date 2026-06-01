import React, { useState } from 'react';
import { SCRIPT_BOTAO_3 } from '../constants/dialogos';
import TabuleiroDemonstracao from './TabuleiroDemonstracao';
import kabureIwaImg from '/kabure-iwa.png';

function TresLinhas({ onConcluirEtapa }) {
  const [index, setIndex] = useState(0);

  const avançarTexto = () => {
    if (index < SCRIPT_BOTAO_3.length - 1) {
      setIndex(index + 1);
    } else {
      onConcluirEtapa();
    }
  };

  // 🔄 Nova função para voltar o diálogo sem precisar resetar tudo
  const voltarTexto = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  // 🧠 MAQUINA DE ESTADOS DINÂMICA VIA CLIQUES MANUAIS:

  // 1. Apresenta Coluna D (fica estática na página 2)
  const colunaFixa = index === 2 ? 'd' : null;

  // 2. Conta uma coluna por vez (páginas 3 a 10 mapped para colunas 'a' até 'h')
  let colunaContada = null;
  if (index >= 3 && index <= 10) {
    const colunasLista = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    colunaContada = colunasLista[index - 3];
  }

  // 3. Apresenta Fileira 4 (fica estática na página 11)
  const fileiraFixa = index === 11 ? 4 : null;

  // 4. Conta uma fileira por vez (páginas 12 a 19 mapped para fileiras 1 até 8)
  let fileiraContada = null;
  if (index >= 12 && index <= 19) {
    fileiraContada = index - 11;
  }

  // 5. Mapeia e mostra UMA diagonal Clara por vez (Páginas 21 a 33 -> ID 1 a 13)
  let diagonalClaraAlvo = null;
  if (index >= 21 && index <= 33) {
    diagonalClaraAlvo = index - 20; // IDs de 1 a 13
  }

  // 6. Mapeia e mostra UMA diagonal Escura por vez (Páginas 34 a 46 -> ID 1 a 13)
  let diagonalEscuraAlvo = null;
  if (index >= 34 && index <= 46) {
    diagonalEscuraAlvo = index - 33; // IDs de 1 a 13
  }

  // Se estiver na introdução das diagonais ou no resumo final, mostra a diagonal padrão
  const mostrarDiagonalExemplo = index === 20 || index === 47;

  return (
    <div className="historia-lore-overlay">
      
      <TabuleiroDemonstracao 
        pintarColunaManual={colunaFixa || colunaContada}
        pintarFileiraManual={fileiraFixa || fileiraContada}
        diagonalClaraId={diagonalClaraAlvo}
        diagonalEscuraId={diagonalEscuraAlvo}
        pintarDiagonalExemplo={mostrarDiagonalExemplo}
        mostrarCoordenadas={false} 
      />

      <img src={kabureIwaImg} alt="Professora Kaburé-Iwa" className="sprite-kabure-narradora" />

      <div className="caixa-historia">
        <div className="caixa-historia-header">📏 Lição 3: As Três Linhas</div>
        <p className="caixa-historia-texto">{SCRIPT_BOTAO_3[index]}</p>
        
        <div className="caixa-historia-rodape">
          {/* 🌟 BOTÃO VOLTAR DINÂMICO: Só aparece da página 2 em diante */}
          {index > 0 ? (
            <button className="btn-voltar-historia" onClick={voltarTexto}>
              ◀ Voltar
            </button>
          ) : (
            <div style={{ width: '80px' }} /> /* Espaçador invisível para manter o layout alinhado */
          )}

          <span className="progresso-paginas">Página {index + 1} de {SCRIPT_BOTAO_3.length}</span>
          
          <button className="btn-avançar-historia" onClick={avançarTexto}>
            {index === SCRIPT_BOTAO_3.length - 1 ? "Compreendi as Linhas! 🏆" : "Continuar ▶"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TresLinhas;