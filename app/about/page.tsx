"use client"; 
import React, { useState } from 'react'
import Header from '../components/Header';
import Heading from '../utils/Heading';
import About from "./About";
import Footer from '../components/Footer';

type Props = {}

const Page = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(2);
    const [route, setRoute] = useState("Login");

  return (
    <div>
        <Heading 
         title= "About us- ELearning"
         description="ELearning is a learning management system for helping programmers."
         keywords="Programming, MERN, React, TypeScript"
        /> 
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route={route}
        />
        <About />
        <Footer />
    </div>
  )
}

export default Page;