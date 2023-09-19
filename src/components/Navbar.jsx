import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-lg m-2 mt-2">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">TeamSync</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
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
              <li>
                <a>Login</a>
              </li>
              <li>
                <a>Register</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
