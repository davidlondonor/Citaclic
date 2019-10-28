import React from 'react';
import Menu from './home/menu';
import Footer from './home/footer';
import Home from './home/Home';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Menu />
        <Home />
        <Footer />  
     </div>
  );
}

export default App;
