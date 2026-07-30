"use client";

//import * as React from "react";
import { useEffect, useState } from "react";
import { Github, Instagram, Linkedin, Printer,  Mail, ExternalLink } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./Components/command.tsx"; // Adjust the import path as necessary
import pytorch from "./assets/pytorch.png";
import tensorflow from "./assets/tensorflow.webp";

import python from "./assets/python.webp";
import profile from "./assets/profile.jpg";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./Components/dialog.tsx";
import Navbar from "./Components/Navbar";
import "./App.css";

import Project from "./Components/Project";
import project1 from "./assets/project1.png";
import AIEA from "./assets/AIEA.png";
import dyne from "./assets/Dyne.avif";
import CodeCatalyst from "./assets/CodeCatalyst.png";

//import YMP from "./assets/YMP.png";
//import HCCC from "./assets/HCCC.png";
//import Taskify from "./assets/Taskify.png";
import SHS from "./assets/SHS.png";
import Experience from "./Components/Experience";
import buildspace from "./assets/buildspace.png";
import headstarter from "./assets/headstarter.jpeg";
import { motion } from "framer-motion";

function App() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0); // Track the selected index
  //const [scrolled, setScrolled] = useState(false); // Track if the user has scrolled down
  const [selectedProject, setSelectedProject] = useState(null);
  const commandItems = [
    {
      label: "Download Resume",
      action: () => window.open("https://drive.google.com/file/d/1xFxMNb-wYGq_m_tc8eAH44M5cQLzA109/view?usp=sharing", "_blank"),
      shortcut: "Ctrl + P",
      icon: <Printer className="mr-2 h-4 w-4" />,
    },
    {
      label: "LinkedIn Profile",
      action: () => window.open("https://www.linkedin.com/in/sasidhar-jasty/", "_blank"),
      shortcut: "Ctrl + L",
      icon: <Linkedin className="mr-2 h-4 w-4" />,
    },
    {
      label: "GitHub Repos",
      action: () => window.open("https://github.com/sasidharJasty", "_blank"),
      shortcut: "Ctrl + G",
      icon: <Github className="mr-2 h-4 w-4" />,
    },
    {
      label: "Email Me",
      action: () => window.open("mailto:sasidhar.jasty@gmail.com", "_blank"),
      shortcut: "Ctrl + E",
      icon: <Mail className="mr-2 h-4 w-4" />,
    },
    {
      label: "Jump to Projects",
      action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
      shortcut: "Ctrl + J",
      icon: <ExternalLink className="mr-2 h-4 w-4" />,
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
  /*useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const runCommand = React.useCallback((command) => {
    setOpen(false);
    command();
  }, []);*/

  const Skills = {
    "Languages": ["Python", "Java", "C++", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
    "AI/ML": ["PyTorch", "TensorFlow", "Scikit-Learn", "Transformers", "Numpy"],
    "Web/Backend": ["React", "Next.js", "Django", "REST APIs", "Tailwind CSS", "Chakra UI"],
    "Tools & Other": ["Git", "GitHub", "Data Analysis", "Leadership"],
  };
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px]"
        />
      </div>
      <Navbar />
      <motion.div
        className="max-w-screen md:w-[800px] w-screen min-w-screen md:px-0 px-2 md:min-w-[800px] mx-auto mt-24 text-left scroll-smooth"
        id="home"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full flex flex-col md:flex-row items-center gap-2">
          <div className="flex flex-col items-start">
            <h1 className="md:text-6xl text-4xl w-fit font-bold tracking-tighter leading-none">
              Hi, I&apos;m Sasidhar Jasty. <br />
              <span className="text-neutral-500">Aspiring Full Stack Developer & AI Engineer.</span>
            </h1>

            <div className="flex gap-4 mt-6">
              <a
                href="#projects"
                className="bg-neutral-800 dark:bg-neutral-100 text-white dark:text-black px-6 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95"
              >
                View My Work
              </a>
              <a
                href="https://drive.google.com/file/d/1xFxMNb-wYGq_m_tc8eAH44M5cQLzA109/view?usp=sharing"
                target="_blank"
                className="border border-neutral-300 dark:border-neutral-700 px-6 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-150"></div>
            <img
              src={profile}
              className="h-32 w-48 rounded-full object-cover shadow-2xl border-4 border-white dark:border-neutral-800 relative z-10"
            />
          </div>
        </div>

        <div className="mt-16 mb-10">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-3xl font-bold">About Me ✍️</h1>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800"></div>
          </div>
          <p className="text-[--paragraph] text-sm leading-relaxed max-w-2xl">
            I&apos;m a{" "}
            <span className=" dark:text-white text-black font-medium">
              full stack web developer
            </span>
            , student, and{" "}
            <span className=" dark:text-white text-black font-medium">AI Engineer</span>.
            👨‍💻📚 I work on{" "}
            <span className=" dark:text-white text-black font-medium">
              Machine Learning and AI Research
            </span> at{" "}
            <a
              href="https://aiea-lab.github.io/"
              target="_blank"
              className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 inline-flex"
            >
              <img
                src={AIEA}
                className=" h-3 my-auto mr-2 invert dark:invert-0"
              ></img>
              AIEA Lab
            </a>{" "}
            at UCSC as a <span className=" dark:text-white text-black font-medium">research intern</span> under the guidance of <a
              href="https://people.ucsc.edu/~lgilpin/"
              target="_blank"
              className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 inline-flex"
            >
              Prof. Leilani Gilpin
            </a>and am a <span className=" dark:text-white text-black font-medium">student</span>{" "}
            at Sierra High School and Diablo Valley College 🎓. Now I thrive on combining academic rigor with
            practical AI engineering, continually expanding my skills in{" "}
            <a
              href="https://www.python.org/"
              target="_blank"
              className="group/python inline-flex rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            >
              <img
                src={python}
                alt="Python logo"
                className="my-auto mr-2 h-3 transition-all group-hover/python:grayscale-0"
              />
              Python
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              href="https://pytorch.org/"
              className="inline-flex rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            >
              <img src={pytorch} alt="PyTorch logo" className="my-auto mr-2 h-3" />
              PyTorch
            </a>{" "}
            as well as{" "}
            <a
              target="_blank"
              href="https://www.tensorflow.org/"
              className="inline-flex rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            >
              <img src={tensorflow} alt="TensorFlow logo" className="my-auto mr-2 h-3" />
              TensorFlow
            </a>{" "}
            and{" "}
            <a
              href="https://arxiv.org/abs/1706.03762"
              target="_blank"
              title="Attention Is All You Need"
              className="inline-flex rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            >
              Transformer Architectures
            </a>{" "}
            .
            <span className="text-white">
              I am open to collaborate on projects and intern at companies!
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-8 mt-12">
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-3xl font-bold">Experience 🧑‍💻</h1>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800"></div>
          </div>
          <div className="flex flex-col gap-2">
            <Experience
              img={AIEA}
              img_class={"invert dark:invert-0"}
              title={"University of California Santa Cruz"}
              short_description={"Reseach Inter at Artifical Intelligence Explainability Lab (AIEA)"}
              description={`
                Researching long-term memory architectures for large language models, integrating symbolic reasoning, semantic and episodic memory, adaptive forgetting, and knowledge retrieval.
                Developing datasets, benchmarks, and evaluation pipelines to measure memory retrieval, reasoning accuracy, and long-term agent consistency.
                Conducting experiments on cognitive-inspired memory systems as part of both collaborative lab research and an independent project aimed at academic publication.
                Working under the guidance and mentorship of Professor Leilani Gilpin, contributing to ongoing AI and machine learning research.
              `}
              time_line={"December 2025 - Present"}
            />
            <Experience
              img={CodeCatalyst}
              img_class={"invert dark:invert-0"}
              title={"CodeCatalyst"}
              short_description={"Founder & Lead Organizer"}
              description={`
            Founded CodeCatalyst and launched SierraHacks to expand technology opportunities for local high school students.
            Organized a 120+ participant hackathon, coordinating logistics, volunteers, sponsors, and event operations.
            Secured $10,000+ in prizes and recruited industry professionals to serve as judges and mentors.
            Built partnerships with sponsors and created hands-on experiences that introduced students to software development and entrepreneurship.
              `}
              time_line={"August 2024 - Present"}
            />
            <Experience
              img={dyne}
              img_class={"invert dark:invert-0"}
              title={"Dyne Research"}
              short_description={"CTO & Lead Web Developer"}
              description={`
            Led development of Dyne Research's web platform using React, Django REST Framework, and modern API integrations.
            Increased website traffic by over 100% and improved website-to-customer conversions by more than 30%.
            Built scalable frontend and backend systems while integrating third-party services to streamline workflows.
            Contributed to securing Microsoft for Startups and AWS Activate support, helping provide infrastructure and resources for products including PneumoVision.
              `}
              time_line={"March 2024 - March 2025"}
            />

            <Experience
              img={headstarter}
              title={"Headstarter SWE Fellowship"}
              short_description={"Software Engineering Fellow"}
              description={`
            Built and shipped full-stack software projects through an intensive software engineering fellowship.
            Collaborated with engineers and peers to rapidly prototype, iterate, and deploy production-ready applications.
            Strengthened skills in full-stack development, system design, and product development through hands-on experience.
            Applied modern development practices including agile workflows, version control, and iterative deployment.
              `}
              time_line={"June 2024 - August 2024"}
            />
            <Experience
              img={"https://framerusercontent.com/images/yz1gg8ogR71UOP4vNUwRW2WcrY.png"}
              title={"Youth Mentorship Project"}
              short_description={"Lead Full-Stack Web Developer"}
              description={`
            Led development of a volunteer and employee management platform using React and Django REST Framework.
            Built features for event management, volunteer hour tracking, and administrative workflows.
            Managed a small development team while designing a responsive, scalable web application.
            Deployed prototype builds on Vercel and established the foundation for future platform development.
              `}
              time_line={"September 2023 - July 2024"}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-12">
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-3xl font-bold" id="education">Education 📖</h1>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800"></div>
          </div>
          <div className="flex flex-col gap-2">
            <Experience
              img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQnvOhDG6Sr_iFOK7EClRvpRAPR_gH6bvd8g&s"}
              title={"Diablo Valley College"}
              short_description={"Pursuing CS associate degree"}
              description={"As a Dual Enrollment student at Diablo Valley College, I'm actively pursuing an Associate Degree in Computer Science. I'm taking advanced college-level courses to deepen my understanding of programming, algorithms, and software development. This experience is enhancing my technical skills and preparing me for a seamless transition to a four-year university and a career in tech."}
              time_line={"June 2023 - Present"}
            />
            <Experience
              img={SHS}
              title={"Sierra High School"}
              short_description={"Class of 2027 | CS Student"}
              description={"I am a Student at Sierra High, I am currently a 10th Grader with a 4.0 GPA and I am currently taking multiple AP's and Honors courses. While also pursuing my hobby of programming by taking on projects and exploring the latest trends."}
              time_line={"November 2023 - Present"}
            />
            <Experience
              img={buildspace}
              img_class={"invert"}
              title={"Buildspace"}
              short_description={"Participated in s5"}
              description={"In Buildspace S5, I took my project from idea to launch through hands-on work and expert mentorship. I learned valuable skills in development, project management, and scaling products. The program's structured approach and community support were instrumental in refining my ideas and overcoming challenges."}
              time_line={"2023 - 2024"}
              badge={["teamwork", "Entrepretunure"]}
            />


          </div>
        </div>
        <div className="flex flex-col gap-8 mt-12">
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-3xl font-bold">Skills 🛠️</h1>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800"></div>
          </div>
          <div className="flex flex-col gap-6">
            {Object.entries(Skills).map(([category, skills]) => (
              <div key={category} className="flex flex-col gap-2">
                <h2 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                  {category}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="dark:bg-neutral-100 bg-neutral-800 p-2 px-3 rounded-md h-fit text-sm text-white dark:text-black hover:scale-105 transition-all cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
            I&apos;ve participated in various hackathons, collaborating on projects
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

        <div className="flex flex-col gap-8 mt-12">
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-3xl font-bold">My Projects</h1>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-between mt-4 w-fit mx-auto">
            <Project
              img={"https://i.ibb.co/Qj8rzbF/Screenshot-376.png"}
              title="Arbor Bend (In Progress)"
              date={"Nov 2024 - Present"}
              link="https://arbor-bend.vercel.app/"
              description="Currently developing an AI-powered marketplace that enables community residents to securely buy, sell, and exchange goods and services with their neighbors, fostering trust and local connections."
              tags={["React.JS", "Django", "Shadcn UI", "REST APIs"]}
              onClick={() => setSelectedProject({
                title: "Arbor Bend (In Progress)",
                date: "Nov 2024 - Present",
                link: "https://arbor-bend.vercel.app/",
                description: "Currently developing an AI-powered marketplace that enables community residents to securely buy, sell, and exchange goods and services with their neighbors, fostering trust and local connections.",
                tags: ["React.JS", "Django", "Shadcn UI", "REST APIs"],
                img: "https://i.ibb.co/Qj8rzbF/Screenshot-376.png"
              })}
            />
            <Project
              img={"https://i.ibb.co/p1Q2WT9/Screenshot-2024-11-25-200556.png"}
              title={"Hackathon Website (In Progress)"}
              date={"Sept 2024 - Present"}
              link={"https://cal-hacks25.vercel.app/"}
              description={"Developed a dynamic hackathon website featuring advanced animations to enhance user engagement and provide an interactive experience."}
              tags={["Next.js", "Typescript", "Magic UI", "Framer Motion"]}
              onClick={() => setSelectedProject({
                title: "Hackathon Website (In Progress)",
                date: "Sept 2024 - Present",
                link: "https://cal-hacks25.vercel.app/",
                description: "Developed a dynamic hackathon website featuring advanced animations to enhance user engagement and provide an interactive experience.",
                tags: ["Next.js", "Typescript", "Magic UI", "Framer Motion"],
                img: "https://i.ibb.co/p1Q2WT9/Screenshot-2024-11-25-200556.png"
              })}
            />
            <Project
              img={project1}
              date={"Oct 2024 - Nov 2024"}
              title={"Personal Portfolio Website"}
              link={"https://sjasty-portfolio.vercel.app/"}
              GitLink={"https://github.com/sasidharJasty/Portfolio"}
              description={"A website built from scratch using React and Tailwind CSS."}
              tags={["React", "Tailwind", "Responsive"]}
              onClick={() => setSelectedProject({
                title: "Personal Portfolio Website",
                date: "Oct 2024 - Nov 2024",
                link: "https://sjasty-portfolio.vercel.app/",
                GitLink: "https://github.com/sasidharJasty/Portfolio",
                description: "A website built from scratch using React and Tailwind CSS.",
                tags: ["React", "Tailwind", "Responsive"],
                img: project1
              })}
            />
            <Project
              img={"https://i.ibb.co/frbVz2t/Screenshot-2024-11-25-183935.jpg"}
              title={"Stock Market Prediction"}
              date={"Nov 2024 - Nov 2024"}
              link={"https://stockmarketprediction-5hejvhbgcu3bfxpbeys9ye.streamlit.app/"}
              description={"Developed and deployed a stock price prediction app with sentiment analysis for real-time financial insights, utilizing linear regression and data analysis and visualization frameworks."}
              tags={["Streamlit", "yFinance", "Pandas", "Numpy", "Skikit-learn"]}
              onClick={() => setSelectedProject({
                title: "Stock Market Prediction",
                date: "Nov 2024 - Nov 2024",
                link: "https://stockmarketprediction-5hejvhbgcu3bfxpbeys9ye.streamlit.app/",
                description: "Developed and deployed a stock price prediction app with sentiment analysis for real-time financial insights, utilizing linear regression and data analysis and visualization frameworks.",
                tags: ["Streamlit", "yFinance", "Pandas", "Numpy", "Skikit-learn"],
                img: "https://i.ibb.co/frbVz2t/Screenshot-2024-11-25-183935.jpg"
              })}
            />
            <Project
              img={"https://i.ibb.co/Xtm5RS9/Screenshot-2024-11-25-195606.png"}
              title={"Workflow"}
              link={"https://taskify-theta-woad.vercel.app/"}
              date={"June 2024 - Nov 2024"}
              description={"Developed a comprehensive workflow management solution designed to enhance productivity, communication, and collaboration across your team."}
              tags={["React", "PostgreSQL", "Django", "Tailwind CSS", "Magic UI"]}
              onClick={() => setSelectedProject({
                title: "Workflow",
                date: "June 2024 - Nov 2024",
                link: "https://taskify-theta-woad.vercel.app/",
                description: "Developed a comprehensive workflow management solution designed to enhance productivity, communication, and collaboration across your team.",
                tags: ["React", "PostgreSQL", "Django", "Tailwind CSS", "Magic UI"],
                img: "https://i.ibb.co/Xtm5RS9/Screenshot-2024-11-25-195606.png"
              })}
            />
          </div>
        </div>
        <div className="mx-auto my-24" id="contact">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-3xl font-bold">Get in Touch</h1>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800"></div>
          </div>
          <p className="mx-auto text-xl w-[80%] text-neutral-400 text-center mb-10">
            Want to collaborate on a project or just chat? Feel free to reach
            out to me.
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-3 group">
              <div className="bg-neutral-800 dark:bg-neutral-100 p-3 rounded-full">
                <Mail className="w-5 h-5 text-white dark:text-black" />
              </div>
              <span className="text-lg font-medium">sasidhar.jasty@gmail.com</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("sasidhar.jasty@gmail.com");
                  alert("Email copied to clipboard!");
                }}
                className="text-xs bg-neutral-200 dark:bg-neutral-700 px-2 py-1 rounded hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors"
              >
                Copy
              </button>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/sasidhar-jasty/"
                target="_blank"
                className="p-3 rounded-full bg-neutral-800 dark:bg-neutral-100 text-white dark:text-black hover:scale-110 transition-transform"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                className="p-3 rounded-full bg-neutral-800 dark:bg-neutral-100 text-white dark:text-black hover:scale-110 transition-transform"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/sasidhar.jasty/"
                target="_blank"
                className="p-3 rounded-full bg-neutral-800 dark:bg-neutral-100 text-white dark:text-black hover:scale-110 transition-transform"
                >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Command Menu */}
        {open && (
          <CommandDialog open={open} onOpenChange={setOpen}  className="bg-neutral-900 border-neutral-700 shadow-2xl">
            <CommandInput
              placeholder="Search commands... (Ctrl + K)"
              className="font-mono text-lg text-white border-none m-3 bg-neutral-800/50 rounded-lg"
            />
            <CommandList className="text-white border-neutral-700">
              <CommandEmpty className="p-6 text-neutral-500 text-center">
                No results found.
              </CommandEmpty>
              <CommandGroup heading="Quick Actions" className="text-neutral-300">
                {commandItems.map((item, index) => (
                  <CommandItem
                    key={index}
                    className={`text-md text-neutral-300 hover:text-white transition-colors ${
                      selectedIndex === index
                        ? "bg-neutral-800 border-l-2 border-blue-500"
                        : ""
                    }`}
                    onSelect={item.action}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    {item.icon}
                    {item.label}
                    <kbd className="pointer-events-none absolute right-2 top-2 flex h-5 select-none items-center gap-1 rounded bg-neutral-700 px-1.5 font-mono text-[10px] font-medium text-neutral-300">
                      <span>{item.shortcut}</span>
                    </kbd>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <div className="bottom-0 left-0 right-0 flex items-center justify-between w-full px-4 py-3 bg-neutral-800 border-t border-neutral-700 text-neutral-400 text-[11px] font-mono">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-neutral-700 border border-neutral-600">↵</span>
                <span>select</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <span className="px-1.5 py-0.5 rounded bg-neutral-700 border border-neutral-600">↑</span>
                  <span className="px-1.5 py-0.5 rounded bg-neutral-700 border border-neutral-600">↓</span>
                </span>
                <span>navigate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1">
                  <span className="px-1.5 py-0.5 rounded bg-neutral-700 border border-neutral-600">Cmd</span>
                  <span>+</span>
                  <span className="px-1.5 py-0.5 rounded bg-neutral-700 border border-neutral-600">K</span>
                </span>
                <span>exit</span>
              </div>
            </div>
          </CommandDialog>
        )}

        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl overflow-hidden p-0 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700">
            {selectedProject && (
              <div className="flex flex-col">
                <div className="w-full h-64 overflow-hidden">
                  <img src={selectedProject.img} className="w-full h-full object-cover" alt={selectedProject.title} />
                </div>
                <div className="p-6">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                    <DialogDescription className="text-neutral-500 font-medium">
                      {selectedProject.date}
                    </DialogDescription>
                  </DialogHeader>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-8">
                    {selectedProject.GitLink && (
                      <a href={selectedProject.GitLink} target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800 dark:bg-neutral-100 text-white dark:text-black text-xs font-bold hover:scale-105 transition-transform">
                        <Github className="w-4 h-4" /> GitHub
                      </a>
                    )}
                    {selectedProject.link && (
                      <a href={selectedProject.link} target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 text-xs font-bold hover:scale-105 transition-transform">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogContent className="max-w-2xl overflow-hidden p-0 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700">
            {selectedProject && (
              <div className="flex flex-col">
                <div className="w-full h-64 overflow-hidden">
                  <img src={selectedProject.img} className="w-full h-full object-cover" alt={selectedProject.title} />
                </div>
                <div className="p-6">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                    <DialogDescription className="text-neutral-500 font-medium">
                      {selectedProject.date}
                    </DialogDescription>
                  </DialogHeader>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-8">
                    {selectedProject.GitLink && (
                      <a href={selectedProject.GitLink} target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800 dark:bg-neutral-100 text-white dark:text-black text-xs font-bold hover:scale-105 transition-transform">
                        <Github className="w-4 h-4" /> GitHub
                      </a>
                    )}
                    {selectedProject.link && (
                      <a href={selectedProject.link} target="_blank" className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-100 text-xs font-bold hover:scale-105 transition-transform">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </motion.div>
      {/* Bottom bar */}
      {/*{scrolled && (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white text-center py-2">
          Press <span className="px-2 py-1 rounded bg-[#252525] border-white/60 shadow-lg border">Cmd</span> + <span className="px-2 py-1 rounded bg-[#252525] border-white/60 shadow-lg border">K</span> to open command palette
        </div>
      )}*/}
      <Analytics />
    </>
  );
}

export default App;
