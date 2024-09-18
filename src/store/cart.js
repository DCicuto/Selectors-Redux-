//Aqui vamos criar o nosso primeiro reducer, que seria o reducer de carrinho de compras.

//Criamos o initial state que é o estado que vamos inicializar o nosso reducer, nele vamos guardar duas irmformações: Os itens di carrinho e o valor de frete. 

//Criamos o reducer que é uma função que recebe dois parâmetros, o estado atual e a ação que foi disparada.

const INITIAL_STATE = {
    items: [],
    shippingValue: 0,
};

export default function cart(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return{
                ...state,
                items: [...state.items, {price: Math.floor(Math.random() * 400) + 1}],
            };
        case 'SET_SHIPPING':
            return{
                ...state,
                shippingValue: Math.floor(Math.random() * 100) + 1,
            };
        default:
            return state;
        }       
     
}