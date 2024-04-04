import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from '../../Axios';
import { API_KEY, IMAGE_URL } from '../../Constants/Constants';
import YouTube, { YouTubeProps } from 'react-youtube';

const RowPost = ({ title, isSmall, url }) => {
    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState('');

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setMovies(response.data.results);
            })
            .catch(err => {
                console.error('Error fetching movies:', err);
            });
    }, [url]);

    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleMovieClick = id => {
        axios.get(`movie/${id}/videos?language=en-US&api_key=${API_KEY}`)
            .then(response => {
                if (response.data.results.length > 0) {
                    setUrlId(response.data.results[0].key);
                } else {
                   alert('No videos found for movie ID:', id);
                }
            })
            .catch(err => {
                console.error('Error fetching movie videos:', err);
            });
    };

    return (
        <div className="row">
            <h5>{title}</h5>
            <div className="posters">
                {movies.map(movie => (
                    <div className={isSmall ? 'smallPoster' : 'poster'} >
                        <img
                            key={movie.id}
                            onClick={() => handleMovieClick(movie.id)}
                            style={{ width: '100%', height: '100%' }}
                            src={movie ? `${IMAGE_URL}${movie.backdrop_path}` : "fallback_image_url"}
                            alt={movie ? `Poster for ${movie.title}` : "Fallback Poster"}
                        />

                    </div>

                ))}
            </div>
            {urlId && <YouTube opts={opts} videoId={urlId} />}
        </div>
    );
};

export default RowPost;
