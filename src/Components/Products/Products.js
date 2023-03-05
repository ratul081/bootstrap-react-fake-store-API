import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = ({products}) => {
  
  return (
    <div>
      <Container fluid>
        <h3 className='mx-3'>Products For You!</h3>
        <div className='m-5'>
          <Row xs={1} md={2} lg={3} className="g-4">
            {
              products.map(product => <Product
                key={product.id}
                product={product}
              ></Product>)
            }
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Products;