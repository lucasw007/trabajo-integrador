import React from 'react';
import '../styles/pages/AboutUs.css'; 
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-section">
        <h2>¿De qué trata el proyecto?</h2>
        <p>
          Este proyecto es una aplicación de e-commerce construida con React. Su objetivo principal es simular un sitio de compras en línea, mostrando un catálogo de productos, permitiendo la búsqueda y el registro de usuarios.
        </p>
      </section>

      <section className="about-section">
        <h2>¿A quién está dirigido?</h2>
        <p>
          La aplicación está dirigida a usuarios que desean una experiencia de compra sencilla y eficiente. También sirve como un portafolio técnico para demostrar el uso de diversas tecnologías modernas del desarrollo web.
        </p>
      </section>

      <section className="about-section">
        <h2>Tecnologías y enfoques utilizados</h2>
        <p>
          Para construir esta aplicación se utilizaron las siguientes tecnologías y enfoques:
        </p>
        <ul>
          <li>React: Como librería principal para la construcción de la interfaz de usuario.</li>
          <li>React Router DOM: Para la gestión de la navegación entre páginas.</li>
          <li>Context API: Para manejar el estado global de la aplicación (autenticación de usuario).</li>
          <li>FakeStoreAPI: Como backend simulado para obtener los datos de productos y usuarios.</li>
          <li>CSS: Para el diseño y la aplicación de responsive design con media queries.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;