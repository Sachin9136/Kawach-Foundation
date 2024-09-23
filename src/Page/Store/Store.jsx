import React, { useState } from 'react';
import Banner from "../../components/Banners/Banners";
import { Store_banner, } from "../../components/Img/ImportedImage";
import {
    Column,
    Heading,
    Row,
    Span,
    Wraper,
    Button,
  } from "../../components/ComponentsIndex";
  import Footer from "../../components/footer/footer";
  import ProductListing from "../../components/ProductListing/ProductListing";
  import Store_Footer from "../../components/Store_Footer/Store_Footer";



const Store = () => {

  return (
    <>
        <Row>
            <Banner 
                bannerImage={Store_banner}
                headingText="Store"
                textColor="#FFED05"
            />
        </Row>

        <ProductListing />
        <Store_Footer />

        <Footer />
    </>
  )
}

export default Store
