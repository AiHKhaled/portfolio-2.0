import React from "react";
import styled from "styled-components";
import home2 from "../img/home2.png";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../Animation";

const Middle = () => {
  const [element, controls] = useScroll();
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
        //animate={{ x: 100 }}
        //transition={{ ease: "easeOut", duration: 2 }}
        >
          Something else{" "}
          <motion.span
            animate={{ opacity: 1, transition: { duration: 2 } }}
            initial={{ opacity: 0 }}
          >
            Entirely
          </motion.span>
        </motion.h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          voluptas incidunt voluptate pariatur cupiditate quo sit excepturi
          dignissimos minima harum.
        </p>
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
    height: 70vh;
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

export default Middle;
