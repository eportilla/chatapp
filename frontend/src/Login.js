import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Login.css';

function Login() {
    return (
        <div className="Login">
            <h1>Chatapp</h1>
            <Form>
                <Row className="align-items-center">
                    <Col xs="auto">
                        <Form.Control type="text" placeholder="Username" className="mb-2" />
                    </Col>
                    <Col xs="auto">
                        <Button variant="primary" type="submit" className="mb-2">
                            Login
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default Login;