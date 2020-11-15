import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormText from './components/FormText';
import FormatedText from './components/FormatedText';

function App() {
  return (
    <Provider store={store}>
      <Container className="mt-5">
        <Row>
          <Col>
            <FormText />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <FormatedText />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
