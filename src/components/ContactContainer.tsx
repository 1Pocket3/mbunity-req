// import React from "react";
import BasicTextFields from "./TextField/TextField";
import LetterImg from '../assets/letter-send-1.png';
import styles from './ContactContainer.module.css';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import { IoMailSharp } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';


const ContactUsContainer = ({ className }: any) => {
  return (
    <div className={className}>
      <div className="mx-1 sm:mx-1 md:mx-2 max-w-screen-xl flex flex-col md:flex-row md:h-auto mb-[50px] shadow-2xl">
        <div className="md:w-[40%] h-auto bg-white md:rounded-l-lg md:mb-0 mb-4 md:mr-4">
          <div className="w-[full] h-[507px] sm:h-[647px]  bg-black rounded-l-lg p-8 flex flex-col text-white">
            <h1 className="text-white font-bold text-2xl mb-6 text-center sm:text-justify">Contact Information</h1>
            <p className="text-[#C9C9C9] text-lg sm:mb-12 text-center sm:text-justify">Say something to start a live chat!</p>
            <div className="text-white mb-6 flex items-center mt-[81px] justify-center sm:justify-start">
              <BiSolidPhoneCall size={20} className="mr-2" />
              <p className="ml-2">+1012 3456 789</p>
            </div>
            <div className="text-white sm:mb-6 flex items-center sm:mt-[30px] justify-center sm:justify-start">
              <IoMailSharp size={20} className="mr-2" />
              <p className="ml-2">demo@gmail.com</p>
            </div>
            <div className="text-white sm:mb-6 flex items-center mt-[30px] justify-center sm:justify-start">
              <FaLocationDot size={20} className="mr-2" />
              <p className="ml-2">
                132 Dartmouth Street Boston, <br /> Massachusetts 02156 United States
              </p>
            </div>

            <div className="mt-[93px] sm:mt-auto flex space-x-8 justify-center sm:justify-start">
              <button className="w-8 h-8 rounded-full bg-black hover:bg-white border border-black transition duration-300 flex items-center justify-center">
                <FaTwitter className="text-gray" />
              </button>
              <button className="w-8 h-8 rounded-full bg-black hover:bg-white border border-black transition duration-300 flex items-center justify-center">
                <FaInstagram className="text-gray" />
              </button>
              <button className="w-8 h-8 rounded-full bg-black hover:bg-white border border-black transition duration-300 flex items-center justify-center">
                <FaDiscord className="text-gray" />
              </button>
            </div>
          </div>
        </div>


        <div className="md:w-1/2 h-auto bg-white rounded-r-lg p-8 md:mt-0 mt-4 container" >
          {/* Right content */}
          <div className="mb-4 flex flex-col ml-0 sm:flex-col md:flex-row lg:flex-row">
            <div className="w-full mb-4 sm:mb-0 md:mb-0 sm:mr-2 md:mr-2">
              <BasicTextFields
                className="p-2 border border-gray-300 rounded w-full"
                type="text"
                placeholder="First Name"
                label="First Name"
              />
            </div>
            <div className="w-full sm:ml-0 md:ml-2 lg:ml:6">
              <BasicTextFields
                className="p-2 border border-gray-300 rounded w-full"
                type="text"
                placeholder="Last Name"
                label="Last Name"
              />
            </div>
          </div>
          <div className="mb-4 flex flex-col sm:flex-col md:flex-row lg:flex-row">
            <div className="w-full mb-4 sm:mb-0 md:mb-0 sm:mr-2 md:mr-2">
              <BasicTextFields
                className="p-2 border border-gray-300 rounded w-full"
                type="email"
                placeholder="Email"
                label="Email"
              />
            </div>
            <div className="w-full sm:ml-0 md:ml-2 lg:ml:6">
              <BasicTextFields
                className="p-2 border border-gray-300 rounded w-full"
                type="tel"
                placeholder="Phone"
                label="Phone"
              />
            </div>
          </div>
          <label className="block mb-2 font-bold mt-[24px]" htmlFor="selectSubject">
            Select Subject?
          </label>


          <div className="mb-4 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 space-y-2 md:space-y-0">
            <div className="flex items-center w-full md:w-1/2">
              <input className="mr-2" type="radio" name="contactType" id="1" />
              <label htmlFor="1" className="whitespace-no-wrap text-[13px]">General Inquiry</label>
            </div>
            <div className="flex items-center w-full md:w-1/2">
              <input className="mr-2" type="radio" name="contactType" id="2" />
              <label htmlFor="2" className="whitespace-no-wrap text-[13px]">General Inquiry</label>
            </div>
            <div className="flex items-center w-full md:w-1/2">
              <input className="mr-2" type="radio" name="contactType" id="3" />
              <label htmlFor="3" className="whitespace-no-wrap text-[13px]">General Inquiry</label>
            </div>
            <div className="flex items-center w-full md:w-1/2">
              <input className="mr-2" type="radio" name="contactType" id="4" />
              <label htmlFor="4" className="whitespace-no-wrap text-[13px]">General Inquiry</label>
            </div>
          </div>

          <div className="mt-[32px]">
            <BasicTextFields
              className="p-2 border border-gray-300 rounded w-full mb-4"
              aria-label="Message"
              placeholder="Write your message.."
              label='Message'
            />
          </div>

          <button className="transition ease-in-out duration-300 bg-black hover:bg-white hover:text-black text-white lg:w-[196px] md:w-[196px] font-bold m py-2 px-4 rounded ml-auto mt-[61px] w-[89%] mr-4 shadow-2xl send-button">
            <p className="p-1">Send Message</p>
          </button>

          <div className="mt-[10px] sm:ml-0 md:ml-[1.25rem] lg:ml-[7.25rem] xl:ml-[17.25rem] container bottom-0">
            <img
              className={styles.letterSend1Icon}
              alt=""
              src={LetterImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsContainer;
