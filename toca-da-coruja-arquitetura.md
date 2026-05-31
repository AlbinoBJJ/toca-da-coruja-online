Perfeito, Lucas! Vamos atualizar o nosso arquivo .md de especificação para registrar essa guinada fantástica na arquitetura (Custo Zero, Google Planilhas, Stockfish local e interpretação pedagógica com IA). Como você pediu, nada de cuspir código de implementação ainda. Vamos primeiro atualizar a nossa Bíblia do projeto e, logo em seguida, dar o pontapé inicial na nossa máquina de estados do React.

Aqui está o seu arquivo de documentação totalmente atualizado e revisado. Copie e salve por cima do seu toca-da-coruja-arquitetura.md:

🦉 Toca da Coruja - Documento de Engenharia & Lore v1.5
Este documento é o Guia Supremo de Desenvolvimento. Ele une a arquitetura técnica do software com o progresso atual do projeto, o enredo lúdico (Lore) e as regras específicas dos minijogos.

🏗️ 1. Decisão de Arquitetura (Estratégia Serverless / Custo Zero)
Front-end: React (Gerenciado via Vite) hospedado publicamente no GitHub Pages.

Back-end & Banco de Dados: Google Planilhas (Google Sheets) via Google Apps Script (Ambiente JavaScript seguro e isolado, operando como API REST sem custos de servidor).

Mecanismo de Análise Técnica: Engine Stockfish.js rodando 100% no lado do cliente (Client-side Web Workers) para validação matemática de erros e acertos táticos sem onerar processamento em nuvem.

Camada de Interpretação Pedagógica: API de IA (OpenAI/Anthropic) consumida de forma segura via Apps Script para traduzir relatórios brutos do Stockfish em balões de diálogos lúdicos da professora Coruja.

Persistência de Dados Local: LocalStorage & IndexedDB para salvamento imediato do estado do jogo (Modo Offline), evitando travamentos de interface e despachando os pacotes para a planilha em segundo plano.

📐 2. Diretrizes Estritas de UI/UX e Código Clean
Orientação Exclusiva: O Web App é travado e projetado exclusivamente para o modo Landscape (Horizontal), tanto para Desktop quanto para Mobile.

Bloqueio de Rolagem (Zero Overflow): É terminantemente proibido o surgimento de barras de rolagem laterais ou verticais na interface do jogo.

Dimensionamento: O aplicativo deve rodar em uma proporção de tela cheia fixa (Viewport de 100vh e 100vw, com trava proporcional interna de 16:9).

Segregação de Responsabilidades: Arquivos JSX devem conter apenas estruturas lógicas e marcação operacional. Toda e qualquer estilização visual deve residir em arquivos .css isolados dentro do diretório de estilos, proibindo o uso de propriedades de estilo inline no React.

Segurança e Privacidade Infantil: É terminantemente proibido coletar ou armazenar nomes reais, e-mails ou dados sensíveis de identificação. O sistema operará estritamente através de apelidos lúdicos e chaves codificadas (id_usuario).

📂 3. Estrutura de Diretórios Atualizada
Plaintext
Toca-da-Coruja-Raiz/
├── toca-backend/         # Ecossistema Django (API - Pausado/Substituído pelo Sheets)
├── toca-frontend/        # Ecossistema React (Vite - ATIVO)
│   ├── node_modules/     # Dependências do JavaScript
│   ├── public/           # Ativos estáticos globais (Imagens da Home aqui)
│   ├── src/              # Componentes e lógica do React
│   │   ├── styles/       # Camada de estilização isolada (Home.css)
│   │   ├── App.jsx       # Componente estrutural limpo e máquina de estados
│   │   └── main.jsx      # Inicializador do ecossistema
│   └── index.html        # Ponto de ancoragem do Front-end
├── assets/               # Pasta de build de produção do GH Pages (Raiz)
├── index.html            # Arquivo de produção do GH Pages (Raiz)
└── home-hero.png         # Imagem de produção do GH Pages (Raiz)
🧭 4. Diário de Bordo do Projeto (Status de Desenvolvimento)
✅ Concluído (O que já fizemos):
Setup e Limpeza de Ambiente: Estruturação isolada do ecossistema React via Vite.

