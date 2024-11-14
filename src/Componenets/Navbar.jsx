import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import auth from "../firebase.init";


const Navbar = () => {
  const {user,signOutUser}=useContext(AuthContext)
  const handleSignOut=()=>{
    signOutUser()
      .then(()=>{
        console.log("Successfully LogOut")
      })
      .catch(error=>{
        console.log("ERROR",error)
      })
  }
    const navListItems=<>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
        {
          user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        }
        <li><NavLink to='/login'>Login</NavLink></li>
    </> 
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
    
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
                {navListItems}
            </ul>
          </div>
          <a class="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
                {navListItems}
          </ul>
        </div>
        <div class="navbar-end">
          {
            user?<>
              <p>{user?.email}</p>
              <button onClick={handleSignOut} className="btn">Sign Out</button>
            </> 
            :<Link to='/login'>Login</Link>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
