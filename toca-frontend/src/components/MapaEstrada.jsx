import React from 'react';

function MapaEstrada({ passoAtual, onSelecionarPasso }) {
  // Lista com os 9 passos da caminhada.
  // IMPORTANTE: Ajustaremos os valores de 'top' e 'left' depois para bater certinho com as curvas da sua imagem!
  const passos = [
    { id: 1, label: "1", nome: "A Lenda dos 1.500 Anos", top: "90%", left: "48%" },
    { id: 2, label: "2", nome: "O Campo de Jogo", top: "82%", left: "55%" },
    { id: 3, label: "3", nome: "As Três Linhas", top: "72%", left: "49%" },
    { id: 4, label: "4", nome: "A Linguagem Secreta", top: "62%", left: "55%" },
    { id: 5, label: "5", nome: "Canhões do Reino", top: "52%", left: "63%" },
    { id: 6, label: "6", nome: "O Nome das Casas", top: "42%", left: "56%" },
    { id: 7, label: "7", nome: "O Jardim de Flores", top: "37%", left: "65%" },
    { id: 8, label: "8", nome: "Pintura de Diagonais", top: "35%", left: "73%" },
    { id: 9, label: "9", nome: "O Coração do Campo", top: "28%", left: "77%" },
  ];

  return (
    <div className="mapa-estrada-hud">
      <div className="instrucao-topo-mapa">
        ✨ Siga a trilha mágica para chegar ao Castelo! ✨
      </div>

      {passos.map((passo) => {
        // Regras de status do botão para travar ou liberar o progresso
        const estaLiberado = passo.id <= passoAtual;
        const estaAtivo = passo.id === passoAtual;

        return (
          <button
            key={passo.id}
            className={`circulo-rota ${estaAtivo ? 'piscante' : ''} ${estaLiberado ? 'liberado' : 'bloqueado'}`}
            style={{ top: passo.top, left: passo.left }}
            disabled={!estaLiberado}
            onClick={() => onSelecionarPasso(passo.id)}
            title={`${passo.id}) ${passo.nome}`}
          >
            {estaLiberado ? passo.label : "🔒"}
          </button>
        );
      })}
    </div>
  );
}

export default MapaEstrada;