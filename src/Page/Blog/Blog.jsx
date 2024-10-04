import React, { useState } from 'react';
import Banner from "../../components/Banners/Banners";
import { Blog_img, Course_blog_banner } from "../../components/Img/ImportedImage";
import {
    Column,
    Heading,
    Row,
    Span,
    Wraper,
    Button,
  } from "../../components/ComponentsIndex";

  import Blog_api from "../../components/Blog_api/Blog_Api";
  import Footer from "../../components/footer/footer";



const Courses = () => {

  return (
    <>
        <Row>
            <Banner 
                bannerImage={Course_blog_banner}
                headingText="Blogs"
                textColor="#FFED05"
            />
        </Row>

        <Blog_api/>

        <Footer />
    </>
  )
}

export default Courses
