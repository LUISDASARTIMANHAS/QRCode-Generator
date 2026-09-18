# QR Code Generator

Gerador de QR Code moderno, leve e fácil de usar, construído com HTML, CSS e JavaScript puro. O objetivo do projeto é transformar textos, links e URLs em códigos QR de forma rápida, sem dependências pesadas nem estrutura complexa de build.

## Visão geral

Este projeto foi pensado para ser simples de usar e visualmente mais profissional, mantendo uma experiência clara em qualquer ambiente local. Ele é ideal para quem precisa criar QR Codes de forma ágil para:

- sites e landing pages
- URLs de redes sociais
- textos curtos e informações rápidas
- compartilhamento de contatos e links
- protótipos e testes internos

## Funcionalidades

- geração de QR Code a partir de texto ou URL
- ajuste de tamanho do código
- seleção do nível de correção de erro
- download do resultado em PNG
- interface responsiva e moderna
- uso simples sem dependências de instalação complexas

## Stack

- HTML5
- CSS3
- JavaScript
- Biblioteca qrcode.js via CDN

## Como executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/QRCode-Generator.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd QRCode-Generator
   ```

3. Abra o arquivo `index.html` diretamente no navegador, ou inicie um servidor local:

   ```bash
   python -m http.server 8000
   ```

4. Acesse no navegador:

   ```bash
   http://localhost:8000
   ```

## Estrutura do projeto

```text
QRCode-Generator/
├── index.html
├── LICENSE
├── README.md
├── src/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── index.js
```

## Como usar

1. Digite um texto, URL ou link no campo principal.
2. Ajuste o tamanho e o nível de correção conforme a necessidade.
3. Clique em "Gerar QR Code".
4. Se quiser, baixe o resultado em PNG.

## Personalização

A estrutura foi organizada para facilitar ajustes visuais e funcionais, como:

- esquema de cores e branding
- espaçamento e layout
- tamanho padrão do QR Code
- textos de status e mensagens de feedback

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.

## Status

Projeto em evolução contínua, com foco em melhorar a experiência visual, a usabilidade e a apresentação profissional da ferramenta.
