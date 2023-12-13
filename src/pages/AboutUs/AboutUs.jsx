import React from "react";
import "./AboutUs.css";
import PersonCard from "./PersonCard";
import { LiaFacebookF } from "react-icons/lia";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import CompanyServices from "../../Components/CompanyServices/CompanyServices";
import Footer from "../../Components/Footer/Footer";

const AboutUs = () => {
  return (
    <div className="bg-white">
      <div className="bg-image flex justify-center items-center">
        <div className="">
          <h1 className="text-center font-bold text-5xl lg:text-7xl  text-white">
            About Us
          </h1>
        </div>
      </div>
      <div className="bg-[#F5F7F9] py-10">
      <div className="lg:flex lg:justify-between  bg-white  mx-14   lg:p-12 p-5">
        <div className="lg:w-1/2 lg:p-10 p-8">
          <div className=" lg:mb-5 mb-3  border-[2px] w-28 border-blue-600 "></div>
          <h1 className="text-4xl text-black font-bold mb-8 lg:mb-10">
            Who We Are
          </h1>
          <p className="text-black leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            obcaecati ipsa itaque ratione beatae atque cupiditate quos quisquam.
            Deserunt, eaque. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Cumque, alias. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Optio, cum!
          </p>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://i.ibb.co/xgfVTRR/d4b397a2-939e-45d5-a919-241123776991.jpg"
            alt=""
          />
        </div>
      </div>
      </div>
      <div>
        <div className="text-center   text-black" >
          <div className=" lg:mb-10 mb-5 lg:mt-20 mt-16 m-auto border-[2px] w-28  border-blue-600 "></div>
          <h1 className="lg:text-3xl text-2xl mb-5  ">A Few Words About</h1>
          <h1 className="lg:text-5xl text-3x">Our Team</h1>
          <p className="p-10 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illum harum in libero quod natus officia veniam. <br /> Sint, tenetur cupiditate at aperiam cumque nostrum voluptates, repellat, magnam reprehenderit laborum quasi?</p>
        </div>
      </div>
      <div className="flex justify-center items-center ">
       <PersonCard ></PersonCard>
      </div>
      <div>
         <div className="b-image">
         <div className="bg-white h-full w-[450px] m-auto flex  justify-center items-center ">
          <div className="flex flex-col justify-center items-center text-black ">
         <div className=" lg:mb-5 mb-3  border-[2px] w-20 border-blue-600 "></div>
          <h1 className=" font-bold lg:text-4xl text-2xl">Follow Us</h1>
          <div>
          <div className="flex justify-center items-center mt-10">
          <div className="text-xl mx-5 hover:text-blue-500">
          <LiaFacebookF />
          </div>
          <div  className="text-xl mx-5 hover:text-blue-500">
          <IoLogoTwitter />
          </div>
          <div  className="text-xl mx-5 hover:text-blue-500">
          <FaInstagram />
          </div>
          <div  className="text-xl mx-5 hover:text-blue-500">
          <FaGoogle />
          </div>
        </div>
          </div>
          </div>
        </div>
         </div>
      </div>
      <CompanyServices/>
      <Footer/>
    </div>
  );
};

export default AboutUs;
