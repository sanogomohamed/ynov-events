import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row >
            <Col>
              <HeaderComponent/>
            </Col>
          </Row>
          <p></p>
          <Row >
            <Col >
              <FooterComponent />
            </Col>
          </Row>
       </Container>
     
     
      </div>
    );
  }
}

export default App;
