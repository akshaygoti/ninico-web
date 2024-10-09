import { BrowserRouter, Routes, Route } from "react-router-dom"

import React from "react";

import TopShopLink from "./Component/TopShopLink/TopShopLink";
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";

import HomePage from "./Pages/HomePage/HomePage";
import Shop from "./Pages/ShopPage/Shop/Shop";
import Error from "./Pages/Page/Error/Error";
import Footer from "./Component/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import SignIn from "./Pages/Page/SignIn/SignIn";
import Wishlist from "./Pages/Page/Wishlist/Wishlist";
import ShopDetails from "./Pages/ShopPage/ShopDetails/ShopDetails";
import About from "./Pages/Page/About/About";
import Cart from "./Pages/ShopPage/Cart/Cart";
import Blog from "./Pages/Blog/Blog";

// redux
import { Provider } from "react-redux";
import Store from "./Store";

function App() {
  return (

    <div className="App">
      <Provider store={Store}>

        <BrowserRouter>

          <TopShopLink />
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="*" element={<Error />} />
            <Route path="/shopDetails/:id" element={<ShopDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        <Footer />

        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
