import React, { useEffect, useState } from 'react';
import Header from './Header';
import RightAside from './RightAside';
import NewsDetailsCard from './NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const card = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});

    useEffect(() =>{
       const newsDetails = card.find(singleNews => singleNews.id == id);
       setNews(newsDetails);
    }, [card, id]);
    return (
        <div>
            <header className='py-3'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-10'>
               <section className='col-span-9'>
                <h2 className='font-bold mb-5'>News Details</h2>
                <NewsDetailsCard news = {news}></NewsDetailsCard>
               </section>
               <aside className='col-span-3'>
                <RightAside></RightAside>
               </aside>
            </main>
        </div>
    );
};

export default NewsDetails;