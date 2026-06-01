/* ==========================================================================
   Toca da Coruja - Script de Diálogos (Roteiro Narrativo)
   Versão: 2.0
   ========================================================================== */

export const SCRIPT_PROLOGO = [
  "Olá, jovem criatura! Que bom que você aceitou o meu chamado. Eu sou a professora Kaburé-Iwa.",
  "Algo muito estranho aconteceu no Castelo do Rei... O grande castelo foi invadido e o nosso Rei desapareceu!",
  "Para chegarmos até lá e resolver esse misterio, precisamos atravessar a longa Estrada Quadriculada.",
  "Mas atenção! Essa estrada esconde segredos táticos e perigos mágicos que só o Xadrez pode resolver.",
  "Você está pronto para aprender a dominar o tabuleiro e me ajudar nessa missão?"
];

export const SCRIPT_BOTAO_1 = [
  "Há cerca de 1.500 anos, em uma era repleta de magia, dois reinos vizinhos decidiram selar a paz de uma forma genial.",
  "O Rei das Terras Claras e o Rei das Terras Escuras criaram um campo de desafios sagrado chamado... Tabuleiro!",
  "Esse campo é um quadrado mágico perfeito, dividido em exatamente 64 casinhas místicas.",
  "Para resolver suas disputas sem nenhuma violência, eles criaram uma regra ancestral que nunca, jamais pode ser quebrada...",
  "O mesmo exército nunca pode jogar duas vezes seguidas! Os lances são feitos estritamente de forma alternada.",
  "E por uma antiga tradição de respeito, as forças Brancas sempre dão o primeiro passo, iniciando a partida!",
  "Cada Rei comanda um exército de 16 guerreiros mágicos, divididos em seis tipos de peças diferentes.",
  "Você liderará o Rei, a Dama protetora, dois sábios Bispos, dois velozes Cavalos, duas imponentes Torres e oito valentes Peões!",
  "Cada um desses guerreiros tem uma maneira única e secreta de andar e capturar pelo campo.",
  "Juntos, eles devem cruzar o tabuleiro para atingir o objetivo supremo de proteção do Reino: o Xeque-mate!",
  "Agora que você conhece a lenda dos 1.500 anos do Xadrez, estamos prontos para pisar no campo de jogo!"
];


export const SCRIPT_BOTAO_2 = [
  "Chegamos à nossa primeira parada! Contemple o chão sob os seus pés: este é o glorioso Tabuleiro de Xadrez!",
  "Ele é um grande quadrado composto por exatamente 64 casinhas mágicas, sendo 32 Claras e 32 Escuras.",
  "Muitas pessoas olham para ele e dizem: 'Olha, é igualzinho ao tabuleiro do Jogo de Damas!'... É... na aparência até podemos dizer que sim, mas não se deixe enganar!",
  "Dizem por aí que eles são como o Vôlei e o Basquete, que usam o mesmo ginásio para jogos diferentes.",
  "Pense bem: usam o espaço, mas os desenhos no chão, as regras e os limites são completamente diferentes!",
  "E é isso o que acontece: o nosso tabuleiro serve para o Xadrez e para o jogo de Damas...",
  "Mas no jogo de Damas, os guerreiros só andam pelas casas escuras, deixando metade do campo vazia e intocada.",
  "Já no Xadrez, a batalha é total! Nós batalhamos e caminhamos ativamente por todas as 64 casas do tabuleiro, sem desperdiçar nenhuma casinha!",
  "E agora, o segredo mais importante de todos para a magia do campo funcionar: o 'Truque da Mão Direita'!",
  "Sempre, antes de começar uma partida, olhe para o seu canto direito inferior. A casa da ponta direita DEVE ser de cor Clara!",
  "Memorizou bem o nosso campo de batalha? Ótimo, pois as linhas da estrada começam a se mover agora!"
];



