import { useState } from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {



  
  const { cart } = useSelector((state) => (state.cart));

  const subtotal = cart.reduce((acc, item) => item.price + acc, 0);



  

  return (
    <>
     
        <div className="flex flex-col gap-4 px-4 py-2 sm:static  fixed bottom-0 left-0 right-0">
          <h2 className="font-semibold">Order summary</h2>
          <div className="flex justify-between w-full gap-4">
            <span>Sub total</span>
            <span>{`Rs.${subtotal}`}</span>
          </div>
          <div className="flex justify-between w-full gap-4">
            <span>Total</span>
            <span>{`Rs.${subtotal}`}</span>
          </div>
          <button className="px-4 py-2 bg-[var(--border)] text-[var(--neutral)] ">Checkout</button>
        </div>
       
       
     
    </>
  )

}


export default OrderSummary;

