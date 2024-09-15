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
import banner from "../../components/Img/heroImg.png";
import about_us_sec from "../../components/Img/about-us-sec.png";
import Rectangle1 from "../../components/Img/Rectangle1.png";
import Rectangle2 from "../../components/Img/Rectangle2.png";
import Rectangle3 from "../../components/Img/Rectangle3.png";
import Rectangle4 from "../../components/Img/Rectangle4.png";
import Rectangle5 from "../../components/Img/Rectangle5.png";
import Rectangle6 from "../../components/Img/Rectangle6.png";
import Slider1 from "../../components/Img/Slider1.png";
import Consultation from "../../components/Img/consultation-consult.png";
import Dental from "../../components/Img/dental-plus-svgrepo-com.png";
import Doctor from "../../components/Img/doctor-health.png";
import Stars from "../../components/Img/stars-rate-svgrepo-com.png";
import Enviroment from "../../components/Img/enviroment-green.png";
import mini_slider from "../../components/Img/mini-slider.png";
import "./Home.css";

function Home() {

  return (
    <>
      <Row style={{ backgroundImage: `url(${banner})`, height: '633px'}}>
        <div className={"banner-text"}>
          <Heading className={"text-6xl font-bold"}>
          Transforming Health,<br /> Caring for Communities
          </Heading>
          <Column className="flex">
              <Heading className=" text-3xl font-semibold text-white mt-3">
                Take a step to donate needy
              </Heading>
          </Column>
          <Button 
                type="button"
                className="banner-button flex items-center justify-center rounded-sm py-4 px-5 text-md font-semibold bg-amber-300 text-black"
                id="menu-button"
              >
              Donate Now
          </Button>
        </div>
      </Row>
      <Row className="px-3">
          <Heading className={"text-4xl font-bold py-5 mt-5 text-center"}>
          About Us
          </Heading>
          <Column className="flex px-5">
              <div className="px-3">
                <img src={(about_us_sec)} alt="" width="100%"/>
              </div>
              <div className=" px-3">
                <p className="text-2xl pb-3">In the bustling landscape of India, where health disparities can be stark and access to healthcare is often a luxury rather than a necessity, organizations like Kawach Foundation stand out as beacons of hope. Founded on the principle of serving the community and ensuring better health outcomes for all, Kawach Foundation operates as a non-profit organization dedicated to providing regular check-ups and conducting awareness camps throughout the country.</p>
                <p className="text-2xl pb-3">At Kawach, we believe in the synergy of good health, health education, and a green environment. Regular check-ups empower individuals to thrive in harmony with their well-being and surroundings.</p>
                <p className="text-2xl pb-3">We have the power to change. By recognizing health as invaluable, investing in healthcare, and addressing underlying factors shaping health and inequality, we forge a healthier nation.</p>
                <Button 
                  type="button"
                  className="About-us-sec-button flex items-center justify-center rounded-sm py-4 px-5 text-md font-semibold bg-amber-300 text-black"
                  id="menu-button"
                  >
                  Know More About Us
                </Button>
              </div>
          </Column>
      </Row>

      <Row>
          <Heading className={"our-works-heading text-4xl font-bold text-center"}>
          Our Works
          </Heading>
      </Row>

      <Row style={{ backgroundColor: "rgba(6, 177, 61, 1)", padding: "15px 10px" }}>
          <Column style={{ height: '300px'}} className="flex">
              <div className="px-3 columns-3">
                <img className="our-works1" src={(Rectangle1)} alt="" width=""/>
                <img className="our-works2" src={(Rectangle2)} alt="" width=""/>
                <img className="our-works3" src={(Rectangle3)} alt="" width=""/>
              </div>
          </Column>
          <Column className="flex">
              <div className="px-3 columns-3">
                <img className="our-works4" src={(Rectangle4)} alt="" width="100%"/>
                <img className="our-works5" src={(Rectangle5)} alt="" width="100%"/>
                <img className="our-works6" src={(Rectangle6)} alt="" width="100%"/>
              </div>
          </Column>
      </Row>

      <Row className="py-5">
          <Heading className={"our-works-heading text-4xl font-bold text-center"}>
          Our Impact
          </Heading>
          <Column className="flex">
          <div className="our-impact-carousel owl-carousel owl-theme">
            <div className="item">
              <img src={(Slider1)} alt="Image 1"/>
            </div>
            <div className="item">
              <img src={(Slider1)} alt="Image 1"/>
            </div>
            <div className="item">
              <img src={(Slider1)} alt="Image 1"/>
            </div>
          </div>
          </Column>
      </Row>

      <Row className="flex justify-center">
      <Column className="columns-4 cards-column">
            <div className="text-center cards-card">
              <div className="flex justify-center pb-3 ">
                <img src={(Dental)} alt="Image 1" width="100px"/>
              </div>
              <h3 className="text-3xl font-bold py-3">Dental Treatment</h3>
              <p className="text-xl font-medium"><span className="green-numbers">10K+</span> saved tooth for <br /> better Digestion</p>
            </div>
            <div className="text-center cards-card">
              <div className="flex justify-center pb-3 ">
                <img src={(Doctor)} alt="Image 1" width="100px"/>
              </div>
              <h3 className="text-3xl	 font-bold py-3">Dental Treatment</h3>
              <p className="text-xl font-medium"><span className="green-numbers">50K+</span> Persons informed <br /> with health care tips</p>
            </div>
            <div className="text-center cards-card">
              <div className="flex justify-center pb-3">
              <img src={(Stars)} alt="Image 1" width="100px"/>
              </div>
              <h3 className="text-3xl	 font-bold py-3">Dental Treatment</h3>
              <p className="text-xl font-medium"><span className="green-numbers">4.6</span> Star rating by Patients</p>
            </div>
            <div className="text-center cards-card">
              <div className="flex justify-center pb-3">
                <img src={(Consultation)} alt="Image 1" width="100px"/>
              </div>
              <h3 className="text-3xl	 font-bold py-3">Dental Treatment</h3>
              <p className="text-xl font-medium"><span className="green-numbers">5K+</span> Patient Saving</p>
            </div>
          </Column>
      </Row>

      <Row className="flex justify-center">
        <Column className=" cards-column">
            <div className="text-center cards-card">
              <div className="flex justify-center pb-3 ">
                <img src={(Enviroment)} alt="Image 1" width="100px"/>
              </div>
              <h3 className="text-3xl font-bold py-3">Environment</h3>
              <p className="text-xl font-medium"><span className="green-numbers">Plantation</span> on road side </p>
            </div>
          </Column>
      </Row>

      <Row className="py-5">
          <Heading className={"our-works-heading text-4xl font-bold text-center"}>
          Our Stories
          </Heading>
          <Column className="flex justify-center">
          <div className="owl-carousel our-stories-carousel owl-theme">
            <div className="card-slider">
              <div>
                <img src={(mini_slider)} alt="Image 1"/>
              </div>
              <div className="card-text-area px-3 py-3">
                <h3 className="text-2xl font-semibold card-slider-title">Nirmal Anand, 82 years</h3>
                <p className="text-xl font-medium py-2">She found new place to call home after her son and husband passed away. Nirmal has</p>
                <Button 
                  type="button"
                  className="absolute rounded-lg py-2 px-5 text-md font-semibold text-black"
                  id="menu-button"
                >
                Read More
              </Button>
              </div>
            </div>
            <div className="card-slider">
              <div>
                <img src={(mini_slider)} alt="Image 1"/>
              </div>
              <div className="card-text-area px-3 py-3">
                <h3 className="text-2xl font-semibold card-slider-title">Nirmal Anand, 82 years</h3>
                <p className="text-xl font-medium py-2">She found new place to call home after her son and husband passed away. Nirmal has</p>
                <Button 
                  type="button"
                  className="absolute rounded-lg py-2 px-5 text-md font-semibold text-black"
                  id="menu-button"
                >
                Read More
              </Button>
              </div>
            </div>
            <div className="card-slider">
              <div>
                <img src={(mini_slider)} alt="Image 1"/>
              </div>
              <div className="card-text-area px-3 py-3">
                <h3 className="text-2xl font-semibold card-slider-title">Nirmal Anand, 82 years</h3>
                <p className="text-xl font-medium py-2">She found new place to call home after her son and husband passed away. Nirmal has</p>
                <Button 
                  type="button"
                  className="absolute rounded-lg py-2 px-5 text-md font-semibold text-black"
                  id="menu-button"
                >
                Read More
              </Button>
              </div>
            </div>
            <div className="card-slider">
              <div>
                <img src={(mini_slider)} alt="Image 1"/>
              </div>
              <div className="card-text-area px-3 py-3">
                <h3 className="text-2xl font-semibold card-slider-title">Nirmal Anand, 82 years</h3>
                <p className="text-xl font-medium py-2">She found new place to call home after her son and husband passed away. Nirmal has</p>
                <Button 
                  type="button"
                  className="absolute rounded-lg py-2 px-5 text-md font-semibold text-black"
                  id="menu-button"
                >
                Read More
              </Button>
              </div>
            </div>
            <div className="card-slider">
              <div>
                <img src={(mini_slider)} alt="Image 1"/>
              </div>
              <div className="card-text-area px-3 py-3">
                <h3 className="text-2xl font-semibold card-slider-title">Nirmal Anand, 82 years</h3>
                <p className="text-xl font-medium py-2">She found new place to call home after her son and husband passed away. Nirmal has</p>
                <Button 
                  type="button"
                  className="absolute rounded-lg py-2 px-5 text-md font-semibold text-black"
                  id="menu-button"
                >
                Read More
              </Button>
              </div>
            </div>
            <div className="card-slider">
              <div>
                <img src={(mini_slider)} alt="Image 1"/>
              </div>
              <div className="card-text-area px-3 py-3">
                <h3 className="text-2xl font-semibold card-slider-title">Nirmal Anand, 82 years</h3>
                <p className="text-xl font-medium py-2">She found new place to call home after her son and husband passed away. Nirmal has</p>
                <Button 
                  type="button"
                  className="absolute rounded-lg py-2 px-5 text-md font-semibold text-black"
                  id="menu-button"
                >
                Read More
              </Button>
              </div>
            </div>
            
          </div>
          </Column>
      </Row>
    </>
  );
}

export default Home;
