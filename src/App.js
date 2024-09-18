
//import React, {Component} from 'react';

//O Provider é um componente que vai ficar em volta de toda a aplicação e jogar o estado do redux para todos os componentes

import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Cart from './Cart';


const App = () => (
  <Provider store={store}>
    <Cart/>
  </Provider>
);

export default App;
