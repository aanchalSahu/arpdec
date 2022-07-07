import React from "react";
import { Grid, Typography } from "@mui/material";
import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Page3() {
  return (
    <Grid
      container
      justifyContent="space-between"
      id="page3"
      alignItems="center"
      spacing={10}
    >
      <Grid item lg={6} className="photo-grid-item">
        <ReactOwlCarousel
          className="owl-theme slider-css-1 slider-css-1-box "
          loop
          // margin={10}
          autoplay={true}
          autoplaySpeed={500}
          dots={false}
          videoHeight={3}
          items={1}
        >
          {Images &&
            Images?.map((row, index) => {
              const { src } = row;
              return (
                <div className="item" key={index}>
                  <img src={src} alt=''/>
                </div>
              );
            })}
        </ReactOwlCarousel>
      </Grid>
      <Grid item lg={6}>
        <Typography variant="h2" className="cursive-font">
          Let your interior speak for yourself..
        </Typography>
      </Grid>
      <Grid item lg={12} className="photo-grid-item">
        <ReactOwlCarousel
          className="owl-theme slider-css-1 slider-css-1-box "
          loop
          // margin={10}
          autoplay={true}
          autoplaySpeed={500}
          dots={false}
          items={1}
        >
          {Images &&
            Images?.map((row, index) => {
              const { src } = row;
              return (
                <div className="item" key={index}>
                  <img src={src} alt={src}/>
                </div>
              );
            })}
        </ReactOwlCarousel>
        {/* </div> */}
      </Grid>
      <Grid item lg={6}>
        <Typography variant="h2" className="cursive-font">
          Let your place say it all..
        </Typography>
      </Grid>
      <Grid item lg={6} className="photo-grid-item">
        <ReactOwlCarousel
          className="owl-theme slider-css-1 slider-css-1-box "
          loop
          // margin={10}
          autoplay={true}
          autoplaySpeed={500}
          dots={false}
          items={1}
        >
          {Images &&
            Images?.map((row, index) => {
              const { src } = row;
              return (
                <div className="item" key={index}>
                  <img src={src} alt={src}/>
                </div>
              );
            })}
        </ReactOwlCarousel>
        {/* </div> */}
      </Grid>
    </Grid>
  );
}
const Images = [
  { src: "Pictures/pic1.jpeg", content: "helooy!" },
  { src: "Pictures/pic2.jpg", content: "helooy!" },
  { src: "Pictures/pic3.jpg", content: "helooy!" },
  { src: "Pictures/mirr.jpg", content: "helooy!" },
];
