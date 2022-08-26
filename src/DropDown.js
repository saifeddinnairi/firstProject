import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';


function ButtonDarkExample() {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark" style={{backgroundColor:'#00000000',borderStyle:'none',}}>
          Products
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <NavLink to="/products/whey">whey protein</NavLink>
          <NavLink to="/products/mass">Hard Mass</NavLink>
          <NavLink to="/products/Creatine">Creatine</NavLink>

          
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default ButtonDarkExample;