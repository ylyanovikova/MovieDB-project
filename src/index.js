import React from 'react';
import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const MyContext = createContext(null);
const style = "light";

root.render(
  <MyContext.Provider value={style}>
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  </MyContext.Provider>
);

