// import React from "react";
// import { Link } from "react-router-dom";
// import { FaTachometerAlt,  FaShoppingBag, FaBox, FaUser, FaUsers } from "react-icons/fa";


// const Sidebar = () => {
//   return (
//     // <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300">
//     <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 z-50">

//       <h1 className="text-3xl font-bold hidden md:block mt-5 text-center">SW SHOP</h1>

//       <ul className="flex flex-col mt-5 text-xl space-y-1">

//         <Link to="/" className="flex items-center py-3 px-2 space-x-4 hover:rounded cursor-pointer hover:bg-blue-600 hover:text-white">
//         <FaTachometerAlt />
//           <span className="hidden md:inline">Dashboard</span>
//         </Link>

//         <Link to="/orders" className="flex items-center py-3 px-2 space-x-4 hover:rounded cursor-pointer hover:bg-blue-600 hover:text-white">
//           <FaShoppingBag />
//           <span className="hidden md:inline">Orders</span>
//         </Link>

//         <Link to="/customers" className="flex items-center py-3 px-2 space-x-4 hover:rounded cursor-pointer hover:bg-blue-600 hover:text-white">
//         <FaUsers />
//           <span className="hidden md:inline">Customers</span>
//         </Link>

//         <Link to="/users" className="flex items-center py-3 px-2 space-x-4 hover:rounded cursor-pointer hover:bg-blue-600 hover:text-white">
//           <FaUser />
//           <span className="hidden md:inline">Users</span>
//         </Link>

//         <Link to="/products" className="flex items-center py-3 px-2 space-x-4 hover:rounded cursor-pointer hover:bg-blue-600 hover:text-white">
//           <FaBox />
//           <span className="hidden md:inline">Products</span>
//         </Link>
//       </ul>
//     </div>
//   );
// };




// export default Sidebar;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaShoppingBag,
  FaBox,
  FaUser,
  FaUsers,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const navLinks = [
    { to: "/", label: "Dashboard", icon: <FaTachometerAlt /> },
    { to: "/orders", label: "Orders", icon: <FaShoppingBag /> },
    { to: "/customers", label: "Customers", icon: <FaUsers /> },
    { to: "/users", label: "Users", icon: <FaUser /> },
    { to: "/products", label: "Products", icon: <FaBox /> },
  ];

  return (
<<<<<<< HEAD
    <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300">
      <h1 className="text-3xl font-bold hidden md:block mt-5 text-center">SWE SHOP</h1>
=======
    <>
      {/* Top Navbar (Mobile Only) */}
      <div className="md:hidden bg-white p-4 shadow flex justify-between items-center fixed top-0 left-0 right-0 z-40">
        <h1 className="text-xl font-bold">SW SHOP</h1>
        <button onClick={toggleSidebar}>
          {sidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>
>>>>>>> ee22a8c (newchangesinsidebar)

      {/* Overlay (Mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 border-r border-gray-300 z-50 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        {/* Logo (hidden on mobile since it’s already on topbar) */}
        <div className="hidden md:block text-center py-6">
          <h1 className="text-3xl font-bold">SW SHOP</h1>
        </div>

        {/* Navigation */}
        <ul className="mt-6 space-y-1 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-4 py-3 px-2 text-gray-800 hover:bg-blue-600 hover:text-white rounded transition"
            >
              {link.icon}
              <span className="inline">{link.label}</span> {/* Visible everywhere */}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
