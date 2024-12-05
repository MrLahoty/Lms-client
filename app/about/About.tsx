import React from "react";
import { styles } from "../styles/style";

const About = () => {
  return (
    <div className="text-black dark:text-white">
      <br />
      <h1 className={`${styles.title} 800px:!text-[45px]`}>
        What is <span className="text-gradient">ELearning?</span>
      </h1>
      <br />
      <div className="w-[95%] 800px:w-[85%] m-auto">
        <p className="text-[18px] font-Poppins">
          Are you ready to take your programming skills to the next level? Look
          no further than ELearning, the premier programmimg community dedicated
          to helping new programmers acheive their goals and reach their full
          potential.
          <br />
          <br />
          As a founder and CEO of ELearning, I know firsthand the challenges
          that come with learning and growing in the programming industry.
          <br />
          <br />
          Our Youtube Channel is a treasure trove of informative videos on
          everything from programming basics to advanced techniques.
          <br />
          <br />
          As a founder and CEO of ELearning, I know firsthand the challenges
          that come with learning and growing in the programming industry.
          <br />
          <br />
          As a founder and CEO of ELearning, I know firsthand the challenges
          that come with learning and growing in the programming industry.
        </p>
        <br />
        <span className="font-serif text-[22px]">Harsh Lahoty</span>
        <h5 className="text-[18px] font-serif">
          Founder and CEO of ELearning
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
