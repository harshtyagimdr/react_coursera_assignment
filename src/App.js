import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './component/MenuComponent';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
      <div className="container">
            <NavbarBrand href="/">Harsh tyagi</NavbarBrand>
          </div>
      </Navbar>
      <Menu></Menu>
    </div>
  );
}

export default App;
