import React from "react";
import Image from "next/image";
import ProfilePic from "../../assets/imgs/profile_pic.jpg";
import {
  AcademicCapIcon,
  CakeIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/solid";
import { FaLinkedin, FaGithub, FaFacebook, FaPhone } from "react-icons/fa";
import { SiVercel, SiGmail } from "react-icons/si";
import { IoMdCloudDownload } from "react-icons/io";
import ReactTooltip from "../ReactTooltip";
import { motion } from "framer-motion";

interface ProfileProps {
  image: string;
  name: string;
  age: {
    day: number;
    month: number;
    year: number;
  };
}

const Profile = ({ image, name, age }: ProfileProps) => {
  const redirectToGmail = (toMail: string) => {
    const receiverEmail = "shubhamvhiwale@gmail.com"; // Replace with the recipients email
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${receiverEmail}`;
    window.open(gmailUrl, "_blank");
  };
  const redirectToPhoneDial = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, "_self");
  };
  const handleDownload = () => {
    const url =
      "https://firebasestorage.googleapis.com/v0/b/portfulio-main.appspot.com/o/resume%2Fshubham_hiwale_Full_stack.pdf?alt=media&token=9e38dcb4-e77d-42df-8207-a71febaf93d1";
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.setAttribute("download", "CurriculumVitae.pdf"); // You can specify a default file name here
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  return (
    <div className="w-full h-[100vh] flex flex-col-reverse sm:flex-row  justify-between">
      <div className="w-full sm:w-[75%] h-[100%] sm:h-full flex justify-center flex-col p-5">
        <h3 className="text-2xl" data-aos-delay="500" data-aos="fade-right">
          Hello, Its me
        </h3>
        <h3 data-aos="fade-right" className="text-4xl sm:text-7xl md:text-5xl">
          SHUBHAM HIWALE
        </h3>
        <p
          className="text-[12px] pt-3"
          data-aos-delay="600"
          data-aos="fade-right"
        >
          A graduate with a Bachelors degree in Computer Science from MIT
          College, Aurangabad, in 2021, was born in 2000. Throughout my academic
          journey, Ive been driven by a profound interest in technology and a
          thirst for knowledge in the realm of computer science. MIT College
          provided me with a nurturing environment to hone my skills in
          programming, delve into algorithms, and master data structures. Now
          equipped with a solid foundation, Im eager to apply my expertise to
          real-world challenges and contribute meaningfully to the field.
        </p>
        <div className="flex justify-between items-center">
          <div className="flex">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <a
                target="__blank"
                href="https://www.linkedin.com/in/shubham-hiwale-6329b0242"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-offset="100px"
              >
                <FaLinkedin
                  key="linkedin-icon"
                  size={23}
                  className="cursor-pointer hover:text-blue-500"
                />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="ml-2"
            >
              <a
                target="__blank"
                href="https://github.com/shubhamvhiwale"
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-offset="100px"
              >
                <FaGithub
                  key="github-icon"
                  size={23}
                  className="cursor-pointer hover:text-gray-700"
                />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="ml-2"
            >
              <div
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-offset="100px"
              >
                <FaFacebook
                  key="facebook-icon"
                  size={23}
                  className="cursor-pointer hover:text-blue-700"
                />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="ml-2"
            >
              <div
                data-aos="fade-up"
                data-aos-delay="900"
                data-aos-offset="100px"
              >
                <SiVercel
                  key="vercel-icon"
                  size={23}
                  className="cursor-pointer hover:text-white"
                />
              </div>
            </motion.div>
          </div>
          <div
            data-aos-delay="600"
            data-aos="fade-left"
            className="mt-5  flex justify-start donwload-btn-container"
          >
            <motion.button
              onClick={handleDownload}
              style={{ marginTop: "-20px" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="flex justify-center items-center text-xs p-1 rounded-md border border-gray-700 bg-gray-600 text-white"
            >
              <IoMdCloudDownload />
              &nbsp; Download CV
            </motion.button>
          </div>
        </div>
        <div className="flex justify-between text-xs">
          <div
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-offset="100px"
            data-tooltip-id="gmail-tooltip"
            className="cursor-pointer  hover:font-bold email-container mt-3"
            onClick={() => redirectToGmail("shubhamvhiwale@rgmail.com")}
          >
            <div className="gmail-icon">
              <SiGmail key="gmail" />
            </div>
            <span
              style={{ textDecoration: "underline" }}
              className="text-blue-800"
            >
              shubhamvhiwale@gmail.com
            </span>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-offset="100px"
            data-tooltip-id="phone-num-tooltip"
            className="cursor-pointer  hover:font-bold phone-container mt-3"
            onClick={() => redirectToPhoneDial("8600888776")}
          >
            <div className="phone-icon">
              <FaPhone key="phone-icon" />
            </div>
            <span
              style={{ textDecoration: "underline" }}
              className="text-blue-800"
            >
              +91 8600888776
            </span>
          </div>
          <ReactTooltip
            id="phone-num-tooltip"
            content="Clicke on the number to dial"
            variant="dark"
            place="bottom"
          />
          <ReactTooltip
            id="gmail-tooltip"
            content="Clicke and connect with me!"
            variant="dark"
            place="bottom"
          />
        </div>
      </div>
      <div className="profile-container border w-full  sm:w-[25%] md:w-3/4 h-[100%]  sm:h-full"></div>
    </div>
  );
};

export default Profile;
