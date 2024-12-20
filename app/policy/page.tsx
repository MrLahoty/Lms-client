"use client"; 
import React, { useState } from 'react'
import Header from '../components/Header';
import Heading from '../utils/Heading';
import Footer from '../components/Footer';
import Policy from "./Policy";

type Props = {}

const Page = (props: Props) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(3);
    const [route, setRoute] = useState("Login");

  return (
    <div>
        <Heading 
         title= "Policy - ELearning"
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
        <Policy />
        <Footer />
    </div>
  )
}

export default Page;