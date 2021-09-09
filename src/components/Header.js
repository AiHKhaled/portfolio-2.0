import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Spacer } from "../styles";
import { motion } from "framer-motion";
import { Animation, photoAnim } from "../Animation";

const Header = () => {
  return (
    <div style={{ display: "inline-grid" }}>
      <Spacer />

      <About variants={Animation} initial="hidden" animate="show" exit="exit">
        <Description>
          <h2>
            This is My <span>Portfolio</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            commodi quia reprehenderit eum quidem odio excepturi et deleniti
            saepe explicabo!
          </p>
        </Description>

        <Image>
          <motion.img variants={photoAnim} src={home1} alt="home" />
        </Image>
      </About>
    </div>
  );
};

export default Header;
