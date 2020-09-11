import React from 'react';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardTitle} from 'reactstrap';

const ProductComponent = ({product: {image, title, price}, onClick}) => {
  return (
    <Card>
      <CardImg top width="100%" src={image} alt="Card image cap"/>
      <CardBody className="d-flex flex-column">
        <CardTitle>{title}</CardTitle>
        <CardSubtitle className="text-right">{price}</CardSubtitle>
        <Button color="primary" className="align-self-end" onClick={onClick}>Add to Cart</Button>
      </CardBody>
    </Card>
  );
};
export default ProductComponent;
