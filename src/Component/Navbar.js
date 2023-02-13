import React from 'react';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center py-[44px]'>
            <div>
                <img src={require("../Assets/logo/logo.png")} alt="" />
            </div>

            <div className='flex text-[#FFFFFF] font-[500] text-[20px] gap-[55px]'>
                <div className='hover:text-[#CEFF45]'>
                    <a href="">Home</a>
                </div>
                <div className='hover:text-[#CEFF45]'>
                    <a href="">Portfolios</a>
                </div>
                <div className='hover:text-[#CEFF45]'>
                    <a href="">Services</a>
                </div>
                <div className='hover:text-[#CEFF45]'>
                    <a href="">Work</a>
                </div>
                <div className='hover:text-[#CEFF45]'>
                    <a href="">Testimonials</a>
                </div>
            </div>

            <div className='text-black w-[214px] h-[67px] bg-[#CEFF45] rounded-[5px] flex justify-center items-center font-[500] text-[18px]'>
                <button>Start a project?</button>
            </div>
        </div>
    );
};

export default Navbar;