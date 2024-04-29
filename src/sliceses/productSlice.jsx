import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartTotalValue: localStorage.getItem("cartList") ? JSON.parse(localStorage.getItem("cartValue")) : 0,
  cartTotalAmount:localStorage.getItem("cartAmount") ? JSON.parse(localStorage.getItem("cartAmount")) : 0,
  cartList: localStorage.getItem("cartList") ? JSON.parse(localStorage.getItem("cartList")) : [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCard(state, action) {
      const itemIndex = state.cartList.findIndex((item) => {
        return item.id === action.payload.id;
      });
      state.cartTotalValue++;
      state.cartTotalAmount = state.cartTotalAmount + (action.payload.price);
      if (itemIndex >= 0) {
        state.cartList[itemIndex].cartSelfValue += 1;
        toast.info(
          `Sepetteki ${action.payload.name} sayısı ${state.cartList[itemIndex].cartSelfValue}`,
          {
            position: "top-right",
            autoClose: 800,
          }
        );
      } else {
        const tempProduct = { ...action.payload, cartSelfValue: 1 };
        state.cartList.push(tempProduct);
        toast.success("Ürün başarıyla eklendi", {
          position: "top-right",
          autoClose: 800,
        });
      }

      localStorage.setItem("cartList", JSON.stringify(state.cartList))
      localStorage.setItem("cartValue", JSON.stringify(state.cartTotalValue))
      localStorage.setItem("cartAmount", JSON.stringify(state.cartTotalAmount))
      
    },
    deleteFromCart(state,action){
      const itemIndex = state.cartList.findIndex((item) => {
        return item.id === action.payload.id;
      });
      state.cartTotalValue--;
      state.cartTotalAmount = state.cartTotalAmount - ((action.payload.price));
      if (state.cartList[itemIndex].cartSelfValue >1) {
        state.cartList[itemIndex].cartSelfValue -= 1;
        toast.info(
          `Sepetteki ${action.payload.name} sayısı ${state.cartList[itemIndex].cartSelfValue}`,
          {
            position: "top-right",
            autoClose: 1000,
          }
        );
      } else {
        state.cartList.splice(itemIndex,1)
        toast.success("Ürün sepetinizden kaldırıldı", {
          position: "top-right",
          autoClose: 1000,
        });
      }
      localStorage.setItem("cartList", JSON.stringify(state.cartList))
      localStorage.setItem("cartValue", JSON.stringify(state.cartTotalValue))
      localStorage.setItem("cartAmount", JSON.stringify(state.cartTotalAmount))
    }
  },
});

export const { addToCard , deleteFromCart } = productSlice.actions;
export default productSlice.reducer;
