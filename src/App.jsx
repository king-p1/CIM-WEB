import { Route, Routes } from "react-router-dom"
import { Login, Update,Home } from "./pages"
import { Toaster } from "react-hot-toast"
  import { ProtectUser } from "./middleware/Auth"
import { useState } from "react";
import too from './'
// insteadof drilling the state use formik and zustand
const App = () => {
  const [SubscriberID, setSubscriberID] = useState("");
  const [EmailAddress, setEmailAddress] = useState("");
  const [Password, setPassword] = useState("");
  return (
    <div>
      

<Routes>

  <Route path="/" element={<Home/>} />
  {/* <Route path="/login" element={<ProtectUser><Login /></ProtectUser>} /> */}
  <Route path="/login" element={<Login />} />
  <Route path="/update" element={<Update/>} />

</Routes>
<Toaster
position="top-right"
/>
    </div>
  )
}

export default App