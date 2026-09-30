# Instituto Raízes do Amanhã

## Descrição

Site institucional da ONG fictícia Instituto Raízes do Amanhã, construído como uma Single Page Application (SPA). A aplicação apresenta a história e os objetivos da instituição, permite o cadastro de voluntários com validação de formulário em tempo real, e exibe os projetos sociais e as campanhas de doação mantidos pela ONG.

## Tecnologias Utilizadas

- **HTML5** — estrutura semântica da página única (`index.html`).
- **CSS3** — layout responsivo construído com CSS Grid (estrutura macro da página) e Flexbox (alinhamento de componentes), incluindo 5 breakpoints mobile-first e um menu hambúrguer/dropdown feito apenas em CSS.
- **JavaScript (ES6 Modules)** — roteamento client-side por hash, geração dinâmica de conteúdo via `innerHTML`, validação de formulário com RegEx e manipulação condicional do DOM, e persistência de dados com `localStorage`.
- **Day.js** (via CDN) — cálculo automático de idade a partir da data de nascimento informada no cadastro.

## Pré-requisitos

Como o projeto utiliza ES6 Modules (`import`/`export`), ele **não funciona abrindo o `index.html` diretamente pelo navegador** (duplo clique), por causa da restrição de CORS ao protocolo `file://`. É necessário servir os arquivos por um servidor local, como o Live Server do VS Code.

## Instalação e Execução

```bash
git clone https://github.com/marcosrr223-boop/Projeto-A1.git
```

1. Abra a pasta clonada no VS Code.
2. Instale a extensão "Live Server" (de Ritwick Dey), caso ainda não tenha.
3. Clique com o botão direito no arquivo `index.html` e escolha **"Open with Live Server"**.
4. O navegador abrirá automaticamente em um endereço como `http://127.0.0.1:5500`, e é por esse endereço que o projeto deve ser acessado e testado.

## Estrutura do Projeto

```
├── index.html          # Página única da SPA (shell: header, nav, main#app, footer)
├── css/
│   └── styles.css      # Grid, Flexbox, menu responsivo, estados de formulário e breakpoints
├── js/
│   ├── script.js        # Ponto de entrada: importa os módulos e liga os eventos (submit, input, click)
│   ├── roteador.js       # Rotas da SPA e renderização do conteúdo de cada página
│   ├── validacao.js      # Regras de validação dos campos do formulário (RegEx e checkValidity)
│   ├── armazenamento.js  # Persistência do rascunho de cadastro no localStorage
│   ├── idade.js          # Cálculo automático de idade com a biblioteca Day.js
│   └── projetos.js       # Geração dos cards de projeto a partir de um array de dados
└── img/                 # Imagens utilizadas no site
```

## Deploy

O deploy é feito através da **Vercel**, conectada diretamente ao repositório no GitHub. A plataforma detecta automaticamente que o projeto usa Vite (pelo `package.json`), executa `npm run build` a cada push e publica o conteúdo da pasta `dist/`. A branch `main` está configurada como branch de produção, seguindo o fluxo do GitFlow adotado no projeto: cada Pull Request aberto (a partir de uma `feature/` para `develop`, ou de `develop` para `main`) recebe automaticamente uma URL de preview própria, permitindo testar as mudanças antes de irem para produção.

## Contribuição

O repositório segue o fluxo de branches do **GitFlow**:

- `main` — contém apenas versões estáveis do projeto, recebendo merges de `develop` ou de `hotfix/`.
- `develop` — branch de desenvolvimento contínuo, onde as funcionalidades são integradas.
- `feature/` — uma branch por funcionalidade nova, criada a partir de `develop` e mesclada de volta a ela ao ser concluída.
- `hotfix/` — branch para correções urgentes, criada a partir de `main` e mesclada tanto em `main` quanto em `develop`.

## Versionamento

O projeto adota **versionamento semântico** (`MAJOR.MINOR.PATCH`) em conjunto com o padrão **Conventional Commits**, utilizando prefixos como `feat:` (nova funcionalidade), `fix:` (correção de bug), `refactor:` (reestruturação sem mudança de comportamento) e `chore:` (tarefas de manutenção) nas mensagens de commit e nas tags de release.

## Licença

Projeto acadêmico, desenvolvido para fins de estudo. Sem licença de uso comercial definida.
