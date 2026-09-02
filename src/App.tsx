import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./pages/Movies";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Movies/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
