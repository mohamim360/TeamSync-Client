import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const nameHandler = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };
  const emailHandler = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };
  const passwordHandler = (event) => {
    setFormData({ ...formData, password: event.target.value });
  };

  const submitHandler = async (event) => {
    console.log(formData);
    event.preventDefault();
    const response = await fetch("https://teamsync-server.onrender.com/auth/signup", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      navigate("/login");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className="m-auto">
        <div className="form-control w-full max-w-xs m-auto rounded-lg m-6 p-4 hover:bg-white hover:border-gray-900 border-4">
          <h1 className="m-auto pb-6 text-4xl text-gray-900 font-bold">
            Register
          </h1>
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
            value={formData.name}
            onChange={nameHandler}
          />
          <label className="label">
            <span className="label-text-alt">Name felid can not be Empty</span>
          </label>

          <label className="label pt-6">
            <span className="label-text">Enter Your Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            value={formData.email}
            onChange={emailHandler}
          />
          <label className="label">
            <span className="label-text-alt">
              Enter a valid and non-existing email
            </span>
          </label>

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
          <label className="label">
            <span className="label-text-alt">
              The minimum password length must be six characters.
            </span>
          </label>

          <div className="pt-4">
            <button className=" placeholder-gray-100 bg-gray-900 text-white p-3 rounded-full  hover:bg-white hover:text-gray-900 hover:border-gray-900 border-4">
              SignUp
            </button>
          </div>

          <p className="p-4">
            Already have a Account?
            <Link to="/login" className="font-semibold">
              Login
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

export default Register;
