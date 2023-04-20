import React from 'react';
import './Socials.css'
import borderImage from "../../Assets/images/socailBorder.png";

const Socials = () => {
    return (
        <div className='col-span-3'>
            <div >
                Socials
            </div>
            <div>
                <img src={borderImage} alt="" />
            </div>
            <div className='grid grid-cols-3 gap-[20px] mt-[20px]'>
                <p className='socials text-center px-[20px] py-[6px]'>Dribble</p>
                <p className='socials  text-center px-[20px] py-[6px]'>Behance</p>
                <p className='socials  text-center px-[20px] py-[6px]'>Facebook</p>
                <p className='socials  text-center px-[20px] py-[6px]'>Linkedin</p>
                <p className='socials  text-center px-[16px] py-[6px]'>Instagram</p>
                <p className='socials  text-center px-[20px] py-[6px]'>Twitter</p>
            </div>
        </div>
    );
};

export default Socials;