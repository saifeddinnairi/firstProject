import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Style.css'
function Products({site}) {
  return (
    <div className="product-card">
    <Card className='card-item'>
      <Card.Img variant="top" src={site.image} />
      <Card.Body>
        <Card.Title>{site.name}</Card.Title>
        <Card.Text>
    {site.price}
        </Card.Text>
        <Button variant="primary">+ Add card </Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Products;
