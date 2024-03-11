import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [SubscriberID, setSubscriberID] = useState("");
  const [EmailAddress, setEmailAddress] = useState("");
  const [Password, setPassword] = useState("");
const [err, setError] = useState('')

const handleSubmit = async() =>{
  if(!EmailAddress || !SubscriberID || !Password){
   toast.error('All fields are required')
}
try {
  const response = axios.post(``,{EmailAddress,SubscriberID,Password})
  toast.promise(
    response,
    {
      loading: 'Logging in...',
      success: 'Successfully logged in',
      error: 'Error logging in'
    },
    {
      successDuration: 3000,
      errorDuration: 3000
    }
  )
} catch (error) {
  setError(error)
  console.log(error)
}
}

  return (
    <div>
      <h2>Login</h2>
<form onSubmit={handleSubmit}>
  <input type="email" onChange={(e)=>setEmailAddress(e.target.value)} value={EmailAddress} />

  <input type="text" onChange={(e)=>setSubscriberID(e.target.value)} value={SubscriberID} />

  <input type="password" onChange={(e)=>setPassword(e.target.value)} value={Password} />
</form>
{err}
    </div>
  )
}

export default Login