# 🦉 Toca da Coruja - Documento de Engenharia & Lore v2.0

Este documento é o Guia Supremo de Desenvolvimento do projeto. Ele une a arquitetura técnica de software com o progresso atual do projeto, o enredo lúdico (Lore), o planejamento de monetização B2B para escolas e as regras específicas dos minijogos.

---

## 🏗️ 1. Decisão de Arquitetura e Estratégia de Infraestrutura

*   **Front-end (Ativo):** React (Gerenciado via Vite) hospedado publicamente no GitHub Pages.
*   **Back-end & Autenticação (Segurança Escolar):** API de Autenticação Simples hospedada em servidor leve com banco de dados relacional (PostgreSQL ou SQLite). Esta camada substitui o Google Planilhas para evitar travamentos de requisições simultâneas (*Rate Limiting*) e vulnerabilidades de segurança (exposição de chaves de API no front-end).
*   **Mecanismo de Análise Técnica:** Engine Stockfish.js rodando 100% no lado do cliente (Client-side Web Workers) para validação matemática de erros e acertos táticos.
*   **Camada de Interpretação Pedagógica:** API de IA (OpenAI/Anthropic) consumida de forma segura via backend para traduzir relatórios brutos do Stockfish em balões de diálogos lúdicos da professora Coruja Kaburé-Iwa.
*   **Persistência de Dados Local:** LocalStorage & IndexedDB para salvamento imediato do estado do jogo (Modo Offline), enviando os pacotes para a API em segundo plano.

---

## 💰 2. Modelo de Negócios & Monetização (B2B Escolas Particulares)

*   **Controle de Acesso Automatizado (Sistema de Tokens):** Para a venda do serviço para escolas particulares sem anúncios (Modelo Premium), o sistema gerará lotes de códigos alfanuméricos únicos (ex: `TOCA-ESC1-XYZ9`). 
*   **Validação Segura:** No primeiro acesso do aluno, o aplicativo valida o token junto à API backend, marcando o dispositivo local como "Premium" de forma automática e segura, sem risco de manipulação externa.
*   **Roadmap de Distribuição Mobile (Futuro):** 
    *   **Abordagem Inicial (PWA):** Configuração de `manifest.json` e Service Workers para permitir a instalação direta do site no celular do aluno (ícone na tela e tela cheia), com custo zero de publicação.
    *   **Abordagem Comercial (Capacitor.js):** Envelopamento da pasta compilada (`dist`) em uma WebView nativa para geração do arquivo `.aab` e publicação oficial na Google Play Store (Taxa única de U$ 25 e cumprimento do requisito de 12 testadores por 14 dias).

---

## 📐 3. Diretrizes Estritas de UI/UX e Código Clean

*   **Orientação Exclusiva:** O Web App é travado e projetado exclusivamente para o modo Landscape (Horizontal), tanto para Desktop quanto para Mobile.
*   **Bloqueio de Rolagem (Zero Overflow):** É terminantemente proibido o surgimento de barras de rolagem laterais ou verticais na interface do jogo.
*   **Dimensionamento:** O aplicativo deve rodar em uma proporção de tela cheia fixa (Viewport de 100vh e 100vw, com trava proporcional interna de 16:9 através de `.home-container`).
*   **Segregação de Responsabilidades:** Arquivos JSX devem conter apenas estruturas lógicas e marcação operacional. Toda e qualquer estilização visual deve residir em arquivos .css isolados, proibindo o uso de propriedades de estilo *inline*.

---

## 📂 4. Estrutura de Diretórios Atualizada

