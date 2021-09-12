import React from "react";
import styled from "styled-components";
import home2 from "../img/home2.png";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../Animation";
import python from "../img/python.svg";
import js from "../img/js.svg";
import science from "../img/science.svg";
import css from "../img/css.svg";
import html from "../img/html.svg";
const Middle = () => {
  const [element, controls] = useScroll();
  const Languages = [
    { name: "Js", logo: js },
    { name: "Django", logo: python },
    { name: "Python", logo: python },
    { name: "React", logo: science },
    { name: "Html", logo: html },
    { name: "Css", logo: css },
  ];

  return (
    <First variants={fade} animate={controls} initial="hidden" ref={element}>
      <Image>
        <motion.img
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.75, opacity: 0 }}
          transition={{
            ease: "easeOut",
            duration: 0.75,
          }}
          src={home2}
          alt="home"
        />
      </Image>
      <Description>
        <motion.h2
          animate={{ x: 0 }}
          initial={{ x: 100 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          The
          <motion.span
            animate={{ opacity: 1, transition: { duration: 2 } }}
            initial={{ opacity: 0 }}
          >
            Programming
          </motion.span>
          <br />
          languages I worked with
        </motion.h2>
        <Cards>
          {Languages.map((l) => (
            <Card
              whileHover={{ scale: 1.2 }}
              whileTap={{
                scale: 0.8,
                borderRadius: "100%",
              }}
              key={l.nam}
            >
              <div className="icon">
                <h3>{l.name}</h3>
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={l.logo}
                  alt="logo"
                />
              </div>
            </Card>
          ))}
        </Cards>
      </Description>
    </First>
  );
};

const First = styled(motion.div)`
  padding: 8rem 9rem;
  padding-top: 8rem;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;
const Image = styled.div`
  float: left;
  img {
    width: 80%;
    height: 65vh;
    border-radius: 10px;
    object-fit: cover;
  }
`;
const Description = styled.div`
  float: right;
  flex: 1;
  z-index: 2;
  padding-right: 4rem;
  padding-bottom: 12rem;
`;
const Card = styled(motion.div)`
  flex-basis: 10rem;

  border-radius: 5px;
  //box-shadow: #23d997 0px 0px 0px 2px;
  margin: 2rem 4.5rem 2rem 0rem;
  h3 {
    font-size: medium;
    margin-left: 1rem;
    padding: 1rem;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    img {
      margin: 1rem 0rem 1rem 1rem;
    }
  }
`;
const Cards = styled.div`
  display: flex;
  padding-top: 2rem;
  flex-wrap: wrap;
`;
export default Middle;
