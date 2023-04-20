import React from 'react';
import frame1 from '../Assets/images/servicesFrame.png'
import pointBall from '../Assets/images/ball-3.png'

const OurServices = () => {
    return (
        <div className='flex'>
            <div className='w-[871px] h-[940px]'>
                <img src={frame1} className='w-full h-full' alt="" />
            </div>

            <div className='w-[835px] h-[819px] bg-black rounded-[24px] pt-[75px] pl-[76px] pr-[128px] pb-[149px] lg:-ml-[80px] lg:-mt-[-60px] text-white'>
                <h2 className='text-[30px] font-[700] mb-[25px]'>Our Services</h2>
                <p className='text-[18px] font-[400] max-w-[516px] mb-[46px]'>Every one of us loves something different. So, explore the
                    world through the lens of our visual capabilities and find
                    what you love.</p>
                <div className='flex items-center gap-[21px] text-[25px] font-[500] mb-[43px]'>
                    <div><img src={pointBall} alt="" /></div>
                    <p>Website Design</p>
                </div>
                <div className='flex items-center gap-[21px] text-[25px] font-[500] mb-[43px]'>
                    <div><img src={pointBall} alt="" /></div>
                    <p>App Design</p>
                </div>
                <div className='flex items-center gap-[21px] text-[25px] font-[500] mb-[43px]'>
                    <div><img src={pointBall} alt="" /></div>
                    <p>Landing page Design</p>
                </div>
                <div className='flex items-center gap-[21px] text-[25px] font-[500] mb-[43px]'>
                    <div><img src={pointBall} alt="" /></div>
                    <p>SASS</p>
                </div>
                <div className='flex items-center gap-[21px] text-[25px] font-[500] '>
                    <div><img src={pointBall} alt="" /></div>
                    <p>Development</p>
                </div>

            </div>

        </div>
    );
};

export default OurServices;