import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 4,
      name: "Cake",
      price: 10,
      quantityOrder: 15,
    },
    {
      id: 2,
      name: "Hamburger",
      price: 15,
      quantityOrder: 32,
    },
  ]);

  const onUpdate = (id, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantityOrder: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const onDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="max-w-2xl mt-6 border border-red-200 bg-red-50 rounded p-4">
      <h2 className="text-red-800 font-semibold mb-4 text-lg bg-red-00">
        Your Cart
      </h2>

      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-red-100">
            <th className="border px-2 py-1 text-center">STT</th>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1 text-center">Price</th>
            <th className="border px-2 py-1 text-center">Quantity</th>
            <th className="border px-2 py-1 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart &&
            cart.map((item, index) => {
              return (
                <tr key={item.id || index}>
                  <td className="border px-2 py-1 text-center">{index + 1}</td>
                  <td className="border px-2 py-1">{item.name}</td>
                  <td className="border px-2 py-1 text-center">
                    {item.price} USD
                  </td>
                  <td className="border px-2 py-1 text-center">
                    <input
                      type="number"
                      value={item.quantityOrder}
                      className="w-16 border rounded text-center"
                      readOnly
                    />
                  </td>
                  <td className="border px-2 py-1 text-center space-x-2">
                    <button
                      className="bg-blue-400 text-white px-2 py-1 rounded text-xs"
                      onClick={() => onUpdate(item.id, item.quantityOrder + 1)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                      onClick={() => onDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <div className="mt-4 flex justify-between items-center text-sm">
        <span className="text-gray-700">
          There are <strong>2</strong> items in your shopping cart.
        </span>
        <span className="text-red-600 font-bold text-lg">630 USD</span>
      </div>
    </div>
  );
};

export default Cart;
