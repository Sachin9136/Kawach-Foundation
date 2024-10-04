import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Column, Heading, Button } from "../../components/ComponentsIndex";
import { getAllBanners } from "../../ReduxToolkit/Slice/Banner";

const BannerApi = () => {
  // api
  const dispatch = useDispatch();
  const { banners, status } = useSelector((state) => state.banner);
  // call api
  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllBanners());
    }
  }, [dispatch, status]);

  return (
    <div>
      {banners.data && banners.data.length > 0 ? (
        banners.data.map((banner) => (
          <Row
            key={banner.id} 
            className="bg-no-repeat bg-cover h-[510px] lg:h-[633px]"
            style={{ backgroundImage: `url(${banner.Image})` }}  
          >
            <div className="absolute top-[200px] left-[30px] text-[#FFED05] lg:top-[270px] lg:left-[50px]">
              <Heading className={"text-4xl md:text-5xl lg:text-7xl font-bold"}>
                {banner.Name}
              </Heading>
              <Column className="flex mb-10 lg:mb-24">
                <Heading className="text-4xl font-semibold text-white mt-7">
                  Take a step to donate needy
                </Heading>
              </Column>
              <Link to={"/teacher-registration"}>
                <Button children={"Donate Now"} className="px-8 py-5 mt-2 md:mt-3 lg:mt-5 text-xl" />
              </Link>
            </div>
          </Row>
        ))
      ) : (
        <div>No banners available</div>
      )}
    </div>
  );
};

export default BannerApi;
