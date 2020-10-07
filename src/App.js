import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import GlobalStyle from "./components/GlobalStyles";
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';

function App() {

  return (
      <HashRouter>
          <GlobalStyle />
          <Navigation />
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
      </HashRouter>
  );
}

export default App;
