import { useParams } from "react-router-dom"

export const ParamsEx=()=>{
    let {id}=useParams();
    return(
        <div>
            <h4>ID:{id}</h4>
        </div>
    )
}