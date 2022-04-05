import { useNavigate } from "react-router-dom";

function OrderSummary({match}){
    const navigate =useNavigate()
    return(
        <>
        <div>{match.params.id}Order Confirmmed!</div>
        <button onClick={()=>navigate(-1)}>Go back</button>
        </>
    )
}
export default OrderSummary;