import React, {useEffect, useState} from "react";
import Layout from "../../Components/Layout/Layout";
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY, BASE_URL} from "../../config/config";

const MoviePage = () => {
    const {id} = useParams()
    const [movie,setMovie] = useState({})

    useEffect(() => {
        axios(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=ru-RU`)
            .then(({data}) => setMovie(data))
    }, []);
    return (
        <Layout>
            <div
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    width: '100%',
                    marginBottom: '20px'
                    }}
            >

            </div>
          <div className={'container'}>

          </div>
        </Layout>
    )
}

export default MoviePage;