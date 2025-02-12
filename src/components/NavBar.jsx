import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const { user, Logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 shadow-md px-4 py-4 md:px-6 sticky top-0 w-full z-50 flex justify-between items-center">
      <h1 className="text-xl text-white font-bold">Academic Elite</h1>
      <div className="hidden lg:flex flex-1 justify-center items-center space-x-6">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-purple-400" : "text-white hover:text-gray-400"}>Home</NavLink>
        <NavLink to="/assignments" className={({ isActive }) => isActive ? "text-purple-400" : "text-white hover:text-gray-400"}>Assignments</NavLink>
        <NavLink to="/pendingassignments" className={({ isActive }) => isActive ? "text-purple-400" : "text-white hover:text-gray-400"}>Pending Assignments</NavLink>
        {user && (
          <>
            <NavLink to="/createassignments" className={({ isActive }) => isActive ? "text-purple-400" : "text-white hover:text-gray-400"}>Create Assignments</NavLink>
            <NavLink to="/myaemptedassignments" className={({ isActive }) => isActive ? "text-purple-400" : "text-white hover:text-gray-400"}>My Attempted Assignments</NavLink>
          </>
        )}
      </div>
      <div className="flex items-center space-x-4">
        {user && (
          <img title={user.displayName} className="w-10 h-10 lg:hidden border rounded-full" src={user.photoURL} alt="User" />
        )}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-4 py-4"
          >
            <NavLink to="/" className={({ isActive }) => isActive ? "text-purple-400" : "text-white hover:text-gray-400"} onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/assignments" className={({ isActive }) => isActive ? "text-purple-400" : "text-white hover:text-gray-400"} onClick={toggleMenu}>Assignments</NavLink>
            <NavLink to="/pendingassignments" className={({ isActive }) => isActive ? "text-purple-400" : "text-white hover:text-gray-400"} onClick={toggleMenu}>Pending Assignments</NavLink>
            {user && (
              <>
                <NavLink to="/createassignments" className={({ isActive }) => isActive ? "text-purple-400" : "text-white hover:text-gray-400"} onClick={toggleMenu}>Create Assignments</NavLink>
                <NavLink to="/myaemptedassignments" className={({ isActive }) => isActive ? "text-purple-400" : "text-white hover:text-gray-400"} onClick={toggleMenu}>My Attempted Assignments</NavLink>
                <button onClick={Logout} className="btn bg-red-500 text-white px-3 py-1 w-full">Log Out</button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hidden lg:flex items-center space-x-4">
        {user ? (
          <div className="flex items-center gap-1"> 
            <img title={user.displayName} className="w-10 h-10 border rounded-full" src={user.photoURL} alt="User" />
            <button onClick={Logout} className="bg-purple-500 text-white px-4 py-2 rounded-lg inline-block mt-2 hover:bg-purple-600 transition-all">Log Out</button>
          </div>
        ) : (
          <div className="flex space-x-2">
            <Link to="/auth/login" className="btn bg-blue-500 text-white px-3 py-1">Login</Link>
            <Link to="/auth/register" className="btn bg-green-500 text-white px-3 py-1">Register</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
