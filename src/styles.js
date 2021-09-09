//Styled
import styled from "styled-components";
import { motion } from "framer-motion";
import wave from "./img/wave.svg";

export const About = styled(motion.div)`
  padding: 8rem 9rem;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  grid-area: 1/1;
`;
export const Description = styled.div`
  flex: 1;
  z-index: 2;
  padding-right: 4rem;
  padding-bottom: 12rem;
`;
export const Image = styled.div`
  flex: 1;
  padding: 2rem 0rem 2rem 2rem;

  position: relative;
  z-index: 10;
  overflow: hidden;
  img {
    width: 80%;
    height: 70vh;
    float: right;
    object-fit: cover;
    border-radius: 10px;
  }
`;
export const Spacer = styled.div`
  grid-area: 1/1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${wave});
`;
