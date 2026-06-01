import React, { useState } from 'react';
import { SCRIPT_PROLOGO } from '../constants/dialogos';
import HistoriaLore from './HistoriaLore'; 
import CampoDeJogo from './CampoDeJogo'; 
import MapaEstrada from './MapaEstrada'; 
import kabureIwaImg from '/kabure-iwa.png';
import TresLinhas from './TresLinhas';
import LinguagemSecreta from './LinguagemSecreta';

function PrologoScreen({ onConcluirJornada }) {
  const [faseInterna, setFaseInterna] = useState('DIALOGO_INICIAL'); // DIALOGO_INICIAL, MAPA_ESTRADA, BOTAO_1, BOTAO_2, BOTAO_3
  const [dialogoIndex, setDialogoIndex] = useState(0);
  
  // Controla o nível de progresso na estrada (passo 1, 2, 3...)
  const [passoAtual, setPassoAtual] = useState(99);

  const handleProximo = () => {
    if (dialogoIndex < SCRIPT_PROLOGO.length - 1) {
      setDialogoIndex(dialogoIndex + 1);
    } else {
      setFaseInterna('MAPA_ESTRADA'); 
    }
  };

  return (
    <div className="prologo-cenario">
      
      {/* ESTADO 1: Diálogo Inicial de Introdução */}
      {faseInterna === 'DIALOGO_INICIAL' && (
        <>
          <img src={kabureIwaImg} alt="Professora Kaburé-Iwa" className="sprite-kabure" />
          <div className="caixa-dialogo">
            <div className="caixa-dialogo-titulo">Mestra Kaburé-Iwa</div>
            <p className="caixa-dialogo-texto">{SCRIPT_PROLOGO[dialogoIndex]}</p>
            <button className="caixa-dialogo-next" onClick={handleProximo}>
              {dialogoIndex === SCRIPT_PROLOGO.length - 1 ? "Ver a Estrada 🗺️" : "Próximo ▶"}
            </button>
          </div>
        </>
      )}

      {/* ESTADO 2: O Painel com a Rota de Círculos Piscantes */}
      {faseInterna === 'MAPA_ESTRADA' && (
        <>
          <MapaEstrada 
            passoAtual={passoAtual} 
            onSelecionarPasso={(id) => {
              if (id === 1) setFaseInterna('BOTAO_1');
              if (id === 2) setFaseInterna('BOTAO_2');
              if (id === 3) setFaseInterna('BOTAO_3');
              if (id === 4) setFaseInterna('BOTAO_4');
            }} 
          />
          
          <button 
            className="btn-passo ativo" 
            style={{ position: 'absolute', bottom: '4vh', left: '4vw', zIndex: 10 }}
            onClick={onConcluirJornada}
          >
            ◀ Sair do Prólogo
          </button>
        </>
      )}

      {/* ESTADO 3: Tela do Botão 1 Ativada */}
      {faseInterna === 'BOTAO_1' && (
        <HistoriaLore onConcluirEtapa={() => {
          setPassoAtual(2); 
          setFaseInterna('MAPA_ESTRADA');
        }} />
      )}

      {/* ESTADO 4: Tela do Botão 2 Ativada */}
      {faseInterna === 'BOTAO_2' && (
        <CampoDeJogo onConcluirEtapa={() => {
          if (passoAtual < 3) setPassoAtual(3); 
          setFaseInterna('MAPA_ESTRADA');
        }} />
      )}

      {/* 🌟 ESTADO 5: Tela do Botão 3 Ativada */}
      {faseInterna === 'BOTAO_3' && (
        <TresLinhas onConcluirEtapa={() => {
          if (passoAtual < 4) setPassoAtual(4); // 2. Libera o passo 4 (A Linguagem Secreta) quando terminar!
          setFaseInterna('MAPA_ESTRADA');
        }} />
      )}

      {/* ESTADO 6: Tela do Botão 4 Ativada */}
      {faseInterna === 'BOTAO_4' && (
        <LinguagemSecreta onConcluirEtapa={() => {
          if (passoAtual < 5) setPassoAtual(5); // Libera o passo 5 (A Grande Batalha / Teste final)
          setFaseInterna('MAPA_ESTRADA');
        }} />
      )}

    </div>
  );
}

export default PrologoScreen;