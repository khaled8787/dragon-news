import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>
            <div>
                <div className="join join-vertical w-full">
  <button className="btn join-item bg-base-100 justify-start"><FaFacebook className='text-xl'></FaFacebook> Facebook</button>
  <button className="btn join-item bg-base-100 justify-start"><FaTwitter className='text-xl'></FaTwitter> Twitter</button>
  <button className="btn join-item bg-base-100 justify-start"><FaInstagram className='text-xl'></FaInstagram> Instagram</button>
</div>
            </div>
        </div>
    );
};

export default FindUs;