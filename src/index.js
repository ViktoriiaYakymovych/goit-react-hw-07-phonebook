import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistior } from 'redux/store';
import { App } from 'components/App/App';
import GlobalStyle from 'components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistior}>
        <App />
        <GlobalStyle />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
