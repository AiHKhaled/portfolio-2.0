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
            My name is Ait Hammou khaled, I'm sort of new in the web
            developement world, I did a little bit of programming here and there
            but not nothing too serious, some of the languages and frameworks I
            worked with can be found if you scroll a little further down...
            <br />
            see you there!
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
