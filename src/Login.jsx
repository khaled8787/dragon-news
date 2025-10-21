import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from './AuthProvider';

const Login = () => {
  const [error, setError] = useState('');
  const {signIn} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then(result =>{
      const user = result.user;
      navigate(`${location.state ? location.state : '/'}`)
    })
    .catch((error) => {
    const errorCode = error.code;
    setError(errorCode);
  });
  }
    return (
        <div className='flex justify-center min-h-screen items-center'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login Your Account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          {error && <p className='text-red-600'>{error}</p>}
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className='font-semibold text-center pt-5'>Don't Have An Account ? <Link to={'/auth/register'} className='text-blue-600'>Register</Link></p>
      </form>
    </div>
        </div>
    );
};

export default Login;