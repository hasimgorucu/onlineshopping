import { useDispatch } from 'react-redux';
import './ProductCard.css'
import { addToCard } from '../sliceses/productSlice';


function ProductCard( properties ) {
    const {data} = properties;
    const dispatch = useDispatch();
    
    const handleAddProduct =()=>{
      dispatch(addToCard(data));
    }
  return (
    
      <div className="card">
      <h3 className="title">{data.name}</h3>
      <div className="img-container">
      <img src={data.image} alt={data.name} />
      </div>
      <div className="details-container">
        <span className="detail"> {data.desc} </span>
        <span className="price">${data.price}</span>
      </div>
      <button onClick={handleAddProduct}>Sepete Ekle</button>
      </div>
    
  );
}

export default ProductCard;
