import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes/index';
import GlobalStyles from './styles/global';
import Header from './components/Header';

import AppProvider from './Hooks/index';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <Routes />
      </AppProvider>

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
