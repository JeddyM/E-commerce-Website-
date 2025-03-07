import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useLoginMutation } from "./slices/userApiSlice.js";
import { setCredentials } from "./slices/authSlice.js";
import "./Login.css";
import { toast } from "react-toastify";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const passshut = () => {
    setPasswordVisible(!passwordVisible);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  //if logged in navigate to home screen
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  console.log(userInfo)
  console.log("hello")

//send the user input to server if for authentication if sucess responds with a paylod 
//passed to setCredentials rducer
  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err.data.message);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <form action="">
          <h1>Welcome Back!</h1>

        
          <div className="input-box">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>

          <div className="input-box">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEyeSlash : faEye}
              className="icon"
              onClick={passshut}
            />
          </div>

          <div className="remember-forgot">
            <label htmlFor="">
              {" "}
              <input type="checkbox" />
              Remember me?
            </label>
            <a href="https://www.google.com">Forgot Password</a>
          </div>

          <button type="submit" className="btn" onClick={handleSignIn}>
            Login
          </button>

          <div className="register-link">
            <p>
              Dont have an account?{" "}
              <a href="https://www.google.com">Register</a>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;
