import React from 'react';
import Banner from '../Component/Banner';
import Navbar from '../Component/Navbar';

const Home = () => {
    return (
        <div className='h-[995px] bg-black relative'>
            <Navbar></Navbar>
            <Banner></Banner>
            <img src={require("../Assets/images/ball-1.png")} className="absolute top-56 left-8 ]" alt="" />
            <img src={require("../Assets/images/ball-2.png")} className="absolute left-[700px] bottom-[330px]" alt="" />
        </div>
    );
};

export default Home;