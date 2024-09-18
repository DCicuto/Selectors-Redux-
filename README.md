# Selectors-Redux-
Selectors no Redux utilizando reselect 

# Carrinho de Compras com Redux

Este projeto é uma aplicação simples de um carrinho de compras utilizando React e Redux. O objetivo é demonstrar a implementação de um estado global com Redux, incluindo a adição de itens ao carrinho e o cálculo de frete.

## Tecnologias Utilizadas

- React
- Redux
- Redux Toolkit
- reselect

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

/src                     # Pasta principal do código fonte
│
├── /store              # Pasta que contém a configuração do Redux
│   ├── cart.js         # Reducer do carrinho de compras
│   └── index.js        # Configuração do Redux store
│
├── App.js              # Componente principal da aplicação
├── Cart.js             # Componente do carrinho de compras
└── index.js            # Ponto de entrada da aplicação



## Funcionalidades

- **Adicionar Produto**: Ao clicar no botão "Adicionar Produto", um item com um preço aleatório é adicionado ao carrinho.
- **Calcular Frete**: Ao clicar no botão "Calcular frete", um valor de frete aleatório é gerado.
- **Total**: O total do carrinho é calculado somando os preços dos itens e o valor do frete.

## Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>


