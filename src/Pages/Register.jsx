import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate=useNavigate()
    const {createAccount}=useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault()
        
        const name=e.target.name.value
        const email=e.target.email.value
        const password=e.target.pass.value
        
        createAccount(email,password)
            .then(result=>{
                console.log(result)
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
            <h1 className="text-2xl font-bold">Sign Up</h1>
            <div class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleRegister} class="card-body">
              <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    type="name"
                    name="name"
                    placeholder="You Name"
                    class="input input-bordered"
                    required
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
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
                    placeholder="Password"
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
                  <input class="btn btn-primary" type="submit" value="Create Account" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;