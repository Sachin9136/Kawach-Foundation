import React from 'react';
import Banner from "../../components/Banners/Banners";
import { bannerAboutUs, dental_1, Slider1, mini_slider, Events_carousel_1, Events_carousel_2, Events_carousel_3, Journy_highlights, News_Blog } from "../../components/Img/ImportedImage";
import {
    Column,
    Heading,
    Row,
    Span,
    Wraper,
    Button,
  } from "../../components/ComponentsIndex";
  import Footer from "../../components/footer/footer";
    import ServiceCard from '../../components/Our_services_card/Our_services_card';



const Programme_Services = () => {

  return (
    <>
        <Row>
            <Banner 
                bannerImage={bannerAboutUs}
                headingText="News & Update"
                textColor="#FFED05"
            />
        </Row>

        <Row className="py-5 px-4 md:px-10 lg:px-20">
          <Heading className={"our-works-heading text-4xl font-bold text-center pt-10 pb-0"}>
          Events
          </Heading>
          <Column className="flex justify-center">
          <div className="owl-carousel Events-carousel owl-theme">
          <div className="card-slider py-10">
              <div>
                <img src={(Events_carousel_1)} alt="Image 1"/>
              </div>
              <div className="card-text-area rounded-b-lg px-3 pt-3 pb-7 content-center">
                <h3 className="text-3xl font-bold text-center">AARAMBH Sapno Ki Udaan-2</h3>
                <div className='flex justify-center mt-5'>
                <Button 
                    type="button"
                    className="rounded-lg py-2 px-5 text-md font-semibold text-black"
                    id="menu-button"
                >
                    Join Us
                </Button>
              </div>
              </div>
              
            </div>
            <div className="card-slider py-10">
              <div>
                <img src={(Events_carousel_2)} alt="Image 1"/>
              </div>
              <div className="card-text-area rounded-b-lg px-3 pt-3 pb-7 content-center">
                <h3 className="text-3xl font-bold text-center">AARAMBH Sapno Ki Udaan-2</h3>
                <div className='flex justify-center mt-5'>
                <Button 
                    type="button"
                    className="rounded-lg py-2 px-5 text-md font-semibold text-black"
                    id="menu-button"
                >
                    Join Us
                </Button>
              </div>
              </div>
              
            </div>
            <div className="card-slider py-10">
              <div>
                <img src={(Events_carousel_3)} alt="Image 1"/>
              </div>
              <div className="card-text-area rounded-b-lg px-3 pt-3 pb-7 content-center">
                <h3 className="text-3xl font-bold text-center">AARAMBH Sapno Ki Udaan-2</h3>
                <div className='flex justify-center mt-5'>
                <Button 
                    type="button"
                    className="rounded-lg py-2 px-5 text-md font-semibold text-black"
                    id="menu-button"
                >
                    Join Us
                </Button>
              </div>
              </div>
              
            </div>
          </div>
          </Column>
      </Row>

      <Row className="py-5">
          <Heading className={"our-works-heading text-4xl font-bold text-center py-8"}>
          Our Journey Higlights
          </Heading>
          <Column className="flex">
          <div className="our-impact-carousel owl-carousel owl-theme">
            <div className="item">
              <img src={Journy_highlights} alt="Image 1"/>
            </div>
            <div className="item">
              <img src={Journy_highlights} alt="Image 1"/>
            </div>
            <div className="item">
              <img src={Journy_highlights} alt="Image 1"/>
            </div>
          </div>
          </Column>
      </Row>

        <Row>
            <Heading className="text-3xl font-bold text-center mt-3">
                News
            </Heading>
        </Row>

        <Row className="bg-white px-4 md:px-20 py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10">
                {/* Image Section */}
                <div className="md:w-2/5 w-full">
                    <img src={News_Blog} alt="" width="100%" />
                </div>
                {/* Text Section */}
                <div className="md:w-3/5 w-full">
                    <Heading className="text-4xl font-semibold pb-2 mb-6">
                        Nirmal Anand, 82 years
                    </Heading>
                    <p className="text-2xl font-medium pb-2 mb-6">
                        Lorem ipsum dolor sit amet consectetur. Elementum nisl nulla massa consequat lacinia placerat vulputate. Felis viverra turpis varius massa. Sodales non tempor tortor vel congue tempor nunc metus purus. Nibh pretium egestas facilisi quis. Lorem ipsum dolor sit amet consectetur. Elementum nisl nulla massa consequat lacinia placerat vulputate. Felis viverra turpis varius massa. 
                    </p>
                    <div>
                        <span className='text-2xl font-medium text-[#878784]'>28-Sep-2024</span> <Span>|</Span> <span className='text-2xl font-medium text-[#878784]'>4 min read</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-10 py-10">
                {/* Image Section */}
                <div className="md:w-2/5 w-full">
                    <img src={News_Blog} alt="" width="100%" />
                </div>
                {/* Text Section */}
                <div className="md:w-3/5 w-full">
                    <Heading className="text-4xl font-semibold pb-2 mb-6">
                        Nirmal Anand, 82 years
                    </Heading>
                    <p className="text-2xl font-medium pb-2 mb-6">
                        Lorem ipsum dolor sit amet consectetur. Elementum nisl nulla massa consequat lacinia placerat vulputate. Felis viverra turpis varius massa. Sodales non tempor tortor vel congue tempor nunc metus purus. Nibh pretium egestas facilisi quis. Lorem ipsum dolor sit amet consectetur. Elementum nisl nulla massa consequat lacinia placerat vulputate. Felis viverra turpis varius massa. 
                    </p>
                    <div>
                        <span className='text-2xl font-medium text-[#878784]'>28-Sep-2024</span> <Span>|</Span> <span className='text-2xl font-medium text-[#878784]'>4 min read</span>
                    </div>
                </div>
            </div>
        </Row>

        <Footer />
    </>
  )
}

export default Programme_Services
