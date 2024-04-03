import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
        <div className='banner'>
            <div className='content'>
                <h1>Movie Name</h1>
                <div className='banner_buttons my-1'>
                    <button className='button px-3'>Play</button>
                    <button className='button  px-3'>My list</button>
                </div>
                <h6 className='description'>In publishing and graphic design, Lorem ipsum is a </h6>
            </div>
            <div className="bottom_fade">

            </div>
        </div>

    );
};

export default Banner;