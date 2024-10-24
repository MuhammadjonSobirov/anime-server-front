import { BiLoader } from "react-icons/bi"
import "./loader.css"

const Loader = () => {
  return (
    <div style={{transform:'translate(-50%, -50%)'}} className="absolute top-[30%] left-1/2 loader"><BiLoader color="red" size="30px"/></div>
  )
}

export default Loader