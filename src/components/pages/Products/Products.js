import React from 'react';
import { Helmet } from 'react-helmet';
import data from '../../data/data.json';



const Products = () => {

    return (
        <>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>
            </Helmet>
            <div className='pt-5'>
                <h2 className='text-sky-800 text-center pb-5 text-4xl uppercase'>Our Products Storage</h2>
                <div className="grid grid-cols-4 gap-4 container mx-auto">
                    {
                        data.map((product, index) => (
                            <div key={index} className=''>
                                <img src={product.images[0]} alt="/" />
                                <h2 className='text-2xl text-center'>{product.name}</h2>
                                <p className='text-xl text-center'>৳{product.price} <sub>After {product.offer} Discount</sub> </p>
                                <div className='pt-3'>
                                    <button className='rounded-full bg-indigo-500 w-28 m-1'>Add to Cart</button>
                                    <button className='rounded-full bg-green-500 w-28 m-1'>View Product</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Products;