export const SCRIPT_BOTAO_3 = [
  // 0, 1
  "Muito bem! Agora que conhecemos o formato do nosso campo de batalha, precisamos descobrir os caminhos que iremos percorrer dentro do tabuleiro!",
  "As peças de Xadrez não andam de qualquer jeito. Elas viajam por três linhas retas: as Colunas, as Fileiras e as Diagonais!",
  
  // 2 (Apresenta Coluna: Pinta a d e fica!)
  "A primeira delas é a Coluna! Ela é como uma 'Linha Vertical no Tabuleiro', que corre de baixo para cima e de cima para baixo.",
  
  // 3 a 10 (Conta as 8 colunas de forma gradual a cada clique)
  "O tabuleiro possui exatamente 8 colunas verticais. Vamos contar a Coluna 1...",
  "Coluna 2...",
  "Coluna 3...",
  "Coluna 4...",
  "Coluna 5...",
  "Coluna 6...",
  "Coluna 7...",
  "Cada coluna é um conjunto de oito casinhas em pé! E aqui está a oitava Coluna!",
  
  // 11 (Apresenta Fileira: Pinta a fileira 4 e fica!)
  "O segundo caminho é a Fileira! Ela é como uma 'Linha Horizontal no Tabuleiro', que corre de um lado para o outro.",
  
  // 12 a 19 (Conta as 8 fileiras de forma gradual a cada clique)
  "O nosso campo tem 8 fileiras deitadas. Vamos contar a Fileira 1...",
  "Fileira 2...",
  "Fileira 3...",
  "Fileira 4...",
  "Fileira 5...",
  "Fileira 6...",
  "Fileira 7...",
  "Cada fileira também é formada por um conjunto de oito casinhas juntas lado a lado! E aqui está a Fileira 8!",
  
  // 20 (Apresenta Diagonal)
  "E o terceiro caminho é a Diagonal! Elas são como os 'Degraus de uma Escada', dispostas em uma linha inclinada.",
  
  // 21 a 33 (Pinta as 13 diagonais Claras, uma a uma)
  "Repare em um detalhe mágico: se uma escada diagonal começa em uma casa clara, ela só passa por casas claras! Vamos ver as 13 Diagonais Claras, começando com as menores...",
  "Segunda diagonal clara...",
  "Terceira...",
  "Quarta... A Grande Diagonal Clara que corta o tabuleiro!",
  "Quinta...",
  "Sexta...",
  "Sétima...",
  "Oitava...",
  "Nona...",
  "Décima...",
  "Décima primeira...",
  "Décima segunda...",
  "E a décima terceira diagonal clara da outra ponta!",
  
  // 34 a 46 (Pinta as 13 diagonais Escuras, uma a uma)
  "E se começa em uma casa escura, só passa por casas escuras! Nunca misturam as cores sob os pés. Contemplaremos as 13 Diagonais Escuras. Primeira...",
  "Segunda diagonal escura...",
  "Terceira...",
  "Quarta... A Grande Diagonal Escura que corta o tabuleiro!",
  "Quinta...",
  "Sexta...",
  "Sétima...",
  "Oitava...",
  "Nona...",
  "Décima...",
  "Décima primeira...",
  "Décima segunda...",
  "E a décima terceira diagonal escura final!",
  
  // 47, 48
  "O tabuleiro possui 26 diagonais no total: são 13 escadas claras e 13 escadas escuras cortando o campo!",
  "Impressionante, não é? Agora você já sabe ler as linhas de força do Reino! Vamos voltar para a estrada!"
];


export const SCRIPT_BOTAO_4 = [
  "Incrível! Você aprendeu os caminhos das colunas, das fileiras e das diagonais. Mas como os guerreiros sabem exatamente para onde ir?",
  "Eles usam a Linguagem Secreta do Reino! Cada uma das 64 casinhas tem um nome único e próprio, como se fosse o endereço da casa deles.",
  "Para ler esse endereço, nós usamos uma regra universal muito simples: primeiro olhamos para a letra da Coluna, e depois para o número da Fileira!",
  "Repare na base do tabuleiro: as colunas verticais são batizadas com letras minúsculas, indo da letra 'a' até a letra 'h'.",
  "E nas laterais, as fileiras deitadas ganham números, subindo do andar '1' até o andar mais alto, o '8'.",
  "Vamos fazer um teste juntos! Se juntarmos a Coluna 'e' com a Fileira '4', o ponto de encontro será a casinha... e4! Viu que fácil?",
  "A Dama e o Rei adoram ficar no centro do mundo! As casas do meio do campo se chamam d4, d5, e4 e e5.",
  "Decorar a linguagem secreta transforma você em um verdadeiro general estrategista! Pronto para decifrar os mistérios da escrita?"
];