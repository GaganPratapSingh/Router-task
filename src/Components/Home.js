import {useNavigate} from 'react-router-dom'
function Home(){
    const navigate=useNavigate()
    return(
        <>
        <div> this is Home page</div>
        <button onClick={()=>navigate('order-summary')}>Place-Order</button> 
        </>
             
    )
}
export default Home;