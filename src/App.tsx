import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRouter from './views/Router';

import Navigation from './components/Navigation';
import Content from './components/Content';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes basename="/aqueduct">
            <Route
                path="*"
                element={(
                    <>
                        <Navigation />
                        <Content>
                            <AppRouter />
                        </Content>
                    </>
                )}
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
