# Validador de Cartão Bancário - Algoritmo de Luhn

## Índice

- [1. Introdução](#1-introdução)
- [2. Ideação do projeto](#2-ideação-do-projeto)
- [3. Implementações futuras](#3-implementações-futuras)
- [4. Metodologia Ágil](#5-metodologia-agil)
- [5. Design do projeto](#6-design-do-projeto)
- [6. Capturas de tela](#7-capturas-de-tela)
- [7. Tecnologias utilizadas](#8-tecnologias-utilizadas)
- [8. Como usar](#9-como-usar)

---

## 1. Introdução

### Você já teve curiosidade para saber como são feitas as validações de números de cartões bancários, quando você está fazendo uma compra online?

O Algoritmo de Luhn também conhecido como "módulo de 10", recebeu esse nome em homenagem ao seu criador, o cientista da IBM Hans Peter Luhn. O algoritmo consiste em uma fórmula simples de soma, de verificação, usada para validar uma variedade de números de identificação, como cartões bancários, números de IMEI, números de identificações de diversos países, como também números de códigos de pesquisa que aparecem nos recibos do Mc Donald's, Taco Bell. Fonte: [Wikipedia](https://en.wikipedia.org/wiki/Luhn_algorithm)

A validação do Algoritmo de Luhn é obtida por meio de alguns passos:

- 1° passo: consiste em multiplicar por dois o valor dos dígitos pares, mas no sentido da direita para a esquerda.
- 2° passo: caso o número for maior ou igual a dois, deve-se somar os dígitos e adiciona-los ao resultado.
- 3° passo: somar todos os dígitos.
- 4° passo: se o total da soma for um número multiplo de 10, o número do cartão bancário é válido, caso contrário, inválido.

## 2. Ideação do projeto

Como a validação de cartões bancários era uma novidade para mim, a minha ideia foi desenvolver um site com proposta didática para mostrar mais detalhadamente como é feita a validação dos números de cartões bancários, e disponibilizar um campo na página para que o usuário possa testar, e verificar se os números que eles estão utilizando são válidos ou inválidos.

### Observação: os dados não são armazenados em nenhum servidor.

## 3. Implementações futuras

Adicionar uma função para identificação da bandeira do cartão bancário. Mostrar na tela o passo a passo da validação com os números utilizados pelo usuário.

## 4. Metodologia Ágil

Utilizei o Trello para me organizar durante as Sprints do projeto. Com a criação do Backlog com as histórias de usuário, e a divisão das atividade serem desenvolvidas, geradas a partir do Backlog.
Assim como as cerimonias da metodologia ágil: Daily, Sprint Planning, Sprint Review, Sprint Retrospective, e Sprint Checkout.

## 5. Design do projeto

A prototipaçãodo projeto foi feita utizando a ferramenta de design [Figma](https://www.figma.com/file/lH08cMN6RkghJwQ0AHW6AE/Card-Validation?node-id=0%3A1), para me organizar melhor quanto ao posicionamento dos elementos na página, paleta de cores e criação da logomarca.

<img src="src\assets\figma.png" alt="design figma"/>

## 6. Capturas de tela

<div>
  <img src="src\assets\screenshot1.png" alt="captura de tela da aplicação"/><br/>
  <br/>
  <img src="src\assets\screenshot2.png" alt="captura de tela da aplicação"/><br/>
  <br/>
  <img src="src\assets\screenshot3.png" alt="captura de tela da aplicação"/><br/>
  <br/>
  <img src="src\assets\screenshot4.png" alt="captura de tela da aplicação"/>
</div>

## 7. Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript Vanilla
- Node.js
- Git e GitHub
- Figma
- Trello

## 8. Como usar

Você precisará usar o Node.js

Clonar o projeto

` $ git clone https://github.com/Lud-ic/SAP007-card-validation.git`

Instalar as dependências do projeto

` $ npm install or yarn install`

Iniciar a aplicação

` $ npm start or yarn start`

Realizar os testes unitários

` $ npm test or yarn test`

---

Criado por [Ludmila Magalhães](https://github.com/Lud-ic)
