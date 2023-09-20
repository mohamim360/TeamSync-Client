import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  console.log(token);
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("LoggedUserId");
    navigate("/login");
  }
  return (
    <>
      <div className="navbar bg-base-100 shadow-xl hover:shadow-slate-300 rounded-lg  hover:bg-white hover:border-gray-900 border-4 mb-6">
        <div className="flex-1">
          <Link to="/" className="btn btn-neutral normal-case text-xl">
            TeamSync
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div>
            {/* <div className="dropdown dropdown-end"> */}
            {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label> */}
            <ul className="flex flex-row  shadow menu menu-sm bg-base-100 rounded-box ">
              {/* <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            > */}
              {token ? (
                <li>
                  <a onClick={logout}>Logout</a>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
