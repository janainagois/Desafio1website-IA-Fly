# Mulheres em Tech - Desafio 1: Fly - Inteligência Artificial

Este repositório contém a solução para o Desafio 1 do programa **Mulheres em Tech - Fly - Inteligência Artificial**. O objetivo do desafio foi criar um site com três páginas utilizando linguagens modernas e tecnologias de IA.

## 🖥️ Estrutura do Site

O site é composto por três páginas principais:

### 1. **Página de Login (`index.html`)**
- Campos para **nome** e **senha**.
- Botão **"Entrar"**, que redireciona para a página de lista de produtos (apenas se os campos estiverem preenchidos).
- Link **"Esqueci minha senha"**, que redireciona para a página de redefinição de senha.

### 2. **Página de Lista de Produtos (`products.html`)**
- Exibe uma lista de 10 produtos eletrônicos.
- Cada produto contém:
  - ID
  - Nome
  - Preço unitário
  - Imagem

### 3. **Página de Redefinição de Senha (`forgot.html`)**
- Campo para informar o e-mail cadastrado.
- Botão **"Redefinir senha"**, que valida se o campo foi preenchido, exibe um pop-up confirmando o envio do link de redefinição e redireciona de volta para a página de login.

## 🛠️ Tecnologias Utilizadas

- **HTML**: Estrutura do site.
- **CSS**: Estilização do layout.
- **JavaScript**: Lógica de validação e interação.
- **Ferramentas de IA**: 
  - Criação das páginas, do logo e nome da loja (VoltEdge Electronics) usando IA generativa (Chat GPT).
  - Geração de imagens dos produtos utilizando Gemini e DALL-E.

## 💻 Prompts Utilizados

1. “Help create a website with three pages, using the Java Script scripting language. 
Page 1, Login: create a screen with fields for name and password, the “enter” button and the “forgot my password” link. The fields must be filled in when the enter button is clicked. 
Page 2, Product List: create a list of 10 computer products, such as printers, mice, computers, etc. The list must contain – product ID, product name, unit price, product photo. 
Page 3, Forgot my password: create a page with a field for the person to enter their registered email and a “reset password” button. When clicking the “reset password” button, validate that the email field is filled in. 
Display a pop-up saying that the reset link was sent to the address provided and redirect to the login page. Use the attachment logo in all pages the website.”

2. “Create the name and logo for this store that sells electronics”

3. “cre ate 10 image s sepa separa te: laptop, mouse, keyboard, monitor, pri nter,
headset, speaker, webcam, external drive, router router”

4. “create a webcam image. Using colors: Electric Blue, Metallic Silver/Grey, Black/White”

## 📂 Estrutura de Arquivos

```plaintext
website/
│
├── index.html       # Página de Login
├── products.html    # Página de Lista de Produtos
├── forgot.html      # Página de Redefinição de Senha
├── style.css        # Estilos CSS
├── script.js        # Lógica JavaScript
└── logo.webp        # Logo da loja (VoltEdge Electronics)
