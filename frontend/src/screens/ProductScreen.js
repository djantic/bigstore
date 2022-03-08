import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Row,
  Col,
  Card,
  Image,
  ListGroup,
  Button,
  ListGroupItem,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  return (
    <>
      <Link className="btn btn-primary my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h2>{product.name}</h2>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price: ${product.price}</ListGroupItem>
            <ListGroupItem>Description:{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card variant='flush'>
            <ListGroup>
              <ListGroupItem>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                        <strong>${product.price}</strong>
                    </Col>
                  </Row>
              </ListGroupItem>
              <ListGroupItem>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                        {product.countInStock > 0 ? 'In Stock': 'Out Of Stock' }
                    </Col>
                  </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button className='btn btn-outline-primary w-100' variant='light' type='button' disabled={product.countInStock === 0 }> 
                      Add To Cart
                  </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
          </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
