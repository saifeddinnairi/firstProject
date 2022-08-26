import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector} from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ProductsByCat = () => {
    const {cat} = useParams()
    const{item}=useSelector(state=>state.site)
    const productListByCat = item.filter(el=>el.name.toLowerCase().includes(cat.toLowerCase()))

  return (
    <div className="Product">
      {productListByCat?.map(prd=>(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={prd.image} />
        <Card.Body>
          <Card.Title>{prd.name}
          </Card.Title>
          <Card.Text>
            {prd.price}
          </Card.Text>
          <Button variant="primary">+ Add to Cart</Button>
        </Card.Body>
      </Card>
   
      ))}
    </div>
  )
}

export default ProductsByCat


    