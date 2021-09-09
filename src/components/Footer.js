import React from "react";
import styled from "styled-components";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import facebook from "../img/facebook.png";
import wavefoot from "../img/wavefoot.svg";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../Animation";

const Footer = () => {
  const [element, controls] = useScroll();

  return (
    <motion.div
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <About>
        <h2>Where you can Reach Me </h2>
        <Cards>
          <Card
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,
              borderRadius: "100%",
            }}
          >
            <a href="https://www.linkedin.com">
              <h3>LinkedIn</h3>
              <img src={linkedin} alt="" />
            </a>
          </Card>

          <Card
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,
              borderRadius: "100%",
            }}
          >
            <a href="https://www.github.com">
              <h3>GitHub</h3>

              <img src={github} alt="" />
            </a>
          </Card>

          <Card
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 0.8,
              borderRadius: "100%",
            }}
          >
            <a href="https://www.facebook.com">
              <h3>Facebook</h3>
              <img src={facebook} alt="" />
            </a>
          </Card>
        </Cards>
      </About>
    </motion.div>
  );
};

const About = styled.div`
  background-image: url(${wavefoot});
  background-repeat: no-repeat;
  min-height: 60vh;
  background-position: center;
  background-size: cover;

  padding: 8rem 9rem;
  h2 {
    text-align: center;
  }
`;
const Card = styled(motion.div)`
  padding-top: 4rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 40px;
    height: 40px;
    float: left;
    margin-top: 10px;
  }
  h3 {
    float: right;
    padding: 1.2rem;
    padding-left: 2rem;
  }
`;
const Cards = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  z-index: 2;
`;
export default Footer;
