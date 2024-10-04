import React from 'react';
import Banner from "../../components/Banners/Banners";
import { bannerAboutUs, about_us_2, education_book_aboutus, doctor_aboutus, hut_aboutus, health_care_aboutus, profile1, profile2, profile3, profile4, profile5, profile6 } from "../../components/Img/ImportedImage";
import {
    Column,
    Heading,
    Row,
    Span,
    Wraper,
    Button,
  } from "../../components/ComponentsIndex";

  import { Link } from "react-router-dom";
  import VideoSlider from "../../components/VideoSlider/VideoSlider";
  import Footer from "../../components/footer/footer";
import CommanBanner from '../../components/Banners/CommanBanner';

import { Journy_highlights } from "../../components/Img/ImportedImage";

const About_us = () => {

    const videos = [
        { url: "/videos/donation1.mp4" },
        { url: "/videos/donation2.mp4" },
        { url: "/videos/donation3.mp4" },
    ];

  return (
    <>
       <CommanBanner children={Journy_highlights} heading={"About us"}/>

        <Row>
            <Heading className="font-bold text-2xl md:text-4xl text-center text-[#06B13D] px-3 py-10 ">Kawach: Empowering Health, Enriching Environment - India's <br /> Independent Force for Positive Change!</Heading>
        </Row>

        <Row className="bg-white pb-10 px-4 md:px-20">
            <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10">
                {/* Image Section */}
                <div className="md:w-2/5 w-full">
                    <img src={about_us_2} alt="" width="100%" />
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
                    <p className="text-2xl text-gray-700">
                        We have the power to change. By recognizing health as invaluable,
                        investing in healthcare, and addressing underlying factors shaping
                        health and inequality, we forge a healthier nation.
                    </p>
                </div>
            </div>
        </Row>

        <Row className="bg-white px-4 md:px-20">
            <h2 className="text-4xl text-center font-bold text-black md:py-10">Mission</h2>
            <div className="container mx-auto flex flex-col-reverse md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10">
                {/* Text Section */}
                <div className="md:w-3/5 w-full">
                    <p className="text-2xl pb-2 text-gray-700 mb-6 mt-10">
                    <Span className="text-[#06B13D] text-2xl md:text-4xl font-bold">Kawach's mission</Span> is to envision an India where wellness thrives. We strive for a "Fit India," where every individual embraces good health practices and possesses the knowledge to safeguard their well-being. Through comprehensive health education, accessible healthcare services, and community empowerment initiatives, we aim to cultivate a society where physical, mental, and emotional wellness are prioritized. By fostering a culture of holistic well-being and promoting healthy lifestyles, we aspire to build a nation where everyone can lead fulfilling lives and contribute positively to the collective prosperity of our society.
                    </p>
                </div>

                {/* Image Section */}
                <div className="md:w-2/5 w-full">
                    <img className='h-[350px]' src={about_us_2} alt="" width="100%" />
                </div>
            </div>
        </Row>

        <Row className="bg-white px-4 md:px-20">
            <h2 className="text-4xl text-center font-bold text-black py-10">Vision</h2>
            <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10">
                {/* Image Section */}
                <div className="md:w-2/5 w-full">
                    <img src={about_us_2} alt="" width="100%" />
                </div>
                {/* Text Section */}
                <div className="md:w-3/5 w-full">
                    <p className="text-2xl pb-2 text-gray-700 mb-6">
                    <Span className="text-[#06B13D] text-2xl md:text-4xl font-bold">Kawach envisions</Span> a world where every individual is empowered with knowledge and experiences holistic wellness. We aspire to bridge the healthcare gap by ensuring that even remote areas have access to hospitals and quality health services. Our vision extends beyond mere accessibility; we aim for inclusivity, where everyone, regardless of background or location, can avail themselves of excellent healthcare. By advocating for comprehensive health education and implementing sustainable healthcare solutions, we strive to eradicate disparities and promote universal well-being. Through community engagement and collaboration with stakeholders, we endeavor to create a supportive environment where individuals are encouraged to prioritize their health and lead fulfilling lives. Kawach's vision is of a society where good health is not a privilege but a fundamental right, where every person has the opportunity to thrive and contribute positively to the fabric of our collective well-being.
                    </p>
                </div>
            </div>
        </Row>

        <Row className="bg-white px-4 md:px-20">
            <h2 className="text-4xl text-center font-bold text-black md:pt-10">How we Enhance quality of life</h2>
            <h2 className="text-2xl text-center font-medium py-3 text-[#06B13D]">We enhance the quality of life through:</h2>
        </Row>

        <Row className="">
          <Column className="block lg:flex py-5 px-5 md:px-20">
              <div className="block pt-5">
                <Wraper className="flex justify-center">
                  <div className="flex align-center justify-center w-24">
                    <img src={education_book_aboutus} alt="Image 1" />
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className=" font-bold text-2xl text-center flex justify-center">
                    Awareness campaigns to educate and empower communities.
                  </Heading>
                </div>
              </div>

              <div className="block pt-5">
                <Wraper className="flex justify-center">
                  <div className="flex align-center justify-center w-24">
                    <img src={doctor_aboutus} alt="Image 1" />
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className=" font-bold text-2xl text-center flex justify-center">
                  Informative videos providing valuable health-related insights and guidance.
                  </Heading>
                </div>
              </div>

              <div className="block pt-5">
                <Wraper className="flex justify-center">
                  <div className="flex align-center justify-center w-24">
                    <img src={hut_aboutus} alt="Image 1" />
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className=" font-bold text-2xl text-center flex justify-center">
                  Conducting surveys and analyzing endemic issues to address root causes effectively.
                  </Heading>
                </div>
              </div>

              <div className="block pt-5">
                <Wraper className="flex justify-center">
                  <div className="flex align-center justify-center w-24">
                    <img src={health_care_aboutus} alt="Image 1" />
                  </div>
                </Wraper>
                <div className="px-3 py-3">
                  <Heading className=" font-bold text-2xl text-center flex justify-center">
                  Engaging in innovative approaches to promote good health and well-being comprehensively.
                  </Heading>
                </div>
              </div>
          </Column>
        </Row>

        <Row>
            <div>
                <VideoSlider videos={videos} title="Donars Insights" />
            </div>

            <div>
                <VideoSlider videos={videos} title="Interns insights" />
            </div>

            <div>
                <VideoSlider videos={videos} title="Volunteer insights" />
            </div>
        </Row>

        <Footer />
    </>
  )
}

export default About_us
