import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "../Views/HomePage/HomePage";
import MoviePage from "../Views/MoviePage/MoviePage";

const AppRouts = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/movie/:id" element={<MoviePage/>} />
        </Routes>
    )
}

export default AppRouts;