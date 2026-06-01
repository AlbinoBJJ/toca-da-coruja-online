import React from 'react';

function TabuleiroDemonstracao({ 
  destacarCantoDireito, 
  mostrarCoordenadas = false,
  pintarColunaManual = null,
  pintarFileiraManual = null,
  diagonalClaraId = null,   
  diagonalEscuraId = null,  
  pintarDiagonalExemplo = false
}) {
  const colunas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const fileiras = [8, 7, 6, 5, 4, 3, 2, 1];

  return (
    /* 🌟 Aplicamos a classe dinâmica 'mostrar-legendas' na moldura externa */
    <div className={`tabuleiro-container-central ${mostrarCoordenadas ? 'mostrar-legendas' : ''}`}>
      
      <div className="grade-tabuleiro-pure">
        
        {/* 🌟 RÉGUA VERTICAL: Números das Fileiras colocados na moldura esquerda (8 a 1 de cima para baixo) */}
        <div className="regua-coordenadas-lateral">
          {fileiras.map(num => (
            <span key={`num-${num}`} className="caractere-coordenada-moldura">{num}</span>
          ))}
        </div>

        {/* Renderização das 64 casas */}
        {fileiras.map((fileira) =>
          colunas.map((coluna) => {
            const indiceColuna = colunas.indexOf(coluna);
            const ehEscura = (indiceColuna + fileira) % 2 === 1;
            const nomeCasa = `${coluna}${fileira}`;
            
            const ehCantoDireito = nomeCasa === 'h1' && destacarCantoDireito;
            const deveIluminarColuna = coluna === pintarColunaManual;
            const deveIluminarFileira = fileira === pintarFileiraManual;
            const ehDiagonalExemplo = pintarDiagonalExemplo && (indiceColuna === (fileira - 1));

            let pertenceADiagonalClara = false;
            let pertenceADiagonalEscura = false;

            // Mapeamento das 13 Diagonais Claras (Seu gabarito perfeito salvo!)
            if (!ehEscura && diagonalClaraId) {
              const casaAtual = `${coluna}${fileira}`;
              const rotasClaras = {
                1: ['b1', 'a2'].includes(casaAtual),
                2: ['d1', 'c2', 'b3', 'a4'].includes(casaAtual),
                3: ['f1', 'e2', 'd3', 'c4', 'b5', 'a6'].includes(casaAtual),
                4: ['h1', 'g2', 'f3', 'e4', 'd5', 'c6', 'b7', 'a8'].includes(casaAtual),
                5: ['h3', 'g4', 'f5', 'e6', 'd7', 'c8'].includes(casaAtual),
                6: ['h5', 'g6', 'f7', 'e8'].includes(casaAtual),
                7: ['h7', 'g8'].includes(casaAtual),
                8: ['f1', 'g2', 'h3'].includes(casaAtual),
                9: ['d1', 'e2', 'f3', 'g4', 'h5'].includes(casaAtual),
                10: ['b1', 'c2', 'd3', 'e4', 'f5', 'g6', 'h7'].includes(casaAtual),
                11: ['a2', 'b3', 'c4', 'd5', 'e6', 'f7', 'g8'].includes(casaAtual),
                12: ['a4', 'b5', 'c6', 'd7', 'e8'].includes(casaAtual),
                13: ['a6', 'b7', 'c8'].includes(casaAtual)
              };
              pertenceADiagonalClara = rotasClaras[diagonalClaraId];
            }

            // Mapeamento das Diagonais Escuras (Seu gabarito perfeito salvo!)
            if (ehEscura && diagonalEscuraId) {
              const casaAtual = `${coluna}${fileira}`;
              const rotasEscuras = {
                1: ['g1', 'h2'].includes(casaAtual),
                2: ['e1', 'f2', 'g3', 'h4'].includes(casaAtual),
                3: ['c1', 'd2', 'e3', 'f4', 'g5', 'h6'].includes(casaAtual),
                4: ['a1', 'b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8'].includes(casaAtual),
                5: ['a3', 'b4', 'c5', 'd6', 'e7', 'f8'].includes(casaAtual),
                6: ['a5', 'b6', 'c7', 'd8'].includes(casaAtual),
                7: ['a7', 'b8'].includes(casaAtual),
                8: ['c1', 'b2', 'a3'].includes(casaAtual),
                9: ['e1', 'd2', 'c3', 'b4', 'a5'].includes(casaAtual),
                10: ['g1', 'f2', 'e3', 'd4', 'c5', 'b6', 'a7'].includes(casaAtual),
                11: ['h2', 'g3', 'f4', 'e5', 'd6', 'c7', 'b8'].includes(casaAtual),
                12: ['h4', 'g5', 'f6', 'e7', 'd8'].includes(casaAtual),
                13: ['h6', 'g7', 'f8'].includes(casaAtual)
              };
              pertenceADiagonalEscura = rotasEscuras[diagonalEscuraId];
            }

            let classesCasa = `casa-tabuleiro ${ehEscura ? 'escura' : 'clara'}`;
            if (ehCantoDireito) classesCasa += ' piscando-canto';
            if (deveIluminarColuna) classesCasa += ' linha-vento-vertical';
            if (deveIluminarFileira) classesCasa += ' linha-terra-horizontal';
            if (ehDiagonalExemplo) classesCasa += ' escada-diagonal-inclinada';
            if (pertenceADiagonalClara) classesCasa += ' escada-diagonal-clara';
            if (pertenceADiagonalEscura) classesCasa += ' escada-diagonal-escura';

            return <div key={nomeCasa} className={classesCasa} />;
          })
        )}

        {/* 🌟 RÉGUA HORIZONTAL: Letras das Colunas colocadas na moldura inferior (a até h da esquerda para a direita) */}
        <div className="regua-coordenadas-inferior">
          {colunas.map(letra => (
            <span key={`letra-${letra}`} className="caractere-coordenada-moldura">{letra}</span>
          ))}
        </div>

      </div>
    </div>
  );
}

export default TabuleiroDemonstracao;