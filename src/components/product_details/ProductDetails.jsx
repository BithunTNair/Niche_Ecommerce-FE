import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import AxiosInstance from '../../config/Api_call'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../reusable/Button'

const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();
    useEffect(() => {

        AxiosInstance.get(`${import.meta.env.VITE_BASE_URL}/user/get_product/${productId}`)
            .then((res) => {
                setProduct(res.data.product);
            })
            .catch((err) => {
                console.error("Error fetching product", err);
            });
    }, []);

    return (
        <>

            <div className="pt-6 px-4 sm:px-6 md:px-10 bg-[var(--gray)]">
                <Navbar />
            </div>
            {product ? (
                <div className="min-h-screen bg-[var(--gray)] flex items-center justify-center p-6">

                    <div className="bg-[var(--white)] rounded-2xl shadow-lg w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">


                        <div className="w-full md:w-1/2 h-64 md:h-auto bg-[var(--lightblack)] flex items-center justify-center">

                            {product.image ? <img src={product.image} alt="Product" className="h-full object-cover rounded-xl" /> : "Product Img"}
                        </div>


                        <div className="w-full md:w-1/2 p-6 sm:p-8 space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--black)]">{product.name} </h2>
                            <p className="text-sm text-gray-600">Category: <span className="capitalize"> {product.category} </span></p>
                            <p className="text-base text-[var(--lightblack)]">{product.description} </p>

                            <div className="flex items-center justify-between pt-2">
                                <span className="text-lg font-semibold text-[var(--yellow)]"> ₹ {product.price} </span>
                                <span className="text-sm text-gray-500">Stock: {product.stock}</span>
                            </div>

                            <div className="pt-4">
                                <Button className="bg-[var(--yellow)] text-[var(--white)] w-full py-2 px-4 rounded-xl font-medium hover:opacity-90 transition">
                                    Add to Cart
                                </Button>
                                <Button className="bg-[var(--yellow)] text-[var(--white)] w-full mt-3 py-2 px-4 rounded-xl font-medium hover:opacity-90 transition">
                                    By Now
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            ) : (
                <p>Loading product details...</p>
            )}

        </>
    )
}

export default ProductDetails