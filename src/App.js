import React from "react";
import Header from "./containers/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProducDetails";
import Footer from "./containers/footer/Footer";
import Shop from "./containers/shop/shop";
import Categories from "./containers/Categories";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Shop />
        <Routes>
          <Route path="/" element={<Categories />} exact />
          <Route path="/produt" element={<ProductListing />} exact />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
