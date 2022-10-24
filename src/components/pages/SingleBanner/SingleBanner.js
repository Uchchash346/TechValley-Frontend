import React from 'react';
import singleBannerImage from '../../images/single_banner.jpg';
const SingleBanner = () => {
    return (
        <div>
            <img
                className='pt-5 min-h-screen'
                src={singleBannerImage} alt="" />
        </div>
    );
};

export default SingleBanner;