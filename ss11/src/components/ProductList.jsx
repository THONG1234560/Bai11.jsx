import React, { useEffect, useState } from "react";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { PORT_BE } from "../../environment";
import { actionGetListProduct } from "../redux/actions/productAction";
import { override } from "../common/loading";
import MoonLoader from "react-spinners/MoonLoader";

const ProductList = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.product.listProduct);
    const [isLoading, setIsLoading] = useState(false);

    const handleGetProduct = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(`${PORT_BE}/products`);
            dispatch(actionGetListProduct(res.data));
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        handleGetProduct();
    }, []);

    return (
        <div className="max-w-xl border rounded shadow overflow-hidden">
            {isLoading && (
                <div className="bg-gray-500 opacity-65 flex inset-0 absolute">
                    <MoonLoader
                        loading={isLoading}
                        cssOverride={override}
                        size={50}
                        color="white"
                        aria-label="Loading Spinner"
                    />
                </div>
            )}
            <div className="bg-blue-600 text-white px-4 py-2 font-semibold">
                List Products
            </div>
            <div className="p-4 space-y-4">
                {state &&
                    state.map((product, index) => {
                        return (
                            <Item
                                data={product}
                                key={product.id || index}
                            ></Item>
                        );
                    })}
            </div>
        </div>
    );
};

export default ProductList;