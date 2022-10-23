import React from 'react';
import data from '../../data/data.json';


const Products = () => {

    return (
        <>
        
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
                                    <button className='rounded-full bg-indigo-500 w-28'>Add to Cart</button>
                                    <button className='rounded-full bg-green-500 w-28'>View Product</button>
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