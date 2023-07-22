import React from 'react';
import image1 from '@images/content/hawaii.jpg';
import image2 from '@images/content/hawaii2.jpg';
import image3 from '@images/content/hawaii3.jpeg';


import InfoCenteredSection from './InfoCenteredSection';
import Carrousel from './Carrousel';

function MainPage() {
  return (
    <>
      <main id="main">
        <Carrousel />
      </main>
      <InfoCenteredSection />

      <section className='info_enterprise'>
        <p className='h1'>Dosificando.com</p>
            
            <h3>Aqui debe ir un carrousel</h3>
            <br />
            <p  style={{
                fontSize : "1.5rem",
                // width: "60%",
                padding : "0 16px",
                textAlign: "justify",
              }}
            >
              Somos una empresa dedicada a la fabricacion de maquinaria y automatizacion industrial a gran escala,
              nuestro principal enfoque es permitir a las personas observar y entender su procesos por medio de los datos,
              recopilandolos y llevandolos a usted a travez de internet o de su red empresarial, para que esto le permita a
              usted, optimizar sus recursos, mejorar sus procesos e identificar las siuaciones que ocurren en su empresa 
              que ocasionan que retrasos en su produccion y no son identificables a simple vista, nuestras maquinas le 
              permitiran a usted, llevar su empresa a un siguiente nivel, conocer cuales son sus tiempos reales de operacion 
              y cerrar contratos con mas confianza sin que comprometa su patrimonio y la integridad e su empresa arriesgandose 
              a ser penalizado por multas, y costeando mejor sus operaciones, lo que le ayudara a costear mejor su producto 
              y ofrecer precios competitivos ante el mercado.
            </p>
            <p
            className='h1'
              style={{
                fontSize : "1.8rem",
                // width: "60%",
                textAlign: "justify",
              }}
            >
              Si esta intrezado en conocernos mejor, por favor dirijase a la seccion de <a href="">proyectos</a> en el panel lateal izquierdo,
              aqui encontrara algunos videos de nuestras maquinas y como operan nuestros procesos. <br /><br />
              Si lo desea <a href="">agende una cita</a> uno de nuestros asesores e comunicara con usted para escuchar su necesidad y 
              orientarlo a entender como le pueden ayudar nuestras implementaciones.
            </p>
      </section>
        
    </>
  )
}

export default MainPage
