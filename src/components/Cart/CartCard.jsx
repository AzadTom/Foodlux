import { Delete } from "@mui/icons-material";

const CartCard =({item,remove})=>{


     

    return(
        <>
        <tr className=" transition-all duration-200  border-t border-[var(--border)] text-[var(--primarytext)]">
       <td className=" px-4 py-2"><img src={item.img} alt="demo" className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] bg-cover bg-center object-cover"/></td>
       <td className=" px-4 py-2">{item.name}</td>
       <td className=" px-4 py-2 hidden sm:block">{`5🌟`}</td>
       <td className=" px-4 py-2">{`$${item.price}`}</td>
       <td className=" px-4 py-2 cursor-pointer" onClick={()=>remove()}><Delete/></td>
       </tr>
     </>
    )
}


export default CartCard;