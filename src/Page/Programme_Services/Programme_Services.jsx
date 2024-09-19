import React from 'react';
import Banner from "../../components/Banners/Banners";
import { bannerAboutUs, healthIcon, plant_fill2, online_customer, flood_svgrepo, education_book, women } from "../../components/Img/ImportedImage";
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

    const healthPoints = [
        'Sawashthya Bharat',
        'Kawach Health Care Camps',
        'Dental Treatment',
        'Awareness programme'
      ];

      const Education = [
        'Sarb Shiksha',
        'Mithila Painting Competition',
        'Shashakt Asha',
        'Career Counselling'
      ];

      const Women_Empowerment = [
        'Promoting Mental Health',
        'Menstural Milestone and Care',
        'Psychlogical Immunity During Disaster',
        'Girl Education',
        'Women Career Counselling'
      ];

      const Environment = [
        'Plantation',
        'Harit Hariyali',
        'Sanitation',
        'Bio Friendly Uses',
        'CLEAN surrounding'
      ];

      const Online_Care = [
        'Online Dental Consultation',
        'Online Health Assessment',
        'Second Consultation',
        'Webinar',
        'Health Consultation'
      ];

      const Disaster_Care = [
        'Food Distribution',
        'Medicine Distribution',
        'Awareness Programmes',
        'Blanket Distribution',
        'Cloth For Life'
      ];


  return (
    <>
        <Row>
            <Banner 
                bannerImage={bannerAboutUs}
                headingText="Programme & Services"
                textColor="#FFED05"
            />
        </Row>

        <Row>
            <Heading className="font-bold text-xl md:text-3xl text-center px-3 pt-10 pb-4 ">Our Programme & Sevices</Heading>
            <Heading className="font-medium text-xl md:text-2xl text-center text-[#06B13D] px-3 pb-10 ">Our program prioritizes good health through holistic approaches, <br /> including education, preventive care, and access to essential medical <br /> services, ensuring well-being for all.</Heading>
        </Row>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 lg:px-20 pb-20">
            <ServiceCard
                icon={healthIcon}
                title="Health Care"
                points={healthPoints}
                borderColor="border-blue-400" 
            />

            <ServiceCard
                icon={education_book}
                title="Education"
                points={Education}
                borderColor="border-blue-400" 
            />

            <ServiceCard
                icon={women}
                title="Women Empowerment"
                points={Women_Empowerment}
                borderColor="border-blue-400" 
            />

            
            <ServiceCard
                icon={plant_fill2}
                title="Environment"
                points={Environment}
                borderColor="border-blue-400" 
            />

            <ServiceCard
                icon={online_customer}
                title="Online Care"
                points={Online_Care}
                borderColor="border-blue-400" 
            />

            <ServiceCard
                icon={flood_svgrepo}
                title="Disaster Care"
                points={Disaster_Care}
                borderColor="border-blue-400" 
            />
        </div>

        <Footer />
    </>
  )
}

export default Programme_Services
