import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const emailHandler = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };
  const passwordHandler = (event) => {
    setFormData({ ...formData, password: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await fetch(
      "https://team-sync-server-seven.vercel.app/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();

    localStorage.setItem("token", data.token);
    localStorage.setItem("LoggedUserId", data.userId);

    const remainingMilliseconds = 60 * 60 * 1000;
    const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
    localStorage.setItem("expiryDate", expiryDate.toISOString());
    setIsLoading(false);
    if (response.ok) {
      navigate("/");
    }
  };

  return (
    <>
      {!isLoading ? (
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
      ) : (
        <div className="m-auto flex justify-center items-center h-full">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </>
  );
}

export default Login;
