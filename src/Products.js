import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';


import './Style.css'
import { incriment, decriment, remove } from './redux/Actions/Action';
import { useState } from 'react';
function Products({site}) {
  const [show, setShow] = useState(false)
  const count = useSelector(state => state.CountReducer);
  const dispatch = useDispatch();
const handleClick = (e) => { 
  e.preventDefault();
  dispatch(incriment())
  setShow(true)
 }
 const handleRemove = (e) => {
  e.preventDefault();
  dispatch(remove())
  setShow(false)
   
 }
 
  return (
    <div className="product-card">
    <Card className='card-item'>
      <Card.Img variant="top" src={site.image} />
      <Card.Body>
        <Card.Title>{site.name}</Card.Title>
        <Card.Text>
    {site.price}
        </Card.Text>
        {!show ?(<Button variant="primary" onClick={handleClick }>+ Add card </Button>):(
          <>
        <div className="button-container" > 
        
          <Button  onClick={() => dispatch(decriment())} >-</Button>
          {count} in cart
          <Button onClick={() => dispatch(incriment())}>+</Button>
          <div>   </div> 
        </div>
         <Button variant="danger" onClick={handleRemove} >remove</Button> </>
        )}

      </Card.Body>
    </Card>
    </div>
  );
}

export default Products;
// className='d-flex align-items-center justify-content-center' style={{gap:'.5rem'}}>