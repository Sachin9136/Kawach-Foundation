import React, { useState } from 'react';
import Banner from "../../components/Banners/Banners";
import { Course_blog_banner, } from "../../components/Img/ImportedImage";
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
                headingText="Courses"
                textColor="#FFED05"
            />
        </Row>

        <Row className='px-4 md:px-20 mb-5'>
            <Heading className="text-2xl md:text-4xl font-bold text-center mt-10 mb-5">
                List of Courses and Career Options After 12th 
            </Heading>
            <p className='text-xl md:text-2xl my-3'>One of the biggest decisions of your life is education. What you learn is the ultimate determinant of what you become. From kindergarten to your higher secondary, you've surpassed all the classes with the decisions of your parents and all the influences. But it’s now time to make your own choices after successfully completing your 12th board exams. What to do after 12th might be your lingering question of all time. Deciding on courses after 12th science and navigating career options afterwards might feel like a brain-bending task.</p>
            <p className='text-xl md:text-2xl '>One of the biggest decisions of your life is education. What you learn is the ultimate determinant of what you become. From kindergarten to your higher secondary, you've surpassed all the classes with the decisions of your parents and all the influences. But it’s now time to make your own choices after successfully completing your 12th board exams. What to do after 12th might be your lingering question of all time. Deciding on courses after 12th science and navigating career options afterwards might feel like a brain-bending task.</p>
        </Row>

        <Row className='px-4 md:px-20 mb-5'>
            <Heading className="text-2xl md:text-4xl font-bold mt-10 mb-5">
                List of Courses after 12th
            </Heading>
            <ul className='list-disc ml-8'>
                <li className='text-lg md:text-2xl font-bold my-8 underline underline-offset-4'>Bachelor of Dental Surgery (BDS)</li>
                <li className='text-lg md:text-2xl font-bold my-8 underline underline-offset-4'>Bachelor of Pharmacy (B.Pharm)</li>
                <li className='text-lg md:text-2xl font-bold my-8 underline underline-offset-4'>Bachelor of Science (B.Sc) </li>
                <li className='text-lg md:text-2xl font-bold my-8 underline underline-offset-4'>Bachelor of Computer Applications (BCA)</li>
            </ul>
        </Row>

        <Row className='px-4 md:px-20 mb-5'>
            <Heading className="text-4xl font-bold mt-10 mb-5">
                FAQ
            </Heading>
            <Faq/>
        </Row>

        <Footer />
    </>
  )
}

export default Courses
