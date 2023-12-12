import {useEffect, useState} from "react";
import axios from "axios";
import MoviePage from "../MoviePage/MoviePage";
import MovieList from "../../Components/MovieList/MovieList";
import {API_KEY, BASE_URL } from "../../config/config";
import Carousel from "../../Components/Carousel/Carousel";
import Layout from "../../Components/Layout/Layout";
import Pagination from "../../Components/Pagination/Pagination";
import {useSearchParams} from "react-router-dom";


const HomePage = () => {
    const [movies , setMovies] = useState([])
    const [pageParam, setPageParams] = useSearchParams('page')
    const [page, setPage] = useState(pageParam.get('page') || 1)

    useEffect(() => {
        axios(`${BASE_URL}discover/movie?language=ru-RU&api_key=${API_KEY}&page=${page}`)
            .then(({data}) => setMovies(data.results))
    }, [page]);

    const handleChangePage = (argPage) => {
        setPage(argPage)
        setPageParams({page: argPage})
    }

    return (
        <Layout>
            <Carousel movies={movies}/>
            <div
                style={{marginTop: '20px'}}
                className={'container'}>
                <MovieList movies={movies}/>
                <Pagination onClick={handleChangePage}/>
            </div>

        </Layout>
    )
}
export default HomePage;