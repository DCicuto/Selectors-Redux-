//Configuração do store do redux - - Assistir live Redux code quinta do Diego

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart'; // Ajuste o nome para o seu arquivo cart.js


const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
})

export default store;