import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoteItem } from "../components/StoreItem";
export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row sm={1} xs={1} md={2} lg={3} xl={4} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoteItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
