import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}
export function StoteItem({ id, name, price, imgUrl }: StoreItemProps) {
  const quantity = 1;
  return (
    <>
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={imgUrl}
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
            <span className="fs-2">{name}</span>
            <span className="ms-2 text-muted">{formatCurrency(price)}</span>
          </Card.Title>
          <div className="mt-auto">
            {
              quantity===0 ? (<Button className="w-100">+ Add To Cart</Button>):(
              <div className="d-flex flex-column align-items-center" style={{gap:'0.5'}}>
                <div className="mb-1 d-flex align-items-center justify-content-center" style={{gap:'0.5'}}>
                  <Button>-</Button>
                  <div className="fs-3">{quantity}</div>
                  <Button>+</Button>
                </div>
                <Button className="w-50" style={{outline:'none'}}>Remove</Button>
              </div>
              )
            }
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
