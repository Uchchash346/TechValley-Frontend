import React from 'react';
import OfferImage1 from '../images/offerImages/offer1.png';
import OfferImage2 from '../images/offerImages/offer2.png';
import OfferImage3 from '../images/offerImages/offer3.png';
const OfferDeal = () => {
    return (
        <>
            <div class="container mx-auto pt-5">
            <h2 className="text-sky-800 text-center pb-5 text-4xl uppercase">Get Friday Offers</h2>
                <div className="grid grid-rows-1 grid-flow-col gap-4">
                    <div>
                        <a href="/">
                            <img src={OfferImage1} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <img src={OfferImage2} alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <img src={OfferImage3} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OfferDeal;