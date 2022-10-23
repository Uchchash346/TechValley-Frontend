import React from 'react';
import promotionImage from '../../images/promotional_image.jpg';

const PromotionalPage = () => {
    return (
        <>
            <img 
            className='pt-5 min-h-screen'
            src={promotionImage} alt="" 
            />
        </>
    );
};

export default PromotionalPage;