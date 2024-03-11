import { Navigate } from "react-router-dom"



const ProtectUser = ({children}) => {

    
    if(!EmailAddress || !SubscriberID ||!Password){
        return <Navigate to={'/'} replace={true} ></Navigate>
    }
    return children

    }

    export{
        ProtectUser
    }