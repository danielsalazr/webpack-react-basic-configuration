import React from 'react'
import misionImg from '@icons/brigadas.jpg'
import visionImg from '@icons/examen.jpg'

function MisionVision() {
  return (
    <div className='misionVision'>

        <div className="misionVision__container">
            <div className="misionVision__container--mision">
                <img src={misionImg} alt="" />
                <h3>Mision</h3>
                Bienestar Óptica tiene como fin ser un aliado estratégico para las empresas, fondo de
                empleados o cooperativas en el acompañamiento continuo a través de brigadas de
                salud, revisión periódica, seguimiento y orientación y de igual forma poder brindarles
                beneficios a los colaboradores. A través de nuestra calidad humana y personal
                calificado contribuimos en el bienestar de los colaboradores y sus familias.

            </div>
            <div className="misionVision__container--vision">
            <img src={visionImg} alt="" />
                <h3>Vision</h3>
                Ser reconocidos a nivel empresarial en el valle del cauca, por nuestra calidad de
                servicio, compromiso, y alto nivel de satisfacción de nuestros pacientes. Incrementar
                nuestra cobertura a nivel nacional para el 2025.
            </div>
        </div>
      
    </div>
  )
}

export default MisionVision
