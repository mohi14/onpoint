import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='max-w-[1380px] flex justify-between items-center py-[44px] mx-auto'>
            <div className='cursor-pointer'>
                <img src={require("../Assets/logo/logo.png")} alt="" />
            </div>

            <div className='hidden lg:flex text-[#FFFFFF] font-[500] text-[20px] gap-[55px]'>
                <div className='  navitem'>
                    <a href="">Home</a>
                </div>
                <div className=' navitem dropdown dropdown-hover cursor-pointer'>
                    <label tabIndex={0} className="cursor-pointer m-1">Portfolios</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow rounded-box w-52">
                        <li><a className='links' href='https://dribbble.com/Aminuluiux?fbclid=IwAR3gITmcjk34uuXlrSrewaLGslUzUnk8enKnqWQpS6U9cRA2YJDWgsB99bg' target='_blank'>Dribbble</a></li>
                        <li><a className='links' href='https://www.behance.net/Aminuluiux?fbclid=IwAR0Tz1v9ZDrEytLZ3Wvka71RDoVN6QcjLM_qp6_VQojOAgS6GMu0gvFWVBw' target='_blank'>Behance</a></li>
                    </ul>
                    {/* <a href="">Portfolios</a> */}
                </div>
                <div className=' navitem'>
                    <a href="">Services</a>
                </div>
                <div className=' navitem'>
                    <a href="">Work</a>
                </div>

            </div>

            <div className='text-black w-[172px] h-[54px] bg-[#CEFF45] start-button  rounded-[5px] flex justify-center items-center font-[500] text-[18px] cursor-pointernp'>
                <button>Start a project?</button>
            </div>


        </div>
    );
};

export default Navbar;