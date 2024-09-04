import React from "react";
import {
  Column,
  Heading,
  Row,
  Span,
  Wraper,
} from "../../components/ComponentsIndex";
import { hero } from "../../components/Img/ImportedImage";
// import Img from "../../components/Img/Img";

function Home() {
  return (
    <>
      <Row className="bg-custom-peach text-center py-10">
        <Heading className={"text-6xl font-bold"}>
          Your <Span className={"text-orange-400"}>Yoga</Span> Your
          <Span className={"text-orange-400"}> Way</Span>
        </Heading>
        <Column className="flex justify-center">
          <Wraper
            className="flex items-center justify-center bg-cover bg-center h-screen object-cover"
            style={{ backgroundImage: `url(${hero})` }}
          >
            <Heading className="text-3xl font-normal">
              Connecting You to Inner Calm and Outer Strength.
            </Heading>
          </Wraper>
        </Column>
      </Row>
    </>
  );
}

export default Home;
