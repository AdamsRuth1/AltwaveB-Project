import React from 'react';
import { motion } from "framer-motion"
import Illustration1 from "../assets/images/Illustrations for why cards (1).png";
import Illustration2 from "../assets/images/Illustrations for why cards (2).png";
import Illustration3 from "../assets/images/Illustrations for why cards.png";
import undraw1 from "../assets/images/undraw_safe_re_kiil 1.png";
import harvardLogo from "../assets/images/harvard_university_logo.svg.png";
import udemyLogo from "../assets/images/udemy_logo.svg.png";
import cambridgeLogo from "../assets/images/cambridge_university_press__assessment_logo.png.png";
import Standford from "../assets/images/Group.png";
import Coursera from "../assets/images/coursera_logo.svg (1).png";
import Altschool from "../assets/images/altcareer_logo.png.png";
import Ielts from "../assets/images/ielts_online_tests_logo.svg.png";
import CityLogo from "../assets/images/the_city_university_of_new_york_logo.svg.png";
export default function Why() {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
           <div className='bg-customLightBlueGray py-20 px-16'>
           <h1 className=" text-3xl md:text-5xl font-bold text-customBlack mb-12">
               Why use <span className="text-red-500">Tuition.</span>
              </h1>
              <div className='flex justify-center items-center text-center px-10 mx-15 space-x-10 flex-col sm:flex-row'>
          
          <div className='flex flex-col items-center md:py-12 my-10'>

              <img alt='' src={undraw1}/>
              <h1 className='font-bold my-3 text-customBlack'> Fast and secure payments</h1>
              <p>
                Pay your tuition fees quickly and safely with our top-notch security measures. Focus on your education, and leave the payment worries to us.
              </p>
            </div>
            <div className='flex flex-col items-center md:py-12 my-16'>

              <img className='' alt='' src= {Illustration3}/>
              <h1 className='font-bold my-3 text-customBlack'> Multiple payment options</h1>
              <p>
              With our multiple payment options - bank transfers, card payments, direct account debits etc., you can conveniently pay fees to high schools, colleges and universities within Africa and across the globe using your local currency.
              </p>
            </div>
            <div className='flex  md:py-12 my-16 flex-col items-center'>

              <img alt='' src={Illustration2}/>
              <h1 className='font-bold my-3 text-customBlack'> Affordable pricing</h1>
              <p>
              Our fees are competitive, helping you save money while paying your tuition.
              Our fees are competitive, helping you save money while paying your tuition.
              </p>
            </div>
            <div className='flex md:py-12 my-16 flex-col items-center'>

              <img alt='' src={Illustration1}/>
              <h1 className='font-bold my-3 text-customBlack'> Real-time support</h1>
              <p>
              Our fees are competitive, helping you save money while paying your tuition.ur fees are competitive, helping you save money while paying your tuition.
              </p>
            </div>
          </div>
          </div>
          <div className='text-center'>
  <h1 className="mt-12 mb-0 text-3xl md:text-5xl font-bold text-customBlack">
    Over 10k + tuition paid
  </h1>
  <p className='mb-12'>across 100+ universities, colleges, and learning institutions across the world</p>
  <div className='flex justify-between px-14'>
  <div>
    <img src={harvardLogo} 
     alt="Harvard Logo"/>
  </div>
  <div>
    <img src={cambridgeLogo}  alt="Cambridge Logo"/>
  </div>
  <div>
    <img src={udemyLogo} />
  </div>
  <div>
    <img  src={Standford}
              alt="Standford Logo"/>
  </div>
</div>
<div className='flex justify-center items-center space-x-24 space-y-16 '>
  <div className=''>
    <img  src={Coursera}
              alt="courser Logo" />
  </div>
  <div>
    <img  src={Altschool}
              alt="altschool Logo" />
  </div>
  <div>
    <img  src={Ielts}
              alt="ielts Logo" />
  </div>
  <div>
    <img  src={CityLogo}
              alt="city Logo" />
  </div>
</div>

</div>

        </motion.div>
      </>
    );
  }
  