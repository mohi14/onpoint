import React from 'react';
import signature from "../Assets/images/signature.svg"

const HelloGenius = () => {
    return (
        <div className='text-center mt-[143px] mb-[150px]'>
            <h2 className='text-black font-[700] text-[52px] mb-[15px]'>Hello Genius,</h2>
            <p className='text-black font-[400] text-[20px] mb-[30px]'>Welcome to my onpoint Agency</p>
            <p className='text-black font-[400] text-[20px] mb-[30px] max-w-[807px] mx-auto'><span className='text-[#362FD9] font-[600]'>You</span> are in the <span className='text-[#362FD9] font-[600]'>right place</span> if you are ready to create a path for yourself with one of the most
                in-demand skill sets and are ready to create solutions and make an impact with one
                feature at a time.</p>
            <div className='flex justify-center'>
                <img src={signature} alt="" />
            </div>
        </div>
    );
};

export default HelloGenius;