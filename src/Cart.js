//Aqui vamos criar a pagina do carrinho de compras, que vai ser um componente funcional que vai renderizar a lista de itens do carrinho e o valor do frete.
//Onde vamos importar: O react, o connect do react-redux e o useSelector do react-redux.

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';


const Cart = ({cart, total, addProduct, setShipping}) => (
    <div>
        <h1>Carrinho de compras</h1>

        <p>
            Itens:<strong>{cart.items.length}</strong>
        </p>

        <p>
            Frete:<strong>{cart.shippingValue}</strong>
        </p>

        <p>
            Total:<strong>{total}</strong>
        </p>
           
        <button onClick={addProduct}>adicionar Produto</button>
        <button onClick={setShipping}>Calcular frete</button>
        
    </div>
);

//E aqui temos o nosso Selector que é uma função que vai pegar o estado e retornar o valor total do carrinho.
//Quando criamos sectors, eles não são memorizados, então vamos usar a função createSelector do reselect para memorizar o valor do total do carrinho.


// Selector para obter os itens do carrinho
const selectCartItems = state => state.cart.items;

// Selector memoizado para calcular o total do carrinho
const calculaTotal = createSelector(
    [selectCartItems, state => state.cart.shippingValue], // Inclui o shippingValue p/ atualizar o valor total quando o frete é alterado
    (items, shippingValue) => {
        console.log('CALCULOU');
        const itemTotal = items.reduce((subtotal, item) => subtotal + item.price, 0);
        return itemTotal + shippingValue; // Retorna o total do carrinho com o frete
    }
);


const mapStateToProps = state => ({
    cart: state.cart,
    total: calculaTotal(state)
});


const mapDispatchToProps = dispatch => ({
   addProduct: () => dispatch({type: 'ADD_ITEM'}),
   setShipping: () => dispatch({type: 'SET_SHIPPING'})

});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Cart);
