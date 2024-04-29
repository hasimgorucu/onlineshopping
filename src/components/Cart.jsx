import { useSelector } from "react-redux";
import "./Cart.css";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.product);
  return (
    <div className="cart-container">
      <h1>ALIŞVERİŞ SEPETİ</h1>
      <div className="cartProduct-container">
        {cart.cartTotalValue === 0 ? (
          <div className="empty-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="#444444"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>
            <h3 className="empty">Sepetiniz Boş</h3>
            <Link to={"/"}>
              <span>Alışverişe Başla</span>
            </Link>
          </div>
        ) : (
          <div className="allCart-container">
            <div className="titles">
              <div className="productTitle">
                <h3>ÜRÜN</h3>
              </div>
              <div className="productDetails">
                <h3>FİYAT</h3>
                <h3>ADET</h3>
                <h3>TOPLAM</h3>
              </div>
            </div>
            {cart.cartList.map((item, index) => {
              return <CartProduct key={index} cart={item} />;
            })}
            <div className="subtotal-container">
              <div className="subtotal-details">
                <div className="subtotal">
                  <h3 className="subtotalText">Toplam</h3>
                  <span className="price">${cart.cartTotalAmount}</span>
                </div>
                <button>Ödeme Yap</button>
                <Link to={"/"}>
                  <div className="continue">
                  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-left-short"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                        />
                      </svg>
                    <span>
                      
                      Alışverişe Devam Et
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
