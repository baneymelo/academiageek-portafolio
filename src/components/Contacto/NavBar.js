import React, { Link, Header } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'
import './NavBar.css'

function App() {
  return (
    <>
    <div className="header">
      <div className="sections">
        <h1 className="title">LOGO</h1>
        <a className="a-navbar"  href="#hola"> Hola</a>
        <a className="a-navbar" href="#proyectos">Proyectos</a>
        <a className="a-navbar" href="#testimonios">Testimonios</a>
        <a className="a-navbar" href="#contacto">Contacto</a>
      </div>
      <Button>Descargar currículum</Button>
    </div>
    </>
  );
}

export default App;

function Button(props) {
  const { children } = props;

  return (
    <div className="button">
      <div className="button-i30116965 nunito-bold-white-16px">{children}</div>
    </div>
  );
}
