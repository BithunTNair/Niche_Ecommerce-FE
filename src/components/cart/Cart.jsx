import React, { useEffect, useState } from 'react';
import AxiosInstance from '../../config/Api_call';
import { Button } from '../reusable/Button';
import { useSelector } from 'react-redux';

const AddToCart = () => {
  const user = useSelector((state) => state.user);
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const userId= '6828a4daa9945a09834c8cc0';

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
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
      <div className="space-y-6">
        {cart.products.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between bg-white shadow rounded-xl p-4">
            <div className="flex items-center gap-4">
              <img
                src={`/assets/products/img${idx + 1}.jpg`} // optional: use backend img if available
                alt={item.productId?.title || "Product"}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.productId?.title}</h3>
                <p className="text-sm text-gray-500">{item.productId?.category}</p>
                <p className="text-sm text-gray-500">Status: {item.status}</p>
              </div>
            </div>
            <div className="text-right">
              <p>Qty: {item.quantity}</p>
              <p className="font-semibold text-[var(--yellow)]">
                ₹{(item.productId?.price || 0) * item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-8 text-lg font-semibold">
        Total: ₹{cart.totalPrice}
      </div>

      <div className="text-right mt-4">
        <Button className="rounded-xl px-6">Proceed to Checkout</Button>
      </div>
    </div>
  );

};

export default AddToCart;
