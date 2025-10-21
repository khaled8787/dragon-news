import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from './Header';
import LatestNews from './LatestNews';
import NavBar from './NavBar';
import LeftAside from './LeftAside';
import RightAside from './RightAside';
import Loading from './Loading';

const Home = () => {
    const {state} = useNavigation();
    return (
        <div>
            <header>
                <Header></Header>
            <section className='w-11/12 mx-auto my-3'>
                  <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto my-3'>
                <NavBar></NavBar>
            </nav>
            </header>
            
            <main className='w-11/12 mx-auto gap-10 grid grid-cols-12'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'>
                  {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>}  
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Home;