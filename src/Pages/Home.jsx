import React from 'react';
import Banner from '../Components/Banner';
import Heading from '../Components/Heading';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../Components/Categories';

const Home = () => {
    const categories = useLoaderData()
    console.log(categories);
    
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            {/* header */}
            <Heading title={'Browse Coffee by Category'} subtitle={'Choose your desired coffee category to browse through specific coffee that fit in you taste.'}></Heading>
            {/* categories tab section */}
            <Categories categories={categories}></Categories>
            {/* name of each tab group should be unique */}
            {/* Dynamic nested components */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;