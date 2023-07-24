"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import{RxCross2}from"react-icons/rx";

export const Header = () => {
  const [toggle,setToggle]= useState(true);
  return (
  <section className="bg-pink-600 text-white sticky">
      <div className="flex justify-between items-center">
        <h1 className="font-autograph m-7 font-bold"> Asma Mirza</h1>
        <ul className="m-7 md:flex hidden ">
          <a className = 'cursur-pointer '
          href="#home">
          <li className="mx-5 text-2xl font-autograph1 font-extrabold hover:scale-150 duration-500
    ">Home</li>
    </a>
    <a className = 'cursur-pointer '
          href="#about">
          <li className="mx-5 text-2xl font-autograph1 hover:scale-150 duration-500 font-extralight">About</li>
          </a>
          <a className = 'cursur-pointer '
          href="#portfolio">
          <li className="mx-5 text-2xl font-autograph1 hover:scale-150 duration-500 font-extrabold">Portfolio</li>
         </a>
         <a className = 'cursur-pointer '
          href="#skills">
          <li className="mx-5 text-2xl font-autograph1 hover:scale-150 duration-500 font-extrabold">Skills</li>
          </a>
          <a className = 'cursur-pointer '
          href="contact">
          <li className="mx-5 text-2xl font-autograph1 hover:scale-150 duration-500font-extrabold">Contact</li>
          </a> 
        </ul>
        <div className="pr-5 md:hidden z-10"
        onClick={()=>{
          setToggle(!toggle);
          console.log(toggle);

        }}
        >

          {/* if/else condition */}
          {/* if(toggle==true){  */}
          {/* <GiHamburgerMenu size={30} /> */}
       
          {/* else{
           <RxCross2 size={30}/>  */}
        {/* insted of usinf if/else condition, we used turnery oprator */}
   {toggle? <GiHamburgerMenu size={30} />:<RxCross2 size={30}/>}
        </div>
        {/* overlay starts here */}
        {!toggle?(
        <div className ="fixed top-0 left-0 bg-black h-screen text-red-500 w-full flex items-center ">
        <ul className="m-8 text-white">
          <li className="mx-5 my-2 text-8xl font-autograph1 font-extrabold ">Home</li>
          <li className="mx-5 my-2  text-8xl font-autograph1 font-extralight">About</li>
          <li className="mx-5 my-2 text-8xl font-autograph1  font-extrabold">Portfolio</li>
          <li className="mx-5 my-2 text-8xl font-autograph1 font-extrabold">Skills</li>
          <li className="mx-5 my-2 text-8xl font-autograph1  font-extrabold">Contact</li>
        </ul>  
        </div>):null}
      </div>
    </section>
  );
};

export default Header
