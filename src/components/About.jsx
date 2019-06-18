import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/machupichu.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/logo.jpg" className="about-profile-pic" rounded />
            <h3>Acerca de Nosotros</h3>
           <p>Perú es un país de Sudamérica que abarca una sección del bosque del Amazonas y Machu Picchu, una antigua ciudad inca en las alturas de los Andes. La región en torno a Machu Picchu, incluido el Valle Sagrado, el Camino del Inca y la ciudad colonial de Cuzco, es rica en sitios arqueológicos. En la costa árida del Pacífico de Perú se encuentra Lima, la capital, con un centro colonial
              preservado e importantes colecciones de arte precolombino.Esta pagina web es una descripcion y un modo de vista 
              sobre los temas que se realiza en la aplicacion movil.</p>
          <p>Esta Pagina Web y Aplicación móvil para concientizar a todos los peruaos y informarle mas sobre su historia.</p>
          <p>Conocer la historia de nuestro país y a cada uno de sus personajes, debería ser casi una obligación para todos los peruanos. Sin embargo, muchos de nuestros compatriotas no están enterados de los aspectos básicos de la cultura general.

Es por ello, que un equipo periodístico de Combinado salió a las calles de Lima a comprobar si los transeúntes conocen a determinados personajes históricos, como los que aparecen en los billetes de 10, 20, 50, 100 y 200 soles.

La mayoría de ellos falló al ser consultados en una encuesta al paso.</p>
          </Col>
        </Grid>
      </div>
    )
  }
}
