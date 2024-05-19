import React from 'react';
import '../app/aboutMe.css';
import Navbar from './components/navbar';

const AboutMe = () => {
  return (
    <div className='navtop'>
      <Navbar />
      <div className="container">

        <div className="about-container"> {/* Adicionando a classe CSS para aplicar estilos */}
          <h1>Hi there, My name's Ylano 👋</h1>
          <p>
            I'm a enthusiastic backend developer, specialized in Python, constantly seeking to improve my technical skills. I am open to opportunities to make connections and build a network with professionals in the field, exchange knowledge and collaborate on innovative projects.
          </p>
          <h2>Technologies I use:</h2>
          <p>Python, SQL, Django</p>
          <h2>How I use Tasks?</h2>
          <p>To use task CRUD, you must start a local or remote database through railway and place the link in the .env file.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
