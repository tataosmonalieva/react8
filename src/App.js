import React from "react";
import AppRouts from "./AppRouts/AppRouts";
import {BrowserRouter} from "react-router-dom";
const App = () => {
    return(
        <BrowserRouter>
            <AppRouts/>
        </BrowserRouter>
    );
};
export default App;