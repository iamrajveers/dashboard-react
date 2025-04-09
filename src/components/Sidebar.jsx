// src/components/Sidebar.jsx
import { Link } from "react-router-dom"
import { Home, User, Settings, LogOut } from "lucide-react"


const Sidebar = () => {
  return (
   <>
     <nav >


<ul className="flex pt-40 text-lg font-medium text-gray-800">
  <li className="hover:text-indigo-600 cursor-pointer">Home</li>
  <li className="hover:text-indigo-600 cursor-pointer">About</li>
  <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
</ul>



     </nav>
   
   </> 
   
  )
}

export default Sidebar
