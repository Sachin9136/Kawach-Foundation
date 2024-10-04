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
  import Events from '../../components/Events/Events';
  import News from '../../components/News/News';
import Our_story from '../../ReduxToolkit/Slice/our_story';
import StoryApi from '../../components/Our_Journey/Our_Journey';
import Our_Impact from "../../components/Our_Impact/Our_Impact";
import OurJourey from '../../components/Our_Journey/Our_Journey';



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
        </Row>

        <Events />

        <Row className="py-5">
          <Heading className={"our-works-heading text-4xl font-bold text-center py-8"}>
          Our Journey Higlights
          </Heading>


<OurJourey/>

        </Row>
        <Row>
            <Heading className="text-3xl font-bold text-center mt-3">
                News
            </Heading>
        </Row>
        <News />
        <Footer />
    </>
  )
}

export default Programme_Services
