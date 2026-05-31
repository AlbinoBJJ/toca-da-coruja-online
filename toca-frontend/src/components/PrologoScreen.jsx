import React, { useState } from 'react';
import { SCRIPT_PROLOGO } from '../constants/dialogos';
import kabureIwaImg from '/kabure-iwa.png';

function PrologoScreen({ onConcluirJornada }) {
  const [dialogoIndex, setDialogoIndex] = useState(0);

  const handleProximo = () => {
    if (dialogoIndex < SCRIPT_PROLOGO.length - 1) {
      setDialogoIndex(dialogoIndex + 1);
    } else {
      onConcluirJornada();
    }
  };

  return (
    <div className="prologo-cenario">
      {/* Sprite da Professora Coruja */}
      <img 
        src={kabureIwaImg}
        alt="Professora Kaburé-Iwa" 
        className="sprite-kabure"
      />

      {/* Caixa de Diálogo */}
      <div className="caixa-dialogo">
        <div className="caixa-dialogo-titulo">Mestra Kaburé-Iwa</div>
        <p className="caixa-dialogo-texto">
          {SCRIPT_PROLOGO[dialogoIndex]}
        </p>
        
        <button className="caixa-dialogo-next" onClick={handleProximo}>
          {dialogoIndex === SCRIPT_PROLOGO.length - 1 ? "Começar Jornada ▶" : "Próximo ▶"}
        </button>
      </div>
    </div>
  );
}

export default PrologoScreen;