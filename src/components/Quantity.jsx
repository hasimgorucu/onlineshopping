import { useDispatch } from 'react-redux';
import './Quantity.css'
import { addToCard, deleteFromCart } from '../sliceses/productSlice';
function Quantity(properties) {
const product = properties.item;
const cartSelfValue = product.cartSelfValue;
const dispatch = useDispatch();


  return (
    <div className='cartQuantity-container'>
        <a href="#"><span className="decrement" onClick={()=>dispatch(deleteFromCart(product))} >-</span></a>
        <span className="quantity">{cartSelfValue}</span>
        <a href="#"><span className="increment" onClick={()=>dispatch(addToCard(product))}>+</span></a>
       
    </div>
  )
}

export default Quantity
