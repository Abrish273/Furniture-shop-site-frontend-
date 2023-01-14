import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const API_URL = "http://localhost:3500/chairs";

  const fetchItems = async () => {
    const response = await axios.get(API_URL).catch((err) => {
      console.log("Err", err);
    });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchItems();
  }, []);
  //console.log("localProducts:", products);

  return (
    <div>
      <div
        style={{
          marginTop: "150px",
          display: "flex",
          marginLeft: "40px",
          gap: "11px",
        }}
      >
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;
