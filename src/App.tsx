import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./pages/Movies";
import Header from "./components/Header";

function App() {

    return (
        <>
            <BrowserRouter>
            <Header/>
                <Routes>
                  <Route path="/" element={<Movies/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
