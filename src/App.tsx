import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import CardPage from './pages/CardPage';
import HomePage from './pages/HomePage';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cards" element={<CardPage />} />
      </Routes>
    </Provider>
  );
}

export default App;
