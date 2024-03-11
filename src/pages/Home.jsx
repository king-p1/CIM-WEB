import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div  className="home">
      

<h2>This is the </h2>

<Link to={'/login'}>

  <button>Login</button>

</Link>

    </div>
  )
}

export default Home