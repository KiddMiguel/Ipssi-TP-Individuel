import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Register() {
    


  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
      <Row>
        <Col md={12}>
          <div className="shadow p-4 rounded bg-white">
            <h3 className="text-center mb-4">Register</h3>
            <Form>
              {/* First Name */}
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your first name" 
                  className="p-3" 
                  style={{ borderRadius: '10px' }} 
                />
              </Form.Group>

              {/* Last Name */}
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your last name" 
                  className="p-3" 
                  style={{ borderRadius: '10px' }} 
                />
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  className="p-3" 
                  style={{ borderRadius: '10px' }} 
                />
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Create a password" 
                  className="p-3" 
                  style={{ borderRadius: '10px' }} 
                />
              </Form.Group>

              {/* Phone Number */}
              <Form.Group className="mb-3" controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  className="p-3" 
                  style={{ borderRadius: '10px' }} 
                />
              </Form.Group>

              {/* Status */}
              <Form.Group className="mb-3" controlId="formStatus">
                <Form.Label>Status</Form.Label>
                <Form.Select 
                  className="p-3" 
                  style={{ borderRadius: '10px' }}
                  defaultValue="active"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="banned">Banned</option>
                </Form.Select>
              </Form.Group>

              {/* Submit Button */}
              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 p-2" 
                style={{ borderRadius: '10px' }}
              >
                Register
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
