import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container className='border-top w-50'>
        <Row>
          <Col className="text-center py-3">Copyright &copy;Big Store</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
