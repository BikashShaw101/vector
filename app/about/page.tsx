import React from "react";
import AboutCard from "./_components/about-card";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

import bhawesh from "@/public/member/bhawesh.jpeg";
import bikash from "@/public/member/bikash.jpeg";
import bipul from "@/public/member/bipul.jpeg";
import saptarshi from "@/public/member/saptarshi.jpg";
import rahul from "@/public/member/rahul.jpeg";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

const memberData = [
  {
    name: "Bikash kumar Shaw",
    stats: "Developer and Designer",
    desc:
      "Bikash shaw, Love to do coding and explore new things, Professional Graphic Designer and Video Editor ",

    img: bikash,
    links: {
      gmail: "bikashvicky101@gmail.com",
      linkedin: "https://www.linkedin.com/in/bikash-shaw/",
      github: "https://github.com/BikashShaw101",
    },
  },
  {
    name: "Saptarshi Mandal",
    stats: "Assitance Developer",
    desc:
      "Saptarshi Mandal, student of FIEM, persuing BCA, and self learner hobbies : Gaming, Gardening",

    img: saptarshi,
    links: {
      gmail: "saptarshim0123@gmail.com",
      linkedin: "linkedInProfile",
      github: "Github(optional)",
    },
  },
  {
    name: "Bhawesh Kumar Mahto",
    stats: "Documentation Assistant",
    desc:
      "Bhawesh kumar mahto, student of FIEM, hobbies : playing cricket , reading books,photographer, Riding ",

    img: bhawesh,
    links: {
      gmail: "bhaweshkumar617@gmail.com",
      linkedin: "linkedInProfile",
      github: "Github(optional)",
    },
  },

  {
    name: "Rahul Pathak",
    stats: "Documentation Handler",
    desc:
      "Rahul Pathak, student as a software engineer, FIEM, hobbies: Gaming, Learning",

    img: rahul,
    links: {
      gmail: "rp258911@gmail.com",
      linkedin: "linkedInProfile",
      github: "Github(optional)",
    },
  },
  {
    name: "Bipul prasad",
    stats: "Entrepreneur and Management",
    desc:
      "I'm Bipul prasad, self learner, problem solver, and  Entrepreneur , hobbies: Traveling",

    img: bipul,
    links: {
      gmail: "bipulprasad14.1.2003@gmail.com",
      linkedin: "linkedInProfile",
      github: "Github(optional)",
    },
  },
];

const font = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

const About = () => {
  return (
    <>
      <div className="max-w-screen-5xl relative min-h-full bg-blue-950 shadow mx-auto py-7 px-4 my-0 ">
        <div className="mb-7">
          <Link
            href={"/"}
            className={cn(
              "flex items-center text-white font-semibold shadow-md rounded-md text-xl",
              font.className
            )}
          >
            <MoveLeft size={30} strokeWidth={2.5} className="text-white" />
          </Link>
          <h1
            className={cn(
              "font-semibold text-6xl mt-7 text-slate-100 text-center  ",
              font.className
            )}
          >
            About us
          </h1>
        </div>
        <div className={cn("text-slate-50", font.className)}>
          <p className="text-3xl mb-2 font-bold text-center">College Team</p>
          <p className="mb-5 text-xl font-normal text-center">
            Members of **Vector-Board** Major Project
          </p>
          <p className="mb-5 text-xl font-normal text-center uppercase">
            fiem batch 2021 - 2024
          </p>
        </div>
        <div className="py-8 px-4 rounded-xl shadow-md dark:bg-gray-800 w-full ">
          <div className="flex gap-3 flex-wrap 2xl:flex-nowrap rounded-md shadow-lg drop-shadow-md items-center justify-center ">
            {memberData.map((member, index) => (
              <AboutCard
                key={index}
                name={member.name ? member.name : "Sample name"}
                stats={member.stats ? member.stats : "Sample status"}
                desc={member.desc ? member.desc : "Sample description"}
                img={member.img}
                links={member.links}
              />
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <Link
                href="https://bikashkumarshaw.netlify.app/"
                className="hover:underline "
                target="_blank"
              >
                BikashKumarShaw
              </Link>
              . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 sm:mt-0">
              <li>
                <a
                  href="https://bikashkumarshaw.netlify.app/#about"
                  className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://bikashkumarshaw.netlify.app/#contact"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  );
};

export default About;
