import React from "react";

const Item = ({ data }) => {
    return (
        <div key={data.id} className="flex items-center gap-4 border-b pb-4">
            <img
                src={data.image}
                alt={data.name}
                className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
                <h2 className="font-semibold">{data.name}</h2>
                <p className="text-sm text-gray-600">{data.detail}</p>
            </div>
            <div className="text-center">
                <div
                    className={`text-white text-sm px-2 py-1 rounded font-semibold ${
                        data.disabled
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-red-500"
                    }`}
                >
                    {data.price} USD
                </div>
                <input
                    type="number"
                    min="0"
                    value={data.quantity}
                    className="w-12 mt-2 border rounded text-center text-sm"
                    disabled={data.disabled}
                />
            </div>
        </div>
    );
};

export default Item;