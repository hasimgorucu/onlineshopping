import Quantity from "./Quantity";

function CartProduct(properties) {
    const product = properties.cart;
  return (
    <div className="productItem-container">
      <div className="productName-container">
        <div className="product-img-container">
        <img src={product.image} alt=""/>
        </div>
        <div className="productDetails-container">
            <h3 className="cartProductName">{product.name}</h3>
            <h4 className="cartProductDetail">{product.desc}</h4>
            <p className="cartProductBrand">{product.brand}</p>
        </div>
      </div>
      <div className="productPrice-container">
        <h3 className="cartProductPrice">${product.price}</h3>
        <Quantity item={product}/>
        <h3 className="cartProductPrice">${product.price*product.cartSelfValue}</h3>

      </div>
    </div>
  )
}

export default CartProduct
