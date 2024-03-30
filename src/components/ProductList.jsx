import React from 'react';
import { Container, Row, Col, Card, Button, Nav, Navbar } from 'react-bootstrap';
import './ProductList.css';
import product1 from '../Assets/Portable Laptop Table.webp';
import product2 from '../Assets/console-table.webp';
import product3 from '../Assets/dinning-table.webp';

const products = [
  {
    id: 1,
    name: 'Portable Laptop Table',
    image: product1,
    price: '₹699',
    description: 'You will find a laptop table exceptionally helpful if you tend to bring your work home or have to be on your laptop for extended hours. This particular contraption helps you work when you are seated on the bed or the sofa table exceptionally helpful if you tend to bring your work home. ',
  },
  {
    id: 2,
    name: 'THE ATTIC Steel Console Table',
    image: product2,
    price: '₹13,497',
    description: 'Our parent company The Kraftorium has been manufacturing and exporting Furniture since 1995. We are highly committed to deliver Quality product in the stipulated time. We specialize in wood procurement and each product goes through a rigorous four step quality inspection before it is finally packed to reach our valued customers.',
  },
  {
    id: 3,
    name: '6 Seater Dining Set',
    image: product3,
    price: '₹31,802',
    description: 'Vintage style or contemporary style furniture can make your living room look royal. This dining table with chairs is made from sheesham wood and has a contemporary style. In this table, you can lay down the tastiest dishes and make an aura of aroma and elegance on this dining table.',
  },
];

const ProductList = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">FurnitureLand</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#product">Product</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-3">
        <Row xs={1} md={2} lg={3} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <Card className={`h-100 ${product.id === 1 ? 'first-card' : ''}`}>
                <div className="d-flex justify-content-center align-items-center">
                  <Card.Img variant="top" src={product.image} className="card-img-top img-fluid" />
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <div className="mt-auto">
                    <Button variant="success" className="me-2">Add to Cart</Button>
                    <Button variant="warning">Buy Now</Button>
                  </div>
                </Card.Body>
                <Card.Footer className="text-muted font-weight-bold">{product.price}</Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
     
      <footer className="footer mt-auto py-3 bg-dark text-white">
        <div className="container text-center">
          <span>&copy; 2024 FurnitureLand. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default ProductList;
