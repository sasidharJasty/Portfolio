"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Github, Instagram, Linkedin, Printer, Youtube, Mail } from "lucide-react";

import {
  CommandDialog,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./Components/command.tsx"; // Adjust the import path as necessary
import reactLogo from "./assets/react.svg";
import django from "./assets/django.png";
import python from "./assets/python.webp";
import profile from "./assets/profile.jpeg";
import js from "./assets/js.png";
import Navbar from "./Components/Navbar";
import "./App.css";
import dyne from "./assets/dyne.png";
import Project from "./Components/Project";
import project1 from "./assets/project1.png";
import DyneProj from "./assets/DyneHome.png";
import YMP from "./assets/YMP.png";
import HCCC from "./assets/HCCC.png";
import Taskify from "./assets/Taskify.png";
import SHS from "./assets/SHS.png";
import Experience from "./Components/Experience";
import buildspace from "./assets/buildspace.png";
import headstarter from "./assets/headstarter.jpeg";
import { motion } from "framer-motion";

function App() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0); // Track the selected index
  const [scrolled, setScrolled] = useState(false); // Track if the user has scrolled down 
  const commandItems = [
    {
      label: "Print Resume",
      action: () => window.open("https://drive.google.com/file/d/1xFxMNb-wYGq_m_tc8eAH44M5cQLzA109/view?usp=sharing", "_blank"),
      shortcut: "Ctrl + P",
      icon: <Printer className="mr-2 h-4 w-4" />,
    },
    {
      label: "Visit LinkedIn",
      action: () => window.open("https://www.linkedin.com/in/sasidhar-jasty/", "_blank"),
      shortcut: "Ctrl + L",
      icon: <Linkedin className="mr-2 h-4 w-4" />,
    },
    {
      label: "Visit Instagram",
      action: () => window.open("https://www.instagram.com/sasidhar.jasty/", "_blank"),
      shortcut: "Ctrl + I",
      icon: <Instagram className="mr-2 h-4 w-4" />,
    },
    {
      label: "Email Me",
      action: () => window.open("mailto:sasidhar.jasty@gmail.com", "_blank"),
      shortcut: "Ctrl + E",
      icon: <Mail className="mr-2 h-4 w-4" />,
    },
    {
      label: "Visit GitHub",
      action: () => window.open("https://github.com", "_blank"),
      shortcut: "Ctrl + G",
      icon: <Github className="mr-2 h-4 w-4" />,
    },
  ];

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (open) {
        if (e.key === "ArrowDown") {
          setSelectedIndex((prev) => (prev + 1) % commandItems.length);
        } else if (e.key === "ArrowUp") {
          setSelectedIndex(
            (prev) => (prev - 1 + commandItems.length) % commandItems.length
          );
        } else if (e.key === "Enter") {
          commandItems[selectedIndex].action();
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, selectedIndex]);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const runCommand = React.useCallback((command) => {
    setOpen(false);
    command();
  }, []);

  const Skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Python",
    "Django",
    "SQL",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Chakra UI",
    "Git",
    "GitHub",
    "APIs",
    "REST API",
  ];
  return (
    <>
      <Navbar />
      <motion.div
        className="max-w-screen md:w-[800px] w-screen min-w-screen md:px-0 px-2 md:min-w-[800px] mx-auto mt-24 text-left scroll-smooth"
        id="home"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full flex md:flex-row flex-col">
          {" "}
          <h1 className="md:text-4xl text-3xl w-fit">
            Hi, I am Sasidhar Jasty 👋{" "}
          </h1>{" "}
          <a
            href={
              "https://drive.google.com/file/d/1xFxMNb-wYGq_m_tc8eAH44M5cQLzA109/view?usp=sharing"
            }
            target="_blank"
            className="dark:bg-neutral-100 hidden md:block bg-neutral-800 p-2 py-1 rounded-md h-fit  text-sm  text-white dark:text-black mx-auto w-fit text-md absolute right-0 "
          >
            {" "}
            Download My Resume
          </a>
        </div>
        <a
          href={
            "https://drive.google.com/file/d/1xFxMNb-wYGq_m_tc8eAH44M5cQLzA109/view?usp=sharing"
          }
          target="_blank"
          className="dark:bg-neutral-100 md:hidden block bg-neutral-800 p-2 py-1 rounded-md h-fit  text-sm  text-white dark:text-black mt-1 w-fit text-md  "
        >
          {" "}
          Download My Resume
        </a>

        <p className="text-[--paragraph] mt-5 text-sm">
          I'm a{" "}
          <span className=" dark:text-white text-black">
            full stack web developer
          </span>
          , student, and{" "}
          <span className=" dark:text-white text-black">AI enthusiast</span>.
          👨‍💻📚 I work on{" "}
          <span className=" dark:text-white text-black">
            web development projects
          </span>{" "}
          at{" "}
          <a
            href="https://www.dyneresearch.com/"
            target="_blank"
            className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 inline-flex"
          >
            <img
              src={dyne}
              className=" h-3 my-auto mr-2 invert dark:invert-0"
            ></img>
            Dyne Research
          </a>{" "}
          and am a <span className=" dark:text-white text-black">student</span>{" "}
          at Sierra High School 🎓. I thrive on combining academic rigor with
          practical experience, continually expanding my skills in{" "}
          <a
            href="https://react.dev/"
            target="_blank"
            className="rounded border group/react border-neutral-200 bg-neutral-50 px-2 py-0.5 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 inline-flex"
          >
            <img
              src={reactLogo}
              className=" h-3 my-auto mr-2  group-hover/react:grayscale-0 transition-all"
            ></img>
            React
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="https://www.djangoproject.com/"
            className="rounded border  border-neutral-200 bg-neutral-50 px-2 py-0.5 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 inline-flex"
          >
            <img src={django} className=" h-3 my-auto mr-2 "></img>
            Django
          </a>{" "}
          as well as{" "}
          <a
            target="_blank"
            href="https://www.python.org/"
            className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 inline-flex"
          >
            <img src={python} className=" h-3 my-auto mr-2 "></img>
            Python
          </a>{" "}
          and{" "}
          <a
            href="https://www.javascript.com/"
            target="_blank"
            className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 inline-flex"
          >
            <img src={js} className=" h-3 my-auto mr-2 "></img>
            JavaScript
          </a>{" "}
          .
          <span className="text-white">
            I am open to collaborate on projects and intern at companies!
          </span>
        </p>
        <div>
          <img src={profile} className="mt-5 rounded-xl shadow-2xl"></img>
        </div>

        <hr className="my-5 " id="experience"></hr>
        <div>
          <h1 className="text-3xl mb-6">Experience 🧑‍💻</h1>
          <Experience
            img={
              "https://framerusercontent.com/images/yz1gg8ogR71UOP4vNUwRW2WcrY.png"
            }
            title={"Youth Mentorship Project"}
            short_description={"Lead Full Stack Web Developer"}
            description={
              "Led a small team of developers to create the employee/ Volunteer management system to track hours and events. This was achieved by using a Tech stack made up of React, Django and Django Rest Api. Set up prototype version on vercel and built a responsive web application."
            }
            time_line={"September 2023 - July 2024"}
          />
          <Experience
            img={
              "https://media.licdn.com/dms/image/v2/D560BAQESYNBTY7LpnA/company-logo_100_100/company-logo_100_100/0/1728383051007/dyne_research_logo?e=1740614400&v=beta&t=7ZpslS2Q9iFPyrIO2NP0w7Ef0HueJozWZFYebk6ZcIQ"
            }
            img_class={"invert dark:invert-0"}
            title={"Dyne Research"}
            short_description={"Full Stack Web Developer"}
            description={
              "I led the design and development of all web applications at Dyne Research. Using technologies such as React for front-end development, and Django Rest API for back-end work. I oversee the integration of various APIs to ensure seamless functionality across our platforms. Leading to over 100% more web traffic to the website and over a 30% increase in web traffic to customer turnout rate from the website."
            }
            time_line={"March 2023 - Present"}
          />
          <Experience
            img={headstarter}
            title={"Headstarter SWE Fellowship"}
            short_description={"Software Engineering Fellow"}
            description={
              "In the Headstarter Fellowship, I transformed my ideas into tangible projects through hands-on experience and guidance from industry leaders. I gained crucial skills in project development, leadership, and scaling solutions. The fellowship's structured approach and strong peer network played a key role in shaping my ideas and overcoming obstacles along the way."
            }
            time_line={"June 2024 - August 2024"}
          />
        </div>
        <hr className="my-5 mt-14"></hr>
        <div>
          <h1 className="text-3xl mb-6" id="education">
            Education 📖
          </h1>
          <Experience
            img={buildspace}
            img_class={"invert"}
            title={"Buildspace"}
            short_description={"Participated in s5"}
            description={
              "In Buildspace S5, I took my project from idea to launch through hands-on work and expert mentorship. I learned valuable skills in development, project management, and scaling products. The program's structured approach and community support were instrumental in refining my ideas and overcoming challenges."
            }
            time_line={"2023 - 2024"}
            badge={["teamwork", "Entrepretunure"]}
          />
          <Experience
            img={SHS}
            title={"Sierra High School"}
            short_description={"Class of 2027 | CS Student"}
            description={
              "I am a Student at Sierra High, I am currently a 10th Grader with a 4.0 GPA and I am currently taking multiple AP's and Honors courses. While also pursuing my hobby of programming by taking on projects and exploring the latest trends."
            }
            time_line={"November 2023 - Present"}
          />
          <Experience
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQnvOhDG6Sr_iFOK7EClRvpRAPR_gH6bvd8g&s"
            }
            title={"Diablo Valley College"}
            short_description={"Pursuing CS associate degree"}
            description={
              "As a Dual Enrollment student at Diablo Valley College, I'm actively pursuing an Associate Degree in Computer Science. I'm taking advanced college-level courses to deepen my understanding of programming, algorithms, and software development. This experience is enhancing my technical skills and preparing me for a seamless transition to a four-year university and a career in tech."
            }
            time_line={"June 2023 - Present"}
          />
        </div>
        <hr className="my-5 " id="experience"></hr>
        <div>
          <h1 className="text-3xl mb-6">Skills 🛠️</h1>
          <div className=" justify-center text-center">
            {Skills.map((skill) => {
              return (
                <div className="dark:bg-neutral-100 bg-neutral-800 p-2 rounded-md h-fit text-sm inline-block m-1 mx-2 text-white dark:text-black hover:scale-125 transition-all">
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
        <hr className="my-5 mt-14" id="hackathon"></hr>
        <div className="mx-auto my-24">
          {" "}
          <div className="dark:bg-neutral-100 bg-neutral-800 p-2 py-1 rounded-md h-fit    text-white dark:text-black mx-auto w-fit text-lg">
            Hackathons
          </div>{" "}
          <h1 className="w-fit mx-auto text-center text-[50px] font-bold">
            Check out my recent Hacks
          </h1>{" "}
          <p className="mx-auto text-lg w-[80%] text-neutral-400 text-center">
            I've participated in various hackathons, collaborating on projects
            ranging from simple prototypes to fully functional applications.
            Here are a few of my favorite.
          </p>{" "}
        </div>
        <div>
          <Experience
            img={
              "https://www.hackakhan.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.58eda19f.png&w=256&q=75"
            }
            img_class={""}
            title={"Hackakhan"}
            short_description={"Built a website for highschoolers"}
            description={
              "Built a website that allows students to get help in their school subjects by pairing them with a volunteer that is proficient in that subject."
            }
            time_line={"June 2024"}
            badge={["teamwork", "Entrepretunure"]}
          >
            <a
              href={"https://devpost.com/software/eduspark"}
              className="dark:bg-neutral-100 bg-neutral-800 p-2 py-1 rounded-md h-fit  text-sm inline-block  text-white dark:text-black"
            >
              Devpost ↗️
            </a>
          </Experience>
          <Experience
            img={
              "https://www.milpitashacks.com/assets/Milpitas%20Hacks%20Logo-BXy6iFST.png"
            }
            title={"Milpitas Hacks"}
            short_description={"Built a website to manage volunteering"}
            description={
              "Developed an application that allows seamless storage of food drives, and a dashboard for volunteers and donors."
            }
            time_line={"May 2024"}
          >
            <a
              href={"https://devpost.com/software/wecommunity-drive"}
              className="dark:bg-neutral-100 bg-neutral-800 p-2 py-1 rounded-md h-fit  text-sm inline-block  text-white dark:text-black"
            >
              Devpost ↗️
            </a>
          </Experience>
          <Experience
            img={
              "https://images.squarespace-cdn.com/content/v1/586af3379de4bb26823cf49f/51182e2c-694e-414e-8bb8-770f17fbd6de/anovahacks.png?format=100w"
            }
            title={"Anova Hacks"}
            short_description={"Website to help connect users to organizations"}
            description={
              "Developed a website that connects volunteers with organizations to match their passions and expertise with causes needing support, from environmental conservation to education. "
            }
            time_line={"April 2024"}
          >
            <a
              href={"https://github.com/sasidharJasty/anovahacks"}
              className="dark:bg-neutral-100 bg-neutral-800 p-2 py-1 rounded-md h-fit  text-sm inline-block  text-white dark:text-black"
            >
              Devpost ↗️
            </a>
          </Experience>
          <Experience
            img={"https://www.mateohacks.com/img/icon.png"}
            title={"Mateo Hacks"}
            short_description={"Made a ML model for sign language"}
            description={
              "Developed a machine learning model to detect and interpret sign language gestures, enabling real-time communication."
            }
            time_line={"March 2024"}
          ></Experience>
          <Experience
            img={"https://i.ibb.co/p35zV71/image-removebg-preview-1.png"}
            title={"Lancer Hacks VII"}
            short_description={"Website to report harassment"}
            img_class={"dark:invert-0 invert"}
            description={
              "Created a website that allows individuals to anonymously report harassment or other violations while providing public access to aggregated data for awareness and prevention."
            }
            time_line={"March 2024"}
          ></Experience>
          <Experience
            img={
              "https://d112y698adiu2z.cloudfront.net/photos/production/judge_photos/002/538/373/datas/large.png"
            }
            title={"Oasis Hacks"}
            short_description={"Website to report harassment"}
            description={
              "Designed and developed a website that enables students to discover volunteer opportunities and efficiently track their service hours."
            }
            time_line={"August 2023"}
          ></Experience>
        </div>

        <hr className="my-5 mt-14 "></hr>

        <div className="mx-auto my-24">
          {" "}
          <div className="dark:bg-neutral-100 bg-neutral-800 p-2 py-1 rounded-md h-fit   text-white dark:text-black mx-auto w-fit text-lg">
            My Projects
          </div>{" "}
          <h1 className="w-fit mx-auto text-[50px] font-bold text-center">
            Check out my latest work
          </h1>{" "}
          <p className="mx-auto text-lg w-[60%] text-neutral-400 text-center">
            I've worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.
          </p>{" "}
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between mt-4 w-fit mx-auto">
            <Project
              img={"https://i.ibb.co/Qj8rzbF/Screenshot-376.png"}
              title="Arbor Bend (In Progress)"
              date={"Nov 2024 - Present"}
              link="https://arbor-bend.vercel.app/"
              description="Currently developing an AI-powered marketplace that enables community residents to securely buy, sell, and exchange goods and services with their neighbors, fostering trust and local connections."
              tags={["React.JS", "Django", "Shadcn UI", "REST APIs"]}
            />

            <Project
              img={"https://i.ibb.co/p1Q2WT9/Screenshot-2024-11-25-200556.png"}
              title={"Hackathon Website (In Progress)"}
              date={"Sept 2024 - Present"}
              link={"https://cal-hacks25.vercel.app/"}
              description={
                "Developed a dynamic hackathon website featuring advanced animations to enhance user engagement and provide an interactive experience."
              }
              tags={["Next.js", "Typescript", "Magic UI", "Framer Motion"]}
            />
            <Project
              img={project1}
              date={"Oct 2024 - Nov 2024"}
              title={"Personal Portfolio Website"}
              link={"https://sjasty-portfolio.vercel.app/"}
              GitLink={"https://github.com/sasidharJasty/Portfolio"}
              description={
                "A website built from scratch using React and Tailwind CSS. "
              }
              tags={["React", "Tailwind", "Responsive"]}
            />
            <Project
              img={"https://i.ibb.co/frbVz2t/Screenshot-2024-11-25-183935.jpg"}
              title={"Stock Market Prediction"}
              date={"Nov 2024 - Nov 2024"}
              link={
                "https://stockmarketprediction-5hejvhbgcu3bfxpbeys9ye.streamlit.app/"
              }
              description={
                "Developed and deployed a stock price prediction app with sentiment analysis for real-time financial insights, utilizing linear regression and data analysis and visualization frameworks."
              }
              tags={[
                "Streamlit",
                "yFinance",
                "Pandas",
                "Numpy",
                "Skikit-learn",
              ]}
            />
            <Project
              img={"https://i.ibb.co/Xtm5RS9/Screenshot-2024-11-25-195606.png"}
              title={"Workflow"}
              link={"https://taskify-theta-woad.vercel.app/"}
              date={"June 2024 - Nov 2024"}
              description={
                "Developed a comprehensive workflow management solution designed to enhance productivity, communication, and collaboration across your team."
              }
              tags={[
                "React",
                "PostgreSQL",
                "Django",
                "Tailwind CSS",
                "Magic UI",
              ]}
            />
          </div>
          <div className="mx-auto my-24" id="contact">
            {" "}
            <div className="dark:bg-neutral-100 bg-neutral-800 p-2 py-1 rounded-md h-fit   text-white dark:text-black mx-auto w-fit text-lg">
              Contact
            </div>{" "}
            <h1 className="w-fit mx-auto text-[50px] font-bold text-center">
              Get in Touch
            </h1>{" "}
            <p className="mx-auto text-xl w-[80%] text-neutral-400 text-center">
              Want to collaborate on a project or just chat? Feel free to reach
              out to me by{" "}
              <a
                className="text-blue-400"
                href="mailto:sasidhar.jasty@gmail.com"
              >
                email
              </a>{" "}
              or on{" "}
              <a
                className="text-blue-400"
                href="https://www.linkedin.com/in/sasidhar-jasty/"
              >
                social media
              </a>
              .
            </p>{" "}
          </div>
        </div>

        {/* Command Menu */}
        {open && (
          <CommandDialog open={open} onOpenChange={setOpen}  className="bg-black border-white/60">

            <CommandInput
              placeholder="Search Command"
              className="font-mono text-lg text-white border-none m-3 bg-transparent border-gray-500/60"
            />
            <CommandList className="text-white border-gray-500/60 ">
              <CommandEmpty className="p-6  text-white border-gray-500/60">
                No results found.
              </CommandEmpty>
              <CommandGroup heading="Actions" className="text-white">
                {commandItems.map((item, index) => (
                  <CommandItem
                    key={index}
                    className={`text-md text-white ${
                      selectedIndex === index
                        ? "bg-blue-900/45 border-l-4 border-white"
                        : ""
                    }`} // Change background and border for selected item
                    onSelect={item.action}
                    onMouseEnter={() => setSelectedIndex(index)} // Change selected index on hover
                  >
                    {item.icon}
                    {item.label}
                    <kbd className="pointer-events-none absolute right-2 top-2 flex h-5 select-none items-center gap-1 rounded bg-[#252525] px-1.5 font-mono text-sm font-medium text-white">
                      <span className="text-sm">{item.shortcut}</span>
                    </kbd>
                  </CommandItem>
                ))}
              </CommandGroup>
              
            </CommandList>
            <div className="bottom-0 left-0 right-0  flex items-center justify-between w-[700px] px-4 py-2 bg-[#1e1e1e] border-t border-white/10 text-white text-sm font-mono">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 rounded bg-[#252525]">↵</span>
                <span>to select</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <span className="px-2 py-1 rounded bg-[#252525]">↑</span>
                  <span className="px-2 py-1 rounded bg-[#252525]">↓</span>
                </span>
                <span>to navigate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <span className="px-2 py-1 rounded bg-[#252525]">Cmd </span>
                  +
                  <span className="px-2 py-1 rounded bg-[#252525]">K</span>
                </span>
                <span>to exit</span>
              </div>
            </div>

          </CommandDialog>
         
        )}
      </motion.div>
      {/* Bottom bar */}
      {scrolled && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white text-center py-2">
          Press <span className="px-2 py-1 rounded bg-[#252525] border-white/60 shadow-lg border">Cmd</span> + <span className="px-2 py-1 rounded bg-[#252525] border-white/60 shadow-lg border">K</span> to open command palette
        </div>
      )}
    </>
  );
}

export default App;
