import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/StoreItem';
import storeItems from '../data/items.json';

const Store = () => {
  return (
    <>
      <div className='mb-2 fs-5'>Apple Store</div>
      <Row
        md={2}
        xs={1}
        lg={4}
        className="g-3"
      >
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
