import React from 'react';
import Banner from "../../components/Banners/Banners";
import { bannerAboutUs, dental_plus, plant_fill, awareness, doctor_health, Events_carousel_2, Events_carousel_3, Journy_highlights, News_Blog } from "../../components/Img/ImportedImage";
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
                headingText="Get Involved"
                textColor="#FFED05"
            />
        </Row>

        <Row>
            <Heading className="text-4xl font-bold text-center mt-5">
                Partners
            </Heading>
            <Heading className="text-2xl font-semibold text-center mt-3 text-[#06B13D]">
                Together for a Healthier Future
            </Heading>
        </Row>


        <Row className="py-5">
          <Heading className={"text-4xl font-bold text-center pt-5 pb-5"}>
            Partners
          </Heading>
          <Column className="flex px-5 md:px-20">
            <div className="flex columns-4">
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
