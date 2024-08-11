import React from "react";
import Slider from "react-slick";

import meter1 from "../assets/meter1.svg";
import meter2 from "../assets/meter2.svg";
import meter3 from "../assets/meter3.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skill = () => {
  const skills = [
    { img: meter1, name: "HTML" },
    { img: meter1, name: "CSS" },
    { img: meter3, name: "JavaScript" },
    { img: meter3, name: "React" },
    { img: meter3, name: "C++" },
    { img: meter2, name: "DSA" },
    { img: meter2, name: "Node.js" },
    { img: meter2, name: "MongoDB" },
  ];

  function SampleNextArrow(props) {
    return <div style={{ display: "none" }} />;
  }

  function SamplePrevArrow(props) {
    return <div style={{ display: "none" }} />;
  }

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="skill" id="skills" style={{ paddingBlock: "4vw" }}>
      <div className="container">
        <div className="skill-bx">
          <h2>Skills</h2>
          <Slider {...settings}>
            {skills.map((skl) => {
              return (
                <div className="skill-item" key={skl.name}>
                  <img src={skl.img} alt="Image" />
                  <h5>{skl.name}</h5>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Skill;
