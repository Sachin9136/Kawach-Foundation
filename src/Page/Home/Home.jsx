// import React from "react";
import React, { useState } from "react";
import {
  Column,
  Heading,
  Row,
  Span,
  Wraper,
  Button,
} from "../../components/ComponentsIndex";

import {banner,
about_us_sec,
Rectangle1,
Rectangle2,
Rectangle3,
Rectangle4,
Rectangle5,
Rectangle6,
Slider1,
Consultation,
Dental,
Doctor,
Stars,
Enviroment,mini_slider,gallery_img, dental_plus, plant_fill, awareness, doctor_health, education_book, women, health_care } from "../../components/Img/ImportedImage";

import Footer from "../../components/footer/footer";

import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  
  return (
    <> 
      <Row className="bg-no-repeat bg-cover h-[510px] lg:h-[633px]" style={{ backgroundImage: `url(${banner})` }}>
        <div className="absolute top-[200px] left-[30px] text-[#FFED05] lg:top-[270px] lg:left-[50px]">
          <Heading className={"text-4xl md:text-5xl lg:text-7xl font-bold"}>
            Transforming Health,
            <br /> Caring for Communities
          </Heading>
          <Column className="flex mb-10 lg:mb-24">
            <Heading className=" text-4xl font-semibold text-white mt-7">
              Take a step to donate needy
            </Heading>
          </Column>
         
         <Link to={"/teacher-registration"}><Button children={"Donate Now"} className="px-8 py-5 mt-2 md:mt-3 lg:mt-5 text-xl"/></Link>
        </div>
      </Row>

      <Row className="bg-white py-10 px-4">
      <h2 className="text-4xl text-center font-bold text-black mb-4">About Us</h2>
      <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10">
        {/* Image Section */}
        <div className="md:w-2/5 w-full">
          <img src={about_us_sec} alt="" width="100%" />
        </div>

        {/* Text Section */}
        <div className="md:w-3/5 w-full">
          
          <p className="text-2xl pb-2 text-gray-700 mb-6">
            In the bustling landscape of India, where health disparities can be
            stark and access to healthcare is often a luxury rather than a
            necessity, organizations like Kawach Foundation stand out as beacons
            of hope. Founded on the principle of serving the community and
            ensuring better health outcomes for all, Kawach Foundation operates
            as a non-profit organization dedicated to providing regular
            check-ups and conducting awareness camps throughout the country.
          </p>
          <p className="text-2xl pb-2 text-gray-700 mb-6">
            At Kawach, we believe in the synergy of good health, health
            education, and a green environment. Regular check-ups empower
            individuals to thrive in harmony with their well-being and
            surroundings.
          </p>
          <p className="text-2xl pb-7 text-gray-700 mb-6">
            We have the power to change. By recognizing health as invaluable,
            investing in healthcare, and addressing underlying factors shaping
            health and inequality, we forge a healthier nation.
          </p>

          {/* Button */}
          <div>
            <a href="/teacher-registration">
            <Button className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300">
              Know More About Us
            </Button>
            </a>
          </div>
        </div>
      </div>
      </Row>

      <Row>
        <Heading className={"text-4xl font-bold text-center my-8"}>
          Our Works
        </Heading>
      </Row>

<Row className="bg-green-700">
  {/* First Column */}
  <Column className="w-full h-auto sm:h-[300px]">
    <div className="px-3 py-5 grid grid-cols-12 gap-4">
      <div className="col-span-12 sm:col-span-5">
        <img className="our-works1 w-full" src={Rectangle1} alt="" />
      </div>
      <div className="col-span-12 sm:col-span-4">
        <img className="our-works2 w-full" src={Rectangle2} alt="" />
      </div>
      <div className="col-span-12 sm:col-span-3">
        <img className="our-works3 w-full" src={Rectangle3} alt="" />
      </div>
    </div>
  </Column>

  {/* Second Column */}
  <Column className="w-full h-auto">
    <div className="px-3 py-5 grid grid-cols-12 gap-4">
      <div className="col-span-12 sm:col-span-4">
        <img className="our-works4 w-full" src={Rectangle4} alt="" />
      </div>
      <div className="col-span-12 sm:col-span-4">
        <img className="our-works5 w-full" src={Rectangle5} alt="" />
      </div>
      <div className="col-span-12 sm:col-span-4">
        <img className="our-works6 w-full" src={Rectangle6} alt="" />
      </div>
    </div>
  </Column>
</Row>



      <Row className="py-5">
          <Heading className={"our-works-heading text-4xl font-bold text-center py-8"}>
          Our Impact
          </Heading>
          <Column className="flex">
          <div className="our-impact-carousel owl-carousel owl-theme">
            <div className="item">
              <img src={Slider1} alt="Image 1"/>
            </div>
            <div className="item">
              <img src={Slider1} alt="Image 1"/>
            </div>
            <div className="item">
              <img src={Slider1} alt="Image 1"/>
            </div>
          </div>
          </Column>
      </Row>

      <Row className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <Column className="text-center py-3">
          <div className="flex justify-center">
            <img src={Dental} alt="Image 1" width="80px" />
          </div>
          <h3 className="text-2xl font-bold py-3">Dental Treatment</h3>
          <p className="text-xl font-medium">
            <span className="green-numbers">10K+</span> saved tooth for <br />{" "}
            better Digestion
          </p>
        </Column>
        <Column className="text-center py-3">
          <div className="flex justify-center pb-3 ">
            <img src={Doctor} alt="Image 1" width="80px" />
          </div>
          <h3 className="text-2xl	 font-bold py-3">Dental Treatment</h3>
          <p className="text-xl font-medium">
            <span className="green-numbers">50K+</span> Persons informed <br />{" "}
            with health care tips
          </p>
        </Column>
        <Column className="text-center py-3">
          <div className="flex justify-center pb-3">
            <img src={Stars} alt="Image 1" width="80px" />
          </div>
          <h3 className="text-2xl	 font-bold py-3">Dental Treatment</h3>
          <p className="text-xl font-medium">
            <span className="green-numbers">4.6</span> Star rating by Patients
          </p>
        </Column>
        <Column className="text-center py-3">
          <div className="flex justify-center pb-3">
            <img src={Consultation} alt="Image 1" width="80px" />
          </div>
          <h3 className="text-2xl	 font-bold py-3">Dental Treatment</h3>
          <p className="text-xl font-medium">
            <span className="green-numbers">5K+</span> Patient Saving
          </p>
        </Column>
      </Row>

      <Row className="flex justify-center">
        <Column className="cards-column py-2">
          <div className="text-center cards-card">
            <div className="flex justify-center pb-3 ">
              <img src={Enviroment} alt="Image 1" width="80px" />
            </div>
            <h3 className="text-2xl font-bold py-3">Environment</h3>
            <p className="text-xl font-medium">
              <span className="green-numbers">Plantation</span> on road side
            </p>
          </div>
        </Column>
      </Row>

      <Row className="py-5">
          <Heading className={"our-works-heading text-4xl font-bold text-center pt-10 pb-0"}>
          Our Stories
          </Heading>
          <Column className="flex justify-center">
          <div className="owl-carousel our-stories-carousel owl-theme">
            <div className="card-slider py-10">
              <div>
                <img src={(mini_slider)} alt="Image 1"/>
              </div>
              <div className="card-text-area rounded-b-lg px-3 pt-3 pb-7">
                <h3 className="text-2xl font-semibold card-slider-title">Nirmal Anand, 82 years</h3>
                <p className="text-xl font-medium py-2">She found new place to call home after her son and husband passed away. Nirmal has</p>
              </div>
              <div className="flex justify-center -mt-7">
                <Button 
                    type="button"
                    className="rounded-lg py-2 px-5 text-md font-semibold text-black"
                    id="menu-button"
                  >
                  Read More
                </Button>
              </div>
            </div>
            <div className="card-slider py-10">
              <div>
                <img src={(mini_slider)} alt="Image 1"/>
              </div>
              <div className="card-text-area rounded-b-lg px-3 pt-3 pb-7">
                <h3 className="text-2xl font-semibold card-slider-title">Nirmal Anand, 82 years</h3>
                <p className="text-xl font-medium py-2">She found new place to call home after her son and husband passed away. Nirmal has</p>
              </div>
              <div className="flex justify-center -mt-7">
                <Button 
                    type="button"
                    className="rounded-lg py-2 px-5 text-md font-semibold text-black"
                    id="menu-button"
                  >
                  Read More
                </Button>
              </div>
            </div>
            <div className="card-slider py-10">
              <div>
                <img src={(mini_slider)} alt="Image 1"/>
              </div>
              <div className="card-text-area rounded-b-lg px-3 pt-3 pb-7">
                <h3 className="text-2xl font-semibold card-slider-title">Nirmal Anand, 82 years</h3>
                <p className="text-xl font-medium py-2">She found new place to call home after her son and husband passed away. Nirmal has</p>
              </div>
              <div className="flex justify-center -mt-7">
                <Button 
                    type="button"
                    className="rounded-lg py-2 px-5 text-md font-semibold text-black"
                    id="menu-button"
                  >
                  Read More
                </Button>
              </div>
            </div>
            <div className="card-slider py-10">
              <div>
                <img src={(mini_slider)} alt="Image 1"/>
              </div>
              <div className="card-text-area rounded-b-lg px-3 pt-3 pb-7">
                <h3 className="text-2xl font-semibold card-slider-title">Nirmal Anand, 82 years</h3>
                <p className="text-xl font-medium py-2">She found new place to call home after her son and husband passed away. Nirmal has</p>
              </div>
              <div className="flex justify-center -mt-7">
                <Button 
                    type="button"
                    className="rounded-lg py-2 px-5 text-md font-semibold text-black"
                    id="menu-button"
                  >
                  Read More
                </Button>
              </div>
            </div>
            <div className="card-slider py-10">
              <div>
                <img src={(mini_slider)} alt="Image 1"/>
              </div>
              <div className="card-text-area rounded-b-lg px-3 pt-3 pb-7">
                <h3 className="text-2xl font-semibold card-slider-title">Nirmal Anand, 82 years</h3>
                <p className="text-xl font-medium py-2">She found new place to call home after her son and husband passed away. Nirmal has</p>
              </div>
              <div className="flex justify-center -mt-7">
                <Button 
                    type="button"
                    className="rounded-lg py-2 px-5 text-md font-semibold text-black"
                    id="menu-button"
                  >
                  Read More
                </Button>
              </div>
            </div>
            <div className="card-slider py-10">
              <div>
                <img src={(mini_slider)} alt="Image 1"/>
              </div>
              <div className="card-text-area rounded-b-lg px-3 pt-3 pb-7">
                <h3 className="text-2xl font-semibold card-slider-title">Nirmal Anand, 82 years</h3>
                <p className="text-xl font-medium py-2">She found new place to call home after her son and husband passed away. Nirmal has</p>
              </div>
              <div className="flex justify-center -mt-7">
                <Button 
                    type="button"
                    className="rounded-lg py-2 px-5 text-md font-semibold text-black"
                    id="menu-button"
                  >
                  Read More
                </Button>
              </div>
            </div>
            <div className="card-slider py-10">
              <div>
                <img src={(mini_slider)} alt="Image 1"/>
              </div>
              <div className="card-text-area rounded-b-lg px-3 pt-3 pb-7">
                <h3 className="text-2xl font-semibold card-slider-title">Nirmal Anand, 82 years</h3>
                <p className="text-xl font-medium py-2">She found new place to call home after her son and husband passed away. Nirmal has</p>
              </div>
              <div className="flex justify-center -mt-7">
                <Button 
                    type="button"
                    className="rounded-lg py-2 px-5 text-md font-semibold text-black"
                    id="menu-button"
                  >
                  Read More
                </Button>
              </div>
            </div>
            <div className="card-slider py-10">
              <div>
                <img src={(mini_slider)} alt="Image 1"/>
              </div>
              <div className="card-text-area rounded-b-lg px-3 pt-3 pb-7">
                <h3 className="text-2xl font-semibold card-slider-title">Nirmal Anand, 82 years</h3>
                <p className="text-xl font-medium py-2">She found new place to call home after her son and husband passed away. Nirmal has</p>
              </div>
              <div className="flex justify-center -mt-7">
                <Button 
                    type="button"
                    className="rounded-lg py-2 px-5 text-md font-semibold text-black"
                    id="menu-button"
                  >
                  Read More
                </Button>
              </div>
            </div>
            
          </div>
          </Column>
      </Row>

      <Row className="py-5">
          <Heading className={"text-4xl font-bold text-center pt-5 pb-5"}>
            Gallery
          </Heading>
          <Heading className={"text-3xl font-semibold text-center pb-10 text-[#06B13D]"}>
            Visual Journey
          </Heading>
          <Column className="flex px-20">
            <div className="gallery-carousel owl-carousel owl-theme">
              <div className="item">
                <img src={gallery_img} alt="Image 1"/>
              </div>
              <div className="item">
                <img src={gallery_img} alt="Image 1"/>
              </div>
              <div className="item">
                <img src={gallery_img} alt="Image 1"/>
              </div>
              <div className="item">
                <img src={gallery_img} alt="Image 1"/>
              </div>
              <div className="item">
                <img src={gallery_img} alt="Image 1"/>
              </div>
            </div>
          </Column>
      </Row>

      <Row className="py-5">
          <Heading className={"text-3xl font-bold text-center pt-5 pb-5"}>
            Our Programme & Sevices
          </Heading>
          <Heading className={"text-2xl font-medium text-center pb-10 px-2"}>
            Our program prioritizes good health through holistic approaches,<br /> including education, preventive care, and access to essential medical <br /> services, ensuring well-being for all.
          </Heading>
      </Row>


      <Row className="py-5">
          <Column className="px-5 md:px-20">
            <div className="block lg:flex justify-between lg:justify-evenly">
              <div className="block border-r-2-none lg:border-r-2 border-[#1E1E1E] mb-5">
                <Wraper className="w-20 ml-3">
                    <img src={health_care} alt="Image 1" />
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className="font-bold text-3xl pb-5">
                    Dental Care
                  </Heading>
                  <ul className="list-disc">
                    <li className="text-2xl text-bold ml-7">Sawasthya Bharat</li>
                    <li className="text-2xl text-bold ml-7">Kawach Health Care Camps </li>
                    <li className="text-2xl text-bold ml-7">Dental Treatment</li>
                    <li className="text-2xl text-bold ml-7">Awareness programme</li>
                  </ul>
                </div>
              </div>
              <div className="block border-r-2-none lg:border-r-2 border-[#1E1E1E] mb-5">
                <Wraper className="w-20 ml-3">
                    <img src={education_book} alt="Image 1" />
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className="font-bold text-3xl pb-5">
                  Education
                  </Heading>
                  <ul className="list-disc">
                    <li className="text-2xl text-bold ml-7">Sarb Shiksha</li>
                    <li className="text-2xl text-bold ml-7">Mithila Painting Competition</li>
                    <li className="text-2xl text-bold ml-7">Shashakt Asha</li>
                    <li className="text-2xl text-bold ml-7">Career Counselling</li>
                  </ul>
                </div>
              </div>
              <div className="block">
                <Wraper className="w-20 ml-3">
                    <img src={women} alt="Image 1" />
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className="font-bold text-3xl pb-5">
                  Women Empowerment
                  </Heading>
                  <ul className="list-disc">
                    <li className="text-2xl text-bold ml-7">Promoting Mental Health</li>
                    <li className="text-2xl text-bold ml-7">Menstural Milestone and Care</li>
                    <li className="text-2xl text-bold ml-7">Psychlogical Immunity During Disaster</li>
                    <li className="text-2xl text-bold ml-7">Girl Education</li>
                    <li className="text-2xl text-bold ml-7">Women Career Counselling</li>
                  </ul>
                </div>
              </div>
            </div>
          </Column>
      </Row>

      <Row className="py-5">
          <Heading className={"text-4xl font-bold text-center pt-5 pb-5"}>
            Partners
          </Heading>
          <Column className="flex px-5 md:px-20">
            <div className="partner-carousel owl-carousel owl-theme">
              <div className="block p-5 rounded-lg shadow-lg h-72" style={{backgroundColor: "#06B13D"}}>
                <Wraper className="flex justify-center">
                  <div className="flex align-center justify-center w-24">
                    <img src={dental_plus} alt="Image 1" />
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className="text-white font-semibold text-3xl text-center flex justify-center">
                    Dental Care
                  </Heading>
                  <Heading className="font-medium text-2xl pt-3 text-center flex justify-center">
                  K.K.Dental care & Implant Center poly clinic
                  </Heading>
                </div>
              </div>
              <div className="block p-5 rounded-lg shadow-lg h-72" style={{backgroundColor: "#06B13D"}}>
                <Wraper className="flex justify-center">
                  <div className="flex align-center justify-center w-24">
                    <img src={plant_fill} alt="Image 1" />
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className="text-white font-semibold text-3xl text-center flex justify-center">
                  Environment
                  </Heading>
                  <Heading className="font-medium text-2xl pt-3 text-center flex justify-center">
                  Akil  Bhartiya Jan Hit Samiti
                  </Heading>
                </div>
              </div>
              <div className="block p-5 rounded-lg shadow-lg h-72" style={{backgroundColor: "#06B13D"}}>
                <Wraper className="flex justify-center">
                  <div className="flex align-center justify-center w-24">
                    <img src={awareness} alt="Image 1" />
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className="text-white font-semibold text-3xl text-center flex justify-center">
                  Awareness Programme
                  </Heading>
                  <Heading className="font-medium text-2xl pt-3 text-center flex justify-center">
                  Kendriya Vidhyalay olf
                  </Heading>
                </div>
              </div>
              <div className="block p-5 rounded-lg shadow-lg h-72" style={{backgroundColor: "#06B13D"}}>
                <Wraper className="flex justify-center">
                  <div className="flex align-center justify-center w-24">
                    <img src={doctor_health} alt="Image 1" />
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className="text-white font-semibold text-3xl text-center flex justify-center">
                  Health Camps
                  </Heading>
                  <Heading className="font-medium text-2xl pt-3 text-center flex justify-center">
                  Ajayshree Foundation
                  </Heading>
                </div>
              </div>
              <div className="block p-5 rounded-lg shadow-lg h-72" style={{backgroundColor: "#06B13D"}}>
                <Wraper className="flex justify-center">
                  <div className="flex align-center justify-center w-24">
                    <img src={plant_fill} alt="Image 1" />
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className="text-white font-semibold text-3xl text-center flex justify-center">
                  Environment
                  </Heading>
                  <Heading className="font-medium text-2xl pt-3 text-center flex justify-center">
                  Akil  Bhartiya Jan Hit Samiti
                  </Heading>
                </div>
              </div>
            </div>
          </Column>
      </Row>

      <Footer />
      </>

    
  );


      
};

export default Home;