```plaintext
Toca-da-Coruja-Raiz/
├── toca-backend/         # Estrutura API de Autenticação, Banco de Dados e Vouchers (Python)
├── toca-frontend/        # Ecossistema React (Vite - ATIVO)
│   ├── node_modules/     # Dependências do JavaScript
│   ├── public/           # Ativos estáticos globais (Imagens da Home, Hero e Cenários)
│   ├── src/              # Componentes e lógica do React
│   │   ├── components/   # Componentes Modulares (HomeScreen, PrologoScreen, etc.)
│   │   ├── styles/       # Camada de estilização isolada (Home.css, Prologo.css)
│   │   ├── App.jsx       # Componente estrutural limpo e máquina de estados (Maestro)
│   │   └── main.jsx      # Inicializador do ecossistema
│   └── index.html        # Ponto de ancoragem do Front-end
🧭 5. Diário de Bordo do Projeto (Status de Desenvolvimento)
✅ Concluído (O que já fizemos):
Setup estrutural e limpeza do ambiente React via Vite.

Desenvolvimento do Orquestrador Principal (App.jsx Versão 2.0) atuando como a Máquina de Estados de navegação global.

Isolamento do CSS da Home com controle responsivo dos gatilhos invisíveis em cima da arte de fundo.

Configuração do pipeline de deploy contínuo via gh-pages enviando a pasta dist com sucesso para a nuvem.

⏳ Em Andamento (O que estamos fazendo AGORA):
Expansão e detalhamento das etapas da caminhada do Prólogo baseadas na literatura pedagógica de xadrez adaptada para a narrativa lúdica do jogo.

🗺️ 6. Especificação Detalhada do Prólogo: A Estrada Rumo ao Castelo
O Prólogo deixa de ser uma tela estática e passa a ser uma caminhada interativa dividida em 9 passos (botões). Cada passo representa uma parada na Estrada Quadriculada guiada pela Coruja Kaburé-Iwa, adaptando os conceitos técnicos do livro Xadrez para Todos.

🔘 Botão 1: Apresentação do Jogo & Lore do Reino
Base Teórica: Definição do xadrez, número de casas (64), alternância de lances, início pelas brancas, os 6 tipos de peças (16 para cada jogador) e o objetivo final (Xeque-mate). Menção à história de 1.500 anos do jogo.

Adaptação Lúdica (Lore): Kaburé-Iwa explica que o Reino do Tabuleiro é governado por dois reis vizinhos (o Rei das Terras Claras e o Rei das Terras Escuras) que vivem em uma disputa pacífica há 1.500 anos. Eles dividem um campo mágico de 64 territórios e seguem uma regra ancestral rígida: nenhum exército joga duas vezes seguidas, e as forças Claras sempre dão o passo inicial. O jogador assume o papel de um jovem conselheiro tático convocado para restabelecer a ordem usando as 16 forças de um exército.

🔘 Botão 2: O Campo de Jogo (O Tabuleiro)
Base Teórica: Tabuleiro quadrado constituído de 64 casas (32 claras e 32 escuras). Regra fundamental: a casa no canto inferior direito de cada jogador deve ser obrigatoriamente de cor branca. Diferenciação com o jogo de Damas (que não utiliza as 64 casas ativamente).

Crítica Metodológica Incorporada: O livro compara xadrez e damas com vôlei e basquete (mesmo espaço, regras diferentes). Corrigimos essa analogia: o xadrez e a dama assemelham-se a Futsal e Handebol. Eles compartilham o mesmo espaço físico básico (o quadrado do tabuleiro), porém o desenho de suas demarcações internas e o uso do espaço são completamente diferentes — o xadrez exige o domínio absoluto de todas as 64 casas, enquanto a dama restringe o movimento.

Adaptação Lúdica: Kaburé-Iwa mostra a terra quadriculada e ensina o "Truque da Mão Direita": a casa do canto direito de onde você senta sempre deve brilhar na cor clara, ou a magia do campo é quebrada.

🔘 Botão 3: As Três Linhas (Coluna, Fileira e Diagonal)
Base Teórica: As três linhas retas do tabuleiro são os caminhos de movimento das peças.

Coluna (Vertical): Conjunto de 8 casas na vertical. O tabuleiro tem 8 colunas.

Fileira (Horizontal): Conjunto de 8 casas na horizontal. O tabuleiro tem 8 fileiras.

Diagonal (Inclinada): Duas ou mais casas dispostas em linha inclinada (como degraus de uma escada). Existem 26 diagonais no total (13 brancas e 13 pretas).

Adaptação Lúdica: Kaburé-Iwa conjura linhas de luz na estrada. As Colunas são as "Torres Verticais de Vento", as Fileiras são as "Linhas Horizontais de Terra" e as Diagonais são os "Degraus Invisíveis de Escada" que exigem caminhar sem nunca trocar a cor do chão sob os pés.

🔘 Botão 4: A Linguagem Secreta (Nome das Colunas e Fileiras)
Base Teórica: Identificação das linhas do tabuleiro. As colunas são batizadas com letras minúsculas de a até h. Os andares (fileiras) são numerados de 1 a 8.

Adaptação Lúdica: A Coruja revela que para enviar comandos no Reino, o jogador precisa falar a língua dos escribas. Cada estrada vertical ganhou a assinatura de uma letra sagrada de 'a' a 'h', e cada andar horizontal recebeu um número de poder de 1 a 8.

🔘 Botão 5: Desafio Tático - Canhões do Reino (Treino de Verticais e Horizontais)
Mecânica do Mini-Jogo (Sorteador de Exercícios): Um gerador aleatório solicita que o jogador interaja com uma linha específica (Ex: "Ative a Coluna d!" ou "Defenda a Fileira 5!").

Ideia de Gameplay Retida: Um sistema baseado em canhões. Para fixar as Verticais (Colunas), alvos passam voando pelo céu e a criança precisa disparar canhões verticais posicionados na base. Para fixar as Horizontais (Fileiras), o sentido do jogo muda/inverte temporariamente, exigindo disparos ou varreduras horizontais na fileira sorteada, garantindo que o conceito de linha seja memorizado através da ação sem descaracterizar o avanço pela estrada.

🔘 Botão 6: O Nome das Casas (O Plano Cartesiano)
Base Teórica: Coordenadas das 64 casas. Cada casa possui um nome único universal formado pela junção da letra de sua coluna com o número de sua fileira (Ex: a1, c4, e7, h3).

Adaptação Lúdica: Kaburé-Iwa ensina a cruzar os caminhos para descobrir a identidade secreta de cada pedaço de chão. Se você pisar na Coluna e e subir até a Fileira 4, você estará pisando na energia sagrada da casa e4.

🔘 Botão 7: Mini-Jogo - O Jardim de Flores das Coordenadas
Mecânica do Mini-Jogo: O tabuleiro se transforma em um belo jardim medieval onde cada casa é um canteiro/vaso de flores vazio. O jogo roda um sorteador automático de coordenadas (Ex: "Plante uma rosa em g6!").

Gamificação & Pontuação: O jogador deve clicar na casa exata para plantar a flor no canteiro certo. Possui um cronômetro (timer) integrado e um contador de pontuação. Acertos consecutivos geram multiplicadores de bônus de pontos (Combo Streak), incentivando a velocidade e o reconhecimento instantâneo dos planos cartesianos.

🔘 Botão 8: Desafio Tático - Pintura de Diagonais
Mecânica do Exercício: O sistema roda dois tipos de sorteios aleatórios para consolidar o conceito de inclinação:

Sorteio Centralizado: Escolhe uma das 36 casas internas (fora da borda extrema) e pede para a criança pintar uma diagonal completa que passe por aquela casa de referência.

Sorteio de Borda: Escolhe uma das 28 casas posicionadas estritamente nas bordas do tabuleiro e exige que a criança trace a diagonal que nasce a partir daquele ponto de partida específico.

🔘 Botão 9: O Coração do Campo (Pequeno Centro, Grande Centro e Borda)
Base Teórica: Divisão estratégica do tabuleiro em Pequeno Centro (d4, e4, d5, e5), Grande Centro (o anel ao redor do centro) e a Borda (periferia do tabuleiro).

Mecânica do Mini-Jogo (Futebol de Tabuleiro): É posicionado um gol acima das casas d8 e e8. Uma bola de futebol surge aleatoriamente em diferentes posições do tabuleiro. O jogador deve arrastar a bola (swipe) em direção ao gol. Através da experiência prática de física do minijogo, a criança notará de forma intuitiva que chutar a bola a partir das casas do Pequeno e Grande Centro dá um ângulo muito mais fácil e direto para o gol, enquanto tentar finalizar estando preso nas casas da Borda reduz drasticamente as chances de sucesso.

🛠. 7. Comandos Úteis de Inicialização
Bash
# Iniciar o ambiente local de desenvolvimento do React
cd toca-frontend
npm run dev

# Compilar e publicar a versão de produção atualizada no GitHub Pages
cd toca-frontend
npm run deploy