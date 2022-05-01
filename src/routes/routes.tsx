import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from "../components";
import { ConiugazioniScreen, HomeScreen, InCostruzione, NotFoundScreen, ParolacciaScreen } from "../screens"


const RoutesComponent = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                {/* <Route path="/articoli" element={<InCostruzione />} /> */}
                <Route path="/coniugazioni" element={<ConiugazioniScreen />} />
                {/* <Route path="/segreto" element={<ParolacciaScreen />} /> */}
                <Route path="*" element={<NotFoundScreen />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default RoutesComponent;