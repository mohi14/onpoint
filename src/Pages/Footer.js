import React from 'react';
import Rights from '../Component/Footer/Rights';
import Terms from '../Component/Footer/Terms';
import Socials from '../Component/Footer/Socials';
import Homes from '../Component/Footer/Homes';
import footerLogo from '../Assets/images/logo2.png'

const Footer = () => {
    return (
        <div className='max-w-[1380px] mt-[131px] pb-[71px]  mx-auto text-black'>
            <div className='mb-[20px] '>
                <img src={footerLogo} alt="" />
            </div>
            <div className='grid grid-cols-12'>
                <Rights />
                <Homes />
                <Terms />
                <Socials />
            </div>
        </div>
    );
};

export default Footer;