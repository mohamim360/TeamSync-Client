import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, Outlet } from "react-router-dom";

function Menu() {
  return (
    <>
      <ul
        className="menu lg:menu-vertical
      bg-base-100 rounded-box lg:mb-16 w-40 h-full mt-6 m-2 shadow-xl hover:shadow-slate-500 rounded-lg  hover:bg-white hover:border-gray-900 border-4"
      >
        <li className="p-4">
          <Link to="/chat" className="font-bold">Chat</Link>
        </li>
        {/* <li>
          <details open>
            <summary>Parent item</summary>
            <ul>
              <li>
                <a>level 2 item 1</a>
              </li>
              <li>
                <a>level 2 item 2</a>
              </li>
              <li>
                <details open>
                  <summary>Parent</summary>
                  <ul>
                    <li>
                      <a>item 1</a>
                    </li>
                    <li>
                      <a>item 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Item 3</a>
        </li> */}
      </ul>
      {<Outlet />}
    </>
  );
}

export default Menu;
