import React from 'react';
import { Navigate } from 'react-router';

const Home2 = () => {
    return (
        <div>
            <Navigate to={'category/1'}></Navigate>
        </div>
    );
};

export default Home2;