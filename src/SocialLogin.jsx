import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold'>Login With</h2>
            <div className='flex flex-col gap-2 mt-4'>
                <button className='btn btn-outline btn-secondary'><FcGoogle className='text-xl'></FcGoogle> Login With Google</button>
                <button className='btn btn-outline btn-primary'><FaGithub className='text-xl'></FaGithub> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;