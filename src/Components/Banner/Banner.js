import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../Axios'
import { API_KEY, IMAGE_URL } from '../../Constants/Constants';


const Banner = () => {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res) => {
            setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length)]);
        })
    }, [])

    return (
        <div className='banner' style={{ backgroundImage: `url(${movie ? IMAGE_URL + movie.backdrop_path : ""})` }}>
            <div className='content'>
                <h1 style={{ fontWeight: 700 }}>{movie ? movie.title || movie.name : ""}</h1>
                <div className='banner_buttons mt-1 mb-3 ps-4'>
                    <button className='button  ml-2 '>Play</button>
                    <button className='button  px-3'>My list</button>
                </div>
                <h6 className='description'>{movie ? movie.overview : ""}</h6>
            </div>
            <div className="bottom_fade">

            </div>
        </div>

    );
};

export default Banner;