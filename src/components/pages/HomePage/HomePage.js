import React from 'react';
import Navbar from '../Navbar';
import OfferDeal from '../OfferDeal';
import Products from '../Products/Products';
import PromotionalPage from '../PromotionalPage/PromotionalPage';
import SingleBanner from '../SingleBanner/SingleBanner';
import Slider from '../Slider';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <OfferDeal />
            <PromotionalPage />
            <Products />
            <SingleBanner />
        </div>
    );
};

export default HomePage;