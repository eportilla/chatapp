import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

import './App.css';

function App() {
  const [isLoading, setLoading] = useState(false);

  function handleSubmit(event) {    
    setLoading(true);

    event.preventDefault();

    //Faking API call here
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <div className="App App-content">
      <h1>Chatapp</h1>
      <Form onSubmit={handleSubmit}>
          <Row className="align-items-center">
              <Col xs="auto">
                  <Form.Control type="text" placeholder="Username" className="mb-2" />
              </Col>
              <Col xs="auto">
                  <Button disabled={isLoading} variant="primary" type="submit" className="mb-2">
                    {isLoading && (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        style={{ marginRight: "5px" }}
                      />
                    )}
                      Join Chat
                  </Button>
              </Col>
          </Row>
      </Form>
    </div>
  );
}

export default App;
