🦉 Toca da Coruja - Documento de Engenharia & Lore v1.4
Este documento é o Guia Supremo de Desenvolvimento. Ele une a arquitetura técnica do software com o progresso atual do projeto, o enredo lúdico (Lore) e as regras específicas dos minijogos.

🏗️ 1. Decisão de Arquitetura
Front-end: React (Gerenciado via Vite)

Back-end: Django REST Framework (API) - Adiado para a Fase de Sincronização

Banco de Dados: PostgreSQL (Nuvem) / LocalStorage & IndexedDB (Modo Offline)

📐 2. Diretrizes Estritas de UI/UX e Código Clean
Orientação Exclusiva: O Web App é travado e projetado exclusivamente para o modo Landscape (Horizontal), tanto para Desktop quanto para Mobile.

Bloqueio de Rolagem (Zero Overflow): É terminantemente proibido o surgimento de barras de rolagem laterais ou verticais na interface do jogo.

Dimensionamento: O aplicativo deve rodar em uma proporção de tela cheia fixa (Viewport de 100vh e 100vw, com trava proporcional interna de 16:9).

Segregação de Responsabilidades: Arquivos JSX devem conter apenas estruturas lógicas e marcação operacional. Toda e qualquer estilização visual deve residir em arquivos .css isolados dentro do diretório de estilos, proibindo o uso de propriedades de estilo inline no React.

📂 3. Estrutura de Diretórios Atualizada
Toca-da-Coruja-Raiz/
├── toca-backend/         # Ecossistema Django (API - Pausado)
│   ├── venv/             # Ambiente Virtual Python
│   ├── setup/            # Configurações centrais do Django
│   └── manage.py         # Utilitário do Django
└── toca-frontend/        # Ecossistema React (Vite - ATIVO)
├── node_modules/     # Dependências do JavaScript
├── public/           # Ativos estáticos globais (Imagens da Home aqui)
├── src/              # Componentes e lógica do React
│   ├── styles/       # Camada de estilização isolada (Home.css)
│   ├── App.jsx       # Componente estrutural limpo
│   └── main.jsx      # Inicializador do ecossistema
└── index.html        # Ponto de ancoragem do Front-end

🧭 4. Diário de Bordo do Projeto (Status de Desenvolvimento)
✅ Concluído (O que já fizemos):
Definição de Escopo: Migração estratégica de JS Vanilla para React para suportar a complexidade do estado dos minijogos.

Setup do Ambiente: Criação das pastas isoladas do projeto, inicialização do ecossistema React via Vite e criação do ambiente virtual Python com Django instalado.

Refatoração para Clean Architecture: Criação da pasta de estilos separada, isolando a física e mapeamento de cliques do CSS (Home.css) da lógica do componente React (App.jsx), eliminando as micro-barras de rolagem residuais do navegador através de reset estrutural global.

⏳ Em Andamento (O que estamos fazendo AGORA):
Definição da Máquina de Estados: Preparação da lógica reativa do React para permitir a transição suave de telas sem reload do navegador.

📋 Próximos Passos (O que faremos a seguir):
Implementar o gerenciador de estado de telas (useState) para transição entre Home e Prólogo.

Criar a interface de caixa de diálogos para a apresentação narrativa da Coruja Kaburé-Iwa.

Desenhar a trilha/estrada em zigue-zague com exercícios de pintura tática (linhas, colunas, diagonais) e o mini jogo de coordenadas no estilo Lichess.

Implementar o motor visual do primeiro mini jogo customizado (Sumô dos Reis).

📚 5. Enredo Lúdico (Lore) e Fluxo Pedagógico
🎬 Prólogo: O Chamado na Estrada
A jornada começa com a apresentação da nossa professora, a coruja Kaburé-Iwa. Ela surge para o jogador com uma missão urgente: ir até o castelo do rei para descobrir o que aconteceu por lá. No caminho, ela introduz o xadrez utilizando como base metodológica a literatura de Xadrez para Todos (James Mann de Toledo e Juliana Kyoko Kamada).

🗺️ Fase 1: A Estrada Quadriculada (Alfabetização)
Ao entrar na estrada que leva ao castelo, o jogador depara-se com um caminho completamente quadriculado. Kaburé-Iwa apresenta formalmente o tabuleiro de xadrez.

Exercícios Didáticos: Reconhecimento espacial através de desafios práticos identificando Colunas (verticais), Fileiras (horizontais), Diagonais e nomes das casas.

Treino de Coordenadas: Um minijogo de velocidade baseado no sistema de coordenadas do Lichess.org ("Caça às Casas") para fixar os endereços das 64 casas.

🎮 6. Especificações de Minijogos Customizados (Motores Próprios)
Estes jogos possuem regras que fogem do xadrez tradicional, logo, suas engines de validação de jogadas serão programadas de forma customizada em componentes do React, sem depender de engines externas como o Stockfish.

🐻 Minijogo 1: O Sumô dos Reis (Oposição e Movimento do Rei)
Contexto: Ao chegar ao castelo, o jogador descobre que o Rei disappeared e o local foi tomado por um Ogro Invasor. Para empurrá-lo de volta para a floresta, o jogador deve enfrentá-lo em um duelo de reis.

Mecânica de Aprendizado: Kaburé-Iwa ensina os movimentos básicos do Rei, a impossibilidade de um Rei encostar no outro (pois o Ogro atacará) e o conceito técnico de oposição.

Regras da Engine Customizada:

Ambos os lados controlam apenas a peça do Rei.

O objetivo é ganhar a Oposição (ficar posicionado diretamente em frente ao Rei do adversário com uma casa de distância, forçando-o a ceder espaço).

Toda vez que o jogador ganha a oposição, o Ogro se abala psicologicamente.

O abalo do Ogro aumenta drasticamente a probabilidade de a IA recuar em direção à borda do tabuleiro (a floresta).

Vitória do jogador ao empurrar o Ogro para fora dos limites do tabuleiro.

📋 Futuros Minijogos Planejados (Lógicas a detalhar):
Jogo de Marcação do Rei.

Jogo de Marcação do Rei com Tabuleiro Reduzido.

Jogo de Sentar no Trono.

🛠️ 7. Comandos Úteis de Inicialização (Arquivo de Consulta)
Iniciar o Front-end React (Terminal 1)
Bash
cd toca-frontend
npm run dev
Ativar o Back-end Django (Terminal 2)
Bash
cd toca-backend
.\venv\Scripts\activate
python manage.py runserver