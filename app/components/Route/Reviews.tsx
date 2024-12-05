import { styles } from "../../../app/styles/style";
import Image from "next/image";
import React from "react";
import ReviewCard from "../Review/ReviewCard";

type Props = {};

export const reviews = [
  {
    name: "Gene Bates",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Student | Cambridge University",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    name: "Verna Santos",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    profession: "Full Stack Developer | Quarter ltd.",
    comment:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    name: "Jay Gibbs",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    profession: "Computer Enginnering | Zimbabwe",
    comment:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    name: "Mina Davidson",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    profession: "Junior Web Developer | Indonesia",
    comment:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem."
  },
  {
    name: "Rosemary Smith",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    profession: "Full Stack Web Developer | Algeria",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    name: "Laura Bates",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    profession: "Full Stack Web Developer | Canada",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
];

const Reviews = (props: Props) => {
  return (
    <div className="w-[90%] 800px:w-[85%] m-auto">
      <div className="w-full 800px:flex items-center">
        <div className="800px:w-[50%] w-full">
          <Image
            src="/assets/business-img.png"
            alt="business"
            width={700}
            height={700}
          />
        </div>
        <div className="800px:w-[50%] w-full">
          <h3 className={`${styles.title} 800px:!text-[40px]`}>
            Our Students Are <span className="text-gradient">Our Strength</span>{" "}
            <br /> See What They Say About Us
          </h3>
          <br />
          <p className={styles.label}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <br />
        <br />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2 mb-8">
        {reviews &&
          reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
      </div>
    </div>
  );
};

export default Reviews;
