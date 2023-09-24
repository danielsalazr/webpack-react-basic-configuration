import React from 'react'
import Carousel from './Carousel'
import lente1 from '@lentes/gafas-sol.jpg'
// import '@styles/global.scss'

function MainPage() {
  return (
    <div>
        {/* <Carousel /> */}

        <p className='h1'>Bienestar Optica</p>
        
        {/* <br /> */}
        <p  style={{
            fontSize : "1rem",
            // width: "60%",
            textAlign: "justify",
          }}
        >
        
          Somos una empresaa dedicada a la venta de Lentes para el cuidado de tu vision.
        </p>
        <hr />
        <section className='portafolioProductos'>
          
          <div className='portafolioProductos__container'>
          <div>
            <h4>Protafolio de productos</h4>
            <p>
            ¿Estás buscando una forma más elegante y funcional de ver el mundo que te rodea? En nuestra página web, te ofrecemos una amplia gama de lentes de alta calidad que se adaptan a tu estilo y necesidades visuales. Ya sea que busques gafas de sol para añadir un toque de glamour a tu look o lentes de prescripción para una visión perfecta, tenemos la solución perfecta para ti. Navega por nuestra selección de lentes de diseño, desde las últimas tendencias hasta los clásicos atemporales, y descubre cómo puedes mejorar tu visión con estilo. Entra en nuestra página web hoy mismo y experimenta la comodidad de comprar tus lentes en línea, con entrega rápida y garantía de satisfacción. ¡No comprometas tu estilo ni tu visión, elige la excelencia en lentes con nosotros!
            </p>
          </div>
          <figure>
            <img src={lente1} alt="" />
          </figure>
          

          </div>

        </section>

        <hr />
        <p
        className='h1'
          style={{
            fontSize : "1rem",
            // width: "60%",
            textAlign: "justify",
          }}
        >
          Si esta intrezado en conocernos mejor, por favor dirijase a la seccion de <a href="">proyectos</a> en el panel lateal izquierdo,
          aqui encontrara algunos videos de nuestras maquinas y como operan nuestros procesos. <br /><br />
          Si lo desea <a href="">agende una cita</a> uno de nuestros asesores e comunicara con usted para escuchar su necesidad y 
          orientarlo a entender como le pueden ayudar nuestras implementaciones.
        </p>
    </div>
  )
}

export default MainPage
