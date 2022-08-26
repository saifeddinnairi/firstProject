import React from "react";
import { useSelector} from 'react-redux';
import Products from './Products'
import "./Style.css"


const Product=() => {
    const{item}=useSelector(state=>state.site)
    return(
        <div className="Product" >
            {item?.map(site=>(<Products key={site.id} site={site} />))}
        </div>
    );
};
export default Product;