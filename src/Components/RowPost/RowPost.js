import React, { useEffect, useState } from 'react';
import './RowPost.css'
import axios from '../../Axios';
import { IMAGE_URL } from '../../Constants/Constants';

const RowPost = ({ title, isSmall, url }) => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(url).then((response) => {
            setMovies(response.data.results)
            console.log(response.data.results)
        }).catch(err => {
            alert("Network error")
        })
    }, [])

    return (
        <div>
            <div className="row">
                <h5>{title}</h5>
                <div className="posters">
                    {movies.map((movie) =>
                        <img className={isSmall ? 'smallPoster' : 'poster'} src={`${movie ? IMAGE_URL + movie.backdrop_path : "fallback_image_url"}`} alt={movie ? `Poster for ${movie.title}` : "Fallback Poster"} />

                    )}
                </div>
            </div>
        </div>
    );
};

export default RowPost;