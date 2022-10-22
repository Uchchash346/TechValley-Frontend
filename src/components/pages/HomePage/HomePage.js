import React from 'react';
import Navbar from '../Navbar';
import OfferDeal from '../OfferDeal';
import Slider from '../Slider';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <OfferDeal />
        </div>
    );
};

export default HomePage;