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
  import Footer from "../../components/footer/footer";
    import Faq from '../../components/Faq/Faq';



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

        <Row className="py-5 px-4 md:px-10 lg:px-20">
          <Column className="justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="card-slider py-5 md:py-10">
                <div>
                    <img src={(Blog_img)} alt="Image 1" width="100%"/>
                </div>
                <div className="card-text-area rounded-b-2xl px-3 pt-3 pb-7 content-center">
                    <p className='text-white text-xl font-medium py-2'>Updated on 8 sep 2024</p>
                    <h3 className="text-3xl font-semibold text-[#FFED05]">Top 10 Business Ideas to Grow</h3>
                </div>
            </div>

            <div className="card-slider py-5 md:py-10">
                <div>
                    <img src={(Blog_img)} alt="Image 1" width="100%"/>
                </div>
                <div className="card-text-area rounded-b-2xl px-3 pt-3 pb-7 content-center">
                    <p className='text-white text-xl font-medium py-2'>Updated on 8 sep 2024</p>
                    <h3 className="text-3xl font-semibold text-[#FFED05]">Top 10 Business Ideas to Grow</h3>
                </div>
            </div>

            <div className="card-slider py-5 md:py-10">
                <div>
                    <img src={(Blog_img)} alt="Image 1" width="100%"/>
                </div>
                <div className="card-text-area rounded-b-2xl px-3 pt-3 pb-7 content-center">
                    <p className='text-white text-xl font-medium py-2'>Updated on 8 sep 2024</p>
                    <h3 className="text-3xl font-semibold text-[#FFED05]">Top 10 Business Ideas to Grow</h3>
                </div>
            </div>

            <div className="card-slider py-5 md:py-10">
                <div>
                    <img src={(Blog_img)} alt="Image 1" width="100%"/>
                </div>
                <div className="card-text-area rounded-b-2xl px-3 pt-3 pb-7 content-center">
                    <p className='text-white text-xl font-medium py-2'>Updated on 8 sep 2024</p>
                    <h3 className="text-3xl font-semibold text-[#FFED05]">Top 10 Business Ideas to Grow</h3>
                </div>
            </div>

            <div className="card-slider py-5 md:py-10">
                <div>
                    <img src={(Blog_img)} alt="Image 1" width="100%"/>
                </div>
                <div className="card-text-area rounded-b-2xl px-3 pt-3 pb-7 content-center">
                    <p className='text-white text-xl font-medium py-2'>Updated on 8 sep 2024</p>
                    <h3 className="text-3xl font-semibold text-[#FFED05]">Top 10 Business Ideas to Grow</h3>
                </div>
            </div>

            <div className="card-slider py-5 md:py-10">
                <div>
                    <img src={(Blog_img)} alt="Image 1" width="100%"/>
                </div>
                <div className="card-text-area rounded-b-2xl px-3 pt-3 pb-7 content-center">
                    <p className='text-white text-xl font-medium py-2'>Updated on 8 sep 2024</p>
                    <h3 className="text-3xl font-semibold text-[#FFED05]">Top 10 Business Ideas to Grow</h3>
                </div>
            </div>
          </Column>
      </Row>

        <Footer />
    </>
  )
}

export default Courses
