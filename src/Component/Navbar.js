import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center py-[44px]'>
            <div className='cursor-pointer'>
                <img src={require("../Assets/logo/logo.png")} alt="" />
            </div>

            <div className='hidden lg:flex text-[#FFFFFF] font-[500] text-[20px] gap-[55px]'>
                <div className='  navitem'>
                    <a href="">Home</a>
                </div>
                <div className=' navitem'>
                    <a href="">Portfolios</a>
                </div>
                <div className=' navitem'>
                    <a href="">Services</a>
                </div>
                <div className=' navitem'>
                    <a href="">Work</a>
                </div>
                <div className=' navitem'>
                    <a href="">Testimonials</a>
                </div>
            </div>

            <div className='text-black w-[214px] h-[67px] bg-[#CEFF45] start-button  rounded-[5px] flex justify-center items-center font-[500] text-[18px] cursor-pointer'>
                <button>Start a project?</button>
            </div>
        </div>
    );
};

export default Navbar;