import React, { useEffect, useState } from 'react';
import AxiosInstance from '../../config/Api_call';
import { Button } from '../reusable/Button';
import { useSelector } from 'react-redux';

const AddToCart = () => {
  const user = useSelector((state) => state.user);
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const userId= user.user._id

  useEffect(() => {
    console.log(userId);

    if (userId) {
      AxiosInstance.get(`user/getcart/${userId}`)
        .then((res) => {
          setCart(res.data.cart);
          console.log(res.data);
          
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching cart", err);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) return <div className="p-6">Loading cart...</div>;
  if (!cart || cart.products.length === 0) return <div className="p-6">Your cart is empty.</div>;

  return (
   <>
   </>
  );

};

export default AddToCart;
