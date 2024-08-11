import React from "react";
import { Typewriter } from "react-simple-typewriter";
import devimg from "../assets/developer.png";
import "../styles/banner.css";

const Banner = () => {
  return (
    <>
      <section className="banner d-flex container">
        <div className="banner-left">
          <p>
            Hi My Name Is <span className="diff-color">Abhishek</span>{" "}
          </p>
          <p>
            And I am a
            <span className="diff-color">
              <Typewriter
                words={[" Web Developer", " Software Developer"]}
                loop
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              />
            </span>
          </p>
        </div>
        <div className="banner-right">
          <img src={devimg} alt="developer image" />
        </div>
      </section>
    </>
  );
};

export default Banner;
