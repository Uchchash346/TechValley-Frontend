import React from 'react';
import OfferImage1 from '../images/offerImages/offer1.png';
import OfferImage2 from '../images/offerImages/offer2.png';
import OfferImage3 from '../images/offerImages/offer3.png';
const OfferDeal = () => {
    return (
        <>
            <div class="container mx-auto pt-5">
                <div className="grid grid-rows-1 grid-flow-col gap-4">
                    <div>
                        <img src={OfferImage1} alt="" />
                    </div>
                    <div>
                        <img src={OfferImage2} alt="" />
                    </div>
                    <div>
                        <img src={OfferImage3} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OfferDeal;