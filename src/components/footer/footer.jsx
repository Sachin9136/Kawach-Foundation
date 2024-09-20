import React from 'react';
import logo from "../../assets/Img/logo.svg";
import {
    Column,
    Heading,
    Row,
    Span,
    Wraper,
    Button,
  } from "../../components/ComponentsIndex";

const footer = () => {
  return (
    <Row>
      {/* Top Section with Buttons */}
      <Wraper className="bg-green-100 py-20 px-5 md:px-14 lg:px-20 flex justify-between items-center">
        <Button
            children={"Donate Now"}
            className=" text-black text-xl md:text-2xl lg:text-5xl font-bold py-2 md:py-7 px-2 md:px-12 lg:px-20 rounded-md shadow-lg hover:shadow-xl" >
        </Button>
        <Button 
            children={"Volunteer"}
            className=" text-black text-xl md:text-2xl lg:text-5xl font-bold py-2 md:py-7 px-2 md:px-12 lg:px-24 rounded-md shadow-lg hover:shadow-xl">
        </Button>
      </Wraper>

      {/* Footer Section */}
      <footer className=" text-white px-4 md:px-10 lg:px-20" 
      style={{ backgroundColor: "#06B13D" }}>
        <Row className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Logo and Copyright */}
          <Wraper className="col-span-1 py-3">
            <img src={logo} alt="Logo" className="mb-4" width="40%"/>
            <Span className="text-black text-xl font-normal">Copyright © 2020 BBL Services Pvt. Ltd.</Span> <br />
            <Span className="text-black text-xl font-normal">All Rights Reserved.</Span>
          </Wraper>

          {/* Quick Links */}
          <div className="col-span-1 py-4 md:py-5 lg:py-10">
            <h4 className="text-black font-bold text-3xl mb-4">Quick Links</h4>
            <ul>
              <li className='py-1'><a href="#home" className="text-[#FFED05] hover:underline text-xl font-medium">Home</a></li>
              <li className='py-1'><a href="#about" className="text-[#FFED05] hover:underline text-xl font-medium">About Us</a></li>
              <li className='py-1'><a href="#services" className="text-[#FFED05] hover:underline text-xl font-medium">Programme & Service</a></li>
              <li className='py-1'><a href="#get-involved" className="text-[#FFED05] hover:underline text-xl font-medium">Get Involved</a></li>
              <li className='py-1'><a href="#news" className="text-[#FFED05] hover:underline text-xl font-medium">News Updates</a></li>
              <li className='py-1'><a href="#store" className="text-[#FFED05] hover:underline text-xl font-medium">Store</a></li>
              <li className='py-1'><a href="#contact" className="text-[#FFED05] hover:underline text-xl font-medium">Contact Us</a></li>
            </ul>
          </div>

          {/* Our Works */}
          <div className="col-span-1 py-4 md:py-5 lg:py-10">
            <h4 className="text-black font-bold text-3xl mb-4">Our Works</h4>
            <ul>
              <li className='py-1'><a href="#works" className="text-[#FFED05] hover:underline text-xl my-20 font-medium">Our Works</a></li>
              <li className='py-1'><a href="#impact" className="text-[#FFED05] hover:underline text-xl my-20 font-medium">Our Impact</a></li>
              <li className='py-1'><a href="#stories" className="text-[#FFED05] hover:underline text-xl my-20 font-medium">Our Stories</a></li>
              <li className='py-1'><a href="#partners" className="text-[#FFED05] hover:underline text-xl my-20 font-medium">Partners</a></li>
              <li className='py-1'><a href="#gallery" className="text-[#FFED05] hover:underline text-xl my-20 font-medium">Gallery</a></li>
            </ul>
          </div>
        </Row>
      </footer>
    </Row>
  )
}

export default footer
