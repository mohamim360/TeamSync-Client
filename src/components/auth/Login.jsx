import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const emailHandler = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };
  const passwordHandler = (event) => {
    setFormData({ ...formData, password: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    localStorage.setItem("token", data.token);
    localStorage.setItem("LoggedUserId", data.userId);
    if (response.ok) {
      navigate("/");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className="m-auto pt-20">
        <div className="form-control w-full max-w-xs rounded-lg p-12 hover:bg-white hover:border-gray-900 border-4">
          <h1 className="m-auto pb-6 text-4xl text-gray-900 font-bold">
            Login
          </h1>

          <label className="label pt-4">
            <span className="label-text">Enter Your Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            value={formData.email}
            onChange={emailHandler}
          />

          <label className="label pt-6">
            <span className="label-text">Enter Your Password</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full max-w-xs"
            value={formData.password}
            onChange={passwordHandler}
          />

          <div className="pt-4">
            <button className=" placeholder-gray-100 bg-gray-900 text-white p-3 rounded-full  hover:bg-white hover:text-gray-900 hover:border-gray-900 border-4">
              Submit
            </button>
          </div>

          <div className="flex gap-2 pt-4 m-auto">
            <p>New here?</p>
            <Link to="/register" className="font-semibold">
              Register
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
