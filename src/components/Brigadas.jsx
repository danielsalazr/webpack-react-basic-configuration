import React from 'react'
import lentes from '@brigadas/lentes.jpg'
import atencion from '@brigadas/atencion.jpg'

function Brigadas() {
  return (
    <div className='Brigadas'>
        <div className='Brigadas__container'>
            <h1>Brigadas Empresariales</h1>

            <p>
            Nuestro objetivo principal es contribuir y acompañar en el bienestar visual de los colaboradores a través de la evaluación que nuestro profesional hace en las brigadas de apoyo empresarial. Aportando así al cumplimiento de las normas que requiere el programa en prevención visual empresarial (Resolución 111 de 2017)
            </p>

            <h3>Beneficios</h3>
            <ul>
                <li>Mediante el convenio empresarial el examen de optometría no tiene costo</li>
                <li>Traslado de optómetra y equipos al lugar acordado para el desarrollo de la brigada</li>
                <li>Variedad de monturas en diseños y materiales</li>
                <li>Gafas de seguridad industrial</li>
                <li>Manejamos convenio por descuento de nomina</li>
                <li>Precios especiales para el colaborador y cobertura a su núcleo familiar con iguales beneficios.</li>
                <li>Asesoramiento y acompañamiento en adaptación de lentes</li>
            </ul>

            <div className='Brigadas__images'>
                <figure><img src={lentes} alt="" /></figure>
                <figure><img src={atencion} alt="" /></figure>
            </div>
            
            <h3>Beneficios Colaboradores</h3>
            <ol className='Brigadas__beneficios--adicionales'>
                <li>Charlas de promoción y prevención si la empresa lo requiere, se coordinará una charla de máximo 20 minutos presencial, donde se dará a conocer cualquiera de los tres temas que actualmente tenemos incluidos
Este contenido también se puede impartir de forma virtual mediante videos pre grabados para poder que se pueda tener un mayor alcance de la información entre los colaboradores
<ol type='A'>
    <li>Enfermedades y Afecciones visuales</li>
    <li>Tipos de lentes y sus protecciones</li>
    <li>Pausas activas visuales y cuidado de lentes</li>
</ol>

</li>

                <li> Plan familia es poder brindarle al núcleo familiar del colaborador los mismos beneficios adquiridos por medio del convenio empresarial, donde se contactarían a nuestra línea para poder agendar la cita con el optómetra en nuestro punto físico y brindarle la asesoría que se requiera para la adquisición de gafas.</li>
            </ol>
        </div>    
    </div>
  )
}

export default Brigadas