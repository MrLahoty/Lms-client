"use client"; 
import React, { FC, useState } from 'react'
import Header from '../components/Header';
import Heading from '../utils/Heading';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ/FAQ';

type Props = {}

const Page:FC<Props> = () => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(4);
    const [route, setRoute] = useState("Login");

  return (
    <div className="min-h-screen">
        <Heading 
         title= "FAQ - ELearning"
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
        <br />
        <FAQ />
        <Footer />
    </div>
  )
}

export default Page;