Refatoração para Clean Architecture: Isolamento da física e do mapeamento de cliques do CSS (Home.css) da lógica do componente React (App.jsx), com reset estrutural que sanou as micro-barras de rolagem.

Deploy Contínuo: Configuração do repositório remoto no GitHub e publicação bem-sucedida do MVP na nuvem através do GitHub Pages.

Pivotação de Infraestrutura (Custo R$ 0): Substituição do servidor tradicional (Django/PostgreSQL) pelo modelo Serverless usando Google Planilhas (via Apps Script) integrado ao processamento local do Stockfish.js.

⏳ Em Andamento (O que estamos fazendo AGORA):
Gerenciador de Telas: Implementação do controle de estados no App.jsx para transição reativa (Home -> Prólogo).

📋 Próximos Passos (O que faremos a seguir):
Criar a interface e a estrutura de vetores de diálogos para a apresentação narrativa da Coruja Kaburé-Iwa (Prólogo).

Mapear o script de integração com as 4 abas do Google Planilhas (cadastro_usuarios, progresso_fases, historico_atividades, historico_partidas_ia).

Desenhar a estrada em zigue-zague com exercícios de pintura tática e o mini jogo de coordenadas.

Acoplar o motor do Stockfish.js no motor visual do Sumô dos Reis.

📊 5. Modelagem do Banco de Dados Relacional (Google Sheets)
Aba 1: cadastro_usuarios -> Armazena id_usuario, apelido lúdico, data_cadastro e dispositivo.

Aba 2: progresso_fases -> Estado persistente do "Save Game" (id_usuario, fase_atual, passo_atual, ultima_atualizacao).

Aba 3: historico_atividades -> Registro geral de métricas de quebra-cabeças (categoria, id_activity, resultado, pontuacao, tempo_segundos, erros_cometidos).

Aba 4: historico_partidas_ia -> O diário tático do jogador (id_partida, historico_lances em PGN, analise_stockfish bruta e o feedback_pedagogico_ia).

📚 6. Enredo Lúdico (Lore) e Fluxo Pedagógico
🎬 Prólogo: O Chamado na Estrada
A jornada começa com a apresentação da nossa professora, a coruja Kaburé-Iwa. Ela surge para o jogador com uma missão urgente: ir até o castelo do rei para descobrir o que aconteceu por lá. No caminho, ela introduz o xadrez utilizando como base metodológica a literatura de Xadrez para Todos (James Mann de Toledo e Juliana Kyoko Kamada).

🗺️ Fase 1: A Estrada Quadriculada (Alfabetização)
Ao entrar na estrada que leva ao castelo, o jogador depara-se com um caminho completamente quadriculado. Kaburé-Iwa apresenta formalmente o tabuleiro de xadrez.

Exercícios Didáticos: Reconhecimento espacial através de desafios práticos identificando Colunas (verticais), Fileiras (horizontais), Diagonais e nomes das casas.

Treino de Coordenadas: Um minijogo de velocidade baseado no sistema de coordenadas do Lichess.org ("Caça às Casas") para fixar os endereços das 64 casas.

🎮 7. Especificações de Minijogos Customizados (Motores Próprios + Engine)
🐻 Minijogo 1: O Sumô dos Reis (Oposição e Movimento do Rei)
Mecânica: Ambos os lados controlam apenas a peça do Rei. O objetivo é ganhar a Oposição (forçar o recuo do adversário).

Integração Híbrida: O Stockfish analisa a precisão posicional do Rei do jogador a cada lance. Se houver desvio tático, a linha de erro é capturada e enviada para a IA traduzir pedagogicamente na voz da Coruja.

🛠️ 8. Comandos Úteis de Inicialização
Iniciar o Front-end React (Terminal 1)
Bash
cd toca-frontend
npm run dev