import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
  const {signIn, googleSignIn}=useContext(AuthContext)
  const handleGoogleIn=()=>{
    googleSignIn()
      .then(result=>{
        console.log(result.user)
        navigate('/')
      })
      .catch(error=>{
        console.log("ERROR",error)
      })
  }
  const handleLoginForm=e=>{
    e.preventDefault()
    const email=e.target.email.value
    const pass=e.target.pass.value
    signIn(email,pass)
     .then(result=>{
        console.log(result.user)
        e.target.reset()
        navigate('/')
     })
     .catch(error=>{
      console.log("ERROR",error)
     })
  }
  return (
    <div>
      <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content flex-col">
          <h1 className="text-2xl font-bold">Login</h1>
          <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLoginForm} class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  class="input input-bordered"
                  required
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="pass"
                  placeholder="password"
                  class="input input-bordered"
                  required
                />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                <input class="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <button onClick={handleGoogleIn} className="btn btn-ghost">Google Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
