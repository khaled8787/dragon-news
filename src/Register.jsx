import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from './AuthProvider';
const Register = () => {
  const [nameError, setNameError] = useState('');
  const {createUser, setUser, updateUser} = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    if(name.length < 5){
      setNameError('Your Name Should Be More Than 5 Character');
      return;
    }
    else{
      setNameError('');
    }
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
    .then(result =>{
      const user = result.user;
      updateUser({displayName: name, photoURL: photoUrl})
      .then(() =>{
      setUser({...user, displayName: name, photoURL: photoUrl});
      navigate('/')
      })
      .catch((error) => {
   console.log(error);
   setUser(user)
});
    })
    .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
  });
  }
    return (
        <div className='flex justify-center min-h-screen items-center'>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register Your Account</h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
              {nameError ? <p className='text-red-600'>{nameError}</p> : <label className="label">Name</label>}
          <input required name='name' type="text" className="input" placeholder="Name" />
            <label className="label">Photo URL</label>
          <input required name='photo' type="text" className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input required name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input required name='password' type="password" className="input" placeholder="Password" />
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p className='font-semibold text-center pt-5'>Already Have An Account ? <Link to={'/auth/login'} className='text-blue-600'>Login</Link></p>
      </form>
    </div>
        </div>
    );
};

export default Register;