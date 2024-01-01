import { useState } from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {



  const [coupan, setCoupan] = useState(0);
  const { cart } = useSelector((state) => (state.cart));

  const subtotal = cart.reduce((acc, item) => item.price + acc, 0);



  

  return (
    <>
     
        <div className="flex flex-col gap-4 px-4 py-2">
          <h2>Order summary</h2>
          <button className="bg-black text-white px-4 py-2" onClick={() => opendialog("open")}>Apply Coupan</button>
          <div className="flex justify-between">
            <span>Sub total</span>
            <span>{`$${subtotal}`}</span>
          </div>
          <div className="flex justify-between">
            <span>Total</span>
            <span>{`$${subtotal}`}</span>
          </div>
          <button className="px-4 py-2 bg-black text-white ">Checkout</button>
        </div>
       
       
     
    </>
  )

}


export default OrderSummary;

