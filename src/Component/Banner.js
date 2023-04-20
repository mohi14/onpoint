import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='max-w-[1380px] mx-auto flex justify-between mt-[100px]'>
            <div>
                <div className='mb-[10px] w-[120px] h-[32px] font-[600] text-[12px] text-white relative z-10'>
                    <div className='opacity-[0.18] product-text'></div>
                    <p className='opacity-100 absolute top-1.5 left-4'>Product design</p>
                </div>
                <div className='mb-[30px] max-w-[813px] font-[700] text-[78px] text-white bold-text'>
                    We build Relationships
                    Through <span className='text-[#CEFF45]'>Experiences</span>
                </div>
                <div className='mb-[60px] max-w-[733px] font-[500] text-[25px] text-white mini-text'>
                    A strategy experience agency crafting brands, websites, products,
                    and pretty much anything you can imagine
                </div>
                <div className='text-black w-[214px] h-[67px] bg-[#CEFF45] start-button  rounded-[5px] flex justify-center items-center font-[500] text-[18px] cursor-pointernp'>
                    <button>Start a project?</button>
                </div>
            </div>
            <div className='w-[430.45px] relative' >
                <img src={require('../Assets/images/successProject.png')} alt="" />
                <div className='absolute bottom-16 left-12'>
                    <p className='text-white text-[15px] font-semibold'>Success project</p>
                    <p className='text-white text-[23px] font-[700]'>594+</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;