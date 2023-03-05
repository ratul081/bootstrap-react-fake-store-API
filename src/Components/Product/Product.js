import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { StarIcon } from '@heroicons/react/24/solid'
import { Button } from 'react-bootstrap';

const Product = ({ product }) => {
  const { image,title,description, price , rating  } = product
  console.log(product);
  return (
    <Col>
      <Card style={{height:'850px'}}>
        <div className='d-flex justify-content-center my-4'>
        <Card.Img variant="top"  style={{height:'300px',width:'300px'}} src={image} />
        </div>
        <Card.Body>
          <Card.Title style={{height:'90px'}} >{title}</Card.Title>
          <Card.Text style={{height:'187px', overflow:'hidden'}}>
            {description}
          </Card.Text>
          <p>Price: <span>${price}</span></p>
          <div>
            <StarIcon style={{ height: '30px' }} className="text-warning" />
            <StarIcon style={{ height: '30px' }} className="text-warning" />
            <StarIcon style={{ height: '30px' }} className="text-warning" />
            <StarIcon style={{ height: '30px' }} className="text-warning" />
            <StarIcon style={{ height: '30px' }} className="text-warning" /> <span>({rating.count})</span>
          </div>         
          <Button variant="secondary" className='mt-3'>Add to cart</Button>         
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;