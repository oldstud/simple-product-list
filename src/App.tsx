import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux';
import ProductScreen from './screens/ProductScreen';

const App = () => {
  return (
    <Provider store={store}>
      <ProductScreen />
    </Provider>
  );
};

export default App;
