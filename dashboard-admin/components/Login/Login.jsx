import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Login() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
      <Row>
        <Col md={12}>
          <div className="shadow p-4 rounded bg-white">
            <h3 className="text-center mb-4">Connexion</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adresse Email</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  className="p-3" 
                  style={{ borderRadius: '10px' }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Mot de Passe</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Enter your password" 
                  className="p-3" 
                  style={{ borderRadius: '10px' }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 p-2" 
                style={{ borderRadius: '10px' }}
              >
                Connexion
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
