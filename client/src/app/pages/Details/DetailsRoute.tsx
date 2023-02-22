import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Details from './Details';


const DetailsRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Details />} />
            <Route path="/:id" element={<Details />} />
        </Routes>
    );
};

export default DetailsRoute;