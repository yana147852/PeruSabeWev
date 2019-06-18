import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Bienvenidos a PeruSabe</h2>
          <p>Esta es una pagina web referenciando a la aplicacion web</p>
          <Link to="/about">
            <Button bsStyle="primary">aprend mas</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/1.jpg" circle className="profile-pic"/>
            <h3>La Bandera Nacional</h3>
            <p>La bandera del Perú es un paño rectangular formado por tres bandas verticales de igual ancho, de color rojo las laterales y de blanco la central. Es un símbolo patrio del Perú. Cuenta con variantes para usos distintos: el Estado peruano usa el Pabellón Nacional y la Bandera de Guerra, que incluyen el escudo nacional al centro con distintos adherentes; mientras que los civiles usan la Bandera Nacional, de forma simple, sin el escudo nacional.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/2.png" circle className="profile-pic"/>
            <h3>El Escudo Nacional</h3>
            <p>El escudo del Perú es el símbolo nacional heráldico oficial del Perú, el cual es empleado por el Estado peruano y las demás instituciones públicas del país. Su versión actual fue aprobada por el Congreso Constituyente en 1825 y ratificada el 31 de marzo de 1950.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/3.jpg" circle className="profile-pic"/>
            <h3>El Himno Nacional</h3>
            <p>En mayo de 2004, el Tribunal Constitucional emitió el fallo N° 0044-2004.AI/TC, en el que se precisa que la quinta estrofa del Himno Nacional del Perú es de autoría anónima; es decir, no le pertenece a José de la Torre Ugarte, pero que al ser insertada representa “la voluntad del pueblo en el Parlamento Nacional”.

“En las publicaciones en donde se transcriba la letra del Himno Nacional, debe expresamente señalarse que la estrofa adicionada al texto de don José de la Torre Ugarte es de autoría anónima”, se lee en el documento.</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
