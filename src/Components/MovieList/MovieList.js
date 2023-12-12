import React from "react";
import { IMAGE_URL } from "../../config/config";
import {useNavigate} from "react-router-dom";

const MovieList = ({movies}) => {
    const navigate = useNavigate()

    const handleNavigate = (id) => {
        navigate(`/movie/${id}`)
    }


    return (
        <>
            <div className={'row'}>
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className={'col-3'}
                    >
                        <div
                            onClick={() => handleNavigate(movie.id)}
                            className={'movie-box'}>
                            <img
                                className={'movie-img'}
                                src={`${IMAGE_URL}${movie.poster_path}`}
                                alt=""
                            />
                            <h3>{movie.title}</h3>
                            <p>{movie.vote_average}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MovieList;
