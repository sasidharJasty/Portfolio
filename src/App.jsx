import * as React from "react";
import { useEffect, useState } from "react";
import { Github, Instagram, Linkedin, Printer,  Mail, ExternalLink, GitBranch } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

import pytorch from "./assets/pytorch.png";
import tensorflow from "./assets/tensorflow.webp";
import mantecaScholarsImage from "./assets/ms.png"
import mantecaScholarsImage2 from "./assets/ms2.png";
import exo1 from "./assets/exo1.png";
import exo2 from "./assets/exo2.png";

import HackathonWebsite from "./assets/HackathonWebsite1.png";
import HackathonWebsite2 from "./assets/HackathonWebsite2.png";

import kbImage1 from "./assets/KBimage1.png";
import kbImage2 from "./assets/KBimage2.png";

import cycleGanImage from "./assets/CycleGan.png";
import cycleGanImage2 from "./assets/CycleGan2.png";

import lightCurveImage from "./assets/LightCurves.svg";
import lightCurveImage2 from "./assets/LightCurves2.svg";


import python from "./assets/python.webp";
import profile from "./assets/profile.jpg";

import viking from "./assets/viking.webp";
import cogni from "./assets/cogni.jpg";
import la from "./assets/la.png";
import blu from "./assets/blu.png";
import mateo from "./assets/234.webp";


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

import SHS from "./assets/SHS.png";
import Experience from "./Components/Experience";
import buildspace from "./assets/buildspace.png";
import headstarter from "./assets/headstarter.jpeg";
import { motion } from "framer-motion";

function App() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

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
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] z-0 pointer-events-none"

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
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] z-0 pointer-events-none"
        />
      </div>
      <Navbar />
      <motion.div
        className="relative z-10 max-w-screen md:w-[800px] w-screen min-w-screen md:px-0 px-2 md:min-w-[800px] mx-auto mt-24 text-left scroll-smooth"
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

        <div className="mt-16 mb-10" id="about">
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

        <div className="flex flex-col gap-8 mt-12" id="experience">
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
              description={"I am a Student at Sierra High, I am currently a 11th Grader with a 4.0 GPA and I am currently taking multiple AP's and Honors courses. While also pursuing my hobby of programming by taking on projects and exploring the latest trends."}
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


        <div className="flex flex-col gap-8 mt-12" id="projects">
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-3xl font-bold">My Projects</h1>
            <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-between mt-4 w-fit mx-auto">
          <Project
            img={cycleGanImage}
            title="CycleGAN"
            date="2025"
            GitLink="https://github.com/sasidharJasty/CycleGAN"
            description="Built a PyTorch-based CycleGAN to tackle unpaired image-to-image translation. I designed custom generator and discriminator networks from scratch, heavily tuning cycle-consistency and adversarial loss functions. The biggest challenge was managing the end-to-end training loop and fighting off mode collapse to actually get high-fidelity, convincing image synthesis without needing paired datasets."
            tags={[
              "Python",
              "PyTorch",
              "GANs",
              "Computer Vision",
              "Deep Learning"
            ]}
            onClick={() =>
              setSelectedProject({
                title: "CycleGAN",
                date: "2025",
                GitLink: "https://github.com/sasidharJasty/CycleGAN",
                description:
                  "Built a PyTorch-based CycleGAN to tackle unpaired image-to-image translation. I designed custom generator and discriminator networks from scratch, heavily tuning cycle-consistency and adversarial loss functions. The biggest challenge was managing the end-to-end training loop and fighting off mode collapse to actually get high-fidelity, convincing image synthesis without needing paired datasets.",
                tags: [
                  "Python",
                  "PyTorch",
                  "GANs",
                  "Computer Vision",
                  "Deep Learning"
                ],
                img: cycleGanImage2
              })
            }
          />
          <Project
            img={lightCurveImage}
            title="LightCurves"
            date="2026"
            GitLink="https://github.com/sasidharJasty/LightCurves"
            description="Created a machine learning toolkit specifically for analyzing time-series astronomical light curves to help identify exoplanets. I built automated data pipelines with Pandas and NumPy to clean up incredibly noisy flux data, then used Scikit-Learn to engineer periodic features and train the predictive models needed to automatically spot transit events."
            tags={[
              "Python",
              "Pandas",
              "NumPy",
              "Scikit-Learn",
              "Data Science"
            ]}
            onClick={() =>
              setSelectedProject({
                title: "LightCurves",
                date: "2026",
                GitLink: "https://github.com/sasidharJasty/LightCurves",
                description:
                  "Created a machine learning toolkit specifically for analyzing time-series astronomical light curves to help identify exoplanets. I built automated data pipelines with Pandas and NumPy to clean up incredibly noisy flux data, then used Scikit-Learn to engineer periodic features and train the predictive models needed to automatically spot transit events.",
                tags: [
                  "Python",
                  "Pandas",
                  "NumPy",
                  "Scikit-Learn",
                  "Data Science"
                ],
                img: lightCurveImage2
              })
            }
          />
          <Project
            img={kbImage1}
            title="LLM Logic"
            date="2026 - Present"
            GitLink="https://github.com/sasidharJasty/KB"
            link="https://llm-logic.vercel.app/"
            description="A neuro-symbolic AI framework that bridges the creativity of LLMs with the strict rules of deterministic reasoning engines. I implemented forward and backward chaining for first-order logic evaluation, and used LangChain and LangGraph to build stateful, multi-agent workflows. It's essentially a sandbox for prototyping AI that can actually perform structured deduction."
            tags={[
              "Python",
              "LangGraph",
              "LangChain",
              "First-Order Logic",
              "AI Agents",
              "Symbolic AI"
            ]}
            onClick={() =>
              setSelectedProject({
                title: "LLM Logic",
                date: "2026 - Present",
                GitLink: "https://github.com/sasidharJasty/KB",
                link: "https://llm-logic.vercel.app/",
                description:
                  "A neuro-symbolic AI framework that bridges the creativity of LLMs with the strict rules of deterministic reasoning engines. I implemented forward and backward chaining for first-order logic evaluation, and used LangChain and LangGraph to build stateful, multi-agent workflows. It's essentially a sandbox for prototyping AI that can actually perform structured deduction.",
                tags: [
                  "Python",
                  "LangGraph",
                  "LangChain",
                  "First-Order Logic",
                  "AI Agents",
                  "Symbolic AI"
                ],
                img: kbImage2
              })
            }
          />

          <Project
            img={exo1}
            title="ExoNet"
            date="2026"
            link="https://exo-net.vercel.app/"
            GitLink="https://github.com/sasidharJasty/ExoNet"
            description="An end-to-end deep learning pipeline that classifies exoplanet transits from raw stellar data. I built a custom PyTorch neural network and spent a lot of time wrestling with the preprocessing—turning messy temporal arrays into normalized tensors. Iteratively tuning the model to maintain high precision-recall on a hugely imbalanced dataset was tough but rewarding."
            tags={[
              "Python",
              "PyTorch",
              "Deep Learning",
              "Astronomy",
              "Machine Learning"
            ]}
            onClick={() =>
              setSelectedProject({
                title: "ExoNet",
                date: "2026",
                link:"https://exo-net.vercel.app/",
                GitLink: "https://github.com/sasidharJasty/ExoNet",
                description:
                  "An end-to-end deep learning pipeline that classifies exoplanet transits from raw stellar data. I built a custom PyTorch neural network and spent a lot of time wrestling with the preprocessing—turning messy temporal arrays into normalized tensors. Iteratively tuning the model to maintain high precision-recall on a hugely imbalanced dataset was tough but rewarding.",
                tags: [
                  "Python",
                  "PyTorch",
                  "Deep Learning",
                  "Astronomy",
                  "Machine Learning"
                ],
                img: exo2
              })
            }
            />
            <Project
              img={mantecaScholarsImage}
              title="Manteca Scholars"
              date="2026 - Present"
              link="https://www.mantecascholars.org/"
              GitLink="https://github.com/sasidharJasty/MantecaScholars"
              description="Built a full-stack platform from the ground up using Next.js and Supabase to help local students easily find scholarships and educational resources. It's a production-ready site with secure authentication and a snappy, responsive UI. It's been incredibly rewarding to see it grow and smoothly handle over 100 concurrent users looking for academic opportunities."
              tags={[
                "Next.js",
                "TypeScript",
                "React",
                "Supabase",
                "Tailwind CSS",
                "Vercel"
              ]}
              onClick={() =>
                setSelectedProject({
                  title: "Manteca Scholars",
                  date: "2026 - Present",
                  link: "https://www.mantecascholars.org/",
                  GitLink: "https://github.com/sasidharJasty/MantecaScholars",
                  description:
                    "Built a full-stack platform from the ground up using Next.js and Supabase to help local students easily find scholarships and educational resources. It's a production-ready site with secure authentication and a snappy, responsive UI. It's been incredibly rewarding to see it grow and smoothly handle over 100 concurrent users looking for academic opportunities.",
                  tags: [
                    "Next.js",
                    "TypeScript",
                    "React",
                    "Supabase",
                    "Tailwind CSS",
                    "Vercel"
                  ],
                  img: mantecaScholarsImage2,
                })
              }
            />
          <Project
            img={HackathonWebsite}
            title={"Hackathon Website"}
            date={"Sept 2024 - Present"}
            link={"https://sierrahacks-ashen.vercel.app/"}
            GitLink={"https://github.com/sasidharJasty/sierrahacks"}
            description={"Designed and developed the main landing and registration portal for SierraHacks using Next.js and TypeScript. I wanted the site to feel alive and engaging, so I heavily utilized Framer Motion for smooth, interactive animations. It was awesome seeing it in the wild—it easily handled traffic spikes, driving over 120 registrations and running flawlessly for the past year."}
            tags={["Next.js", "Typescript", "Magic UI", "Framer Motion"]}
            onClick={() => setSelectedProject({
              title: "Hackathon Website",
              date: "Sept 2024 - Present",
              link: "https://sierrahacks-ashen.vercel.app/",
              GitLink: "https://github.com/sasidharJasty/sierrahacks",
              description: "Designed and developed the main landing and registration portal for SierraHacks using Next.js and TypeScript. I wanted the site to feel alive and engaging, so I heavily utilized Framer Motion for smooth, interactive animations. It was awesome seeing it in the wild—it easily handled traffic spikes, driving over 120 registrations and running flawlessly for the past year.",
              tags: ["Next.js", "Typescript", "Magic UI", "Framer Motion"],
              img: HackathonWebsite2
            })}
          />
          <Project
            img={project1}
            date={"Oct 2024 - present"}
            title={"Personal Portfolio Website"}
            link={"https://sjasty.vercel.app/"}
            GitLink={"https://github.com/sasidharJasty/Portfolio"}
            description={"Built my personal slice of the internet from scratch using React and Tailwind CSS. I focused heavily on making the design clean, responsive, and easily maintainable through reusable components. It was a great way to solidify my frontend fundamentals while creating something uniquely mine."}
            tags={["React", "Tailwind", "Responsive"]}
            onClick={() => setSelectedProject({
              title: "Personal Portfolio Website",
              date: "Oct 2024 - present",
              link: "https://sjasty.vercel.app/",
              GitLink: "https://github.com/sasidharJasty/Portfolio",
              description: "Built my personal slice of the internet from scratch using React and Tailwind CSS. I focused heavily on making the design clean, responsive, and easily maintainable through reusable components. It was a great way to solidify my frontend fundamentals while creating something uniquely mine.",
              tags: ["React", "Tailwind", "Responsive"],
              img: project1
            })}
          />

          </div>
        </div>

        {/* --- HACKATHONS SECTION START --- */}
        <hr className="my-5 mt-14" id="hackathon"></hr>
        <div className="mx-auto my-24">
          <div className="dark:bg-neutral-100 bg-neutral-800 p-2 py-1 rounded-md h-fit text-white dark:text-black mx-auto w-fit text-lg">
            Hackathons
          </div>
          <h1 className="w-fit mx-auto text-center text-[50px] font-bold mt-4">
            Check out my recent Hackathons
          </h1>
          <p className="mx-auto text-lg w-[80%] text-neutral-400 text-center mt-2">
            I&apos;ve participated in various hackathons, collaborating on projects
            ranging from simple prototypes to fully functional applications.
            Here are a few of my favorites.
          </p>
        </div>

        {/* Grouping in flex-col with gap-6 for clean spacing */}
        <div className="flex flex-col gap-6">
          <Experience
            img={viking}
            img_class="invert-0 dark:invert"

            title="VikingHacks 2026"
            short_description="Pleasanton, CA"
            description="Built a forensic surveillance platform that tracks individuals across camera feeds, generates millisecond-precise investigation timelines, and enables natural language evidence queries using custom computer vision pipelines."
            time_line="Mar 2026"
          >
            <a
              href="https://devpost.com/software/oversight-2nlvaj"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 dark:bg-neutral-100 bg-neutral-800 px-3 py-1.5 rounded-md text-sm font-medium text-white dark:text-black hover:scale-105 transition-all w-fit"
            >
              Devpost <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Experience>

          <Experience
            img={cogni}
            img_class="!rounded-2xl"
            title="CogniHacks 2025"
            short_description="Pleasanton, CA"
            description="Built an ML-powered healthcare tool that transcribes doctor-patient conversations, extracts medical entities, and generates summaries to improve patient adherence."
            time_line="Aug 30, 2025"
          >
            <a
              href="https://devpost.com/software/carelink-4bzyhi"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 dark:bg-neutral-100 bg-neutral-800 px-3 py-1.5 rounded-md text-sm font-medium text-white dark:text-black hover:scale-105 transition-all w-fit"
            >
              Devpost <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Experience>

          <Experience
            img={la}
            title="Los Altos Hacks IX"
            img_class="!rounded-2xl"
            short_description="Sunnyvale, CA"
            description="Built an ML-powered platform that forecasts food demand, classifies inventory, and optimizes redistribution to reduce waste and fight hunger."
            time_line="Apr 6, 2025"
          >
            <a
              href="https://devpost.com/software/nutrifresh"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 dark:bg-neutral-100 bg-neutral-800 px-3 py-1.5 rounded-md text-sm font-medium text-white dark:text-black hover:scale-105 transition-all w-fit"
            >
              Devpost <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Experience>

          <Experience
            img={blu}
            title="Blu's Hacks 2025"
            img_class="!rounded-2xl"
            short_description="Los Gatos, CA"
            description="AI-powered cross-platform app that tracks pantry inventory via OCR and recommends recipes based on available ingredients."
            time_line="Mar 23, 2025"
          >
            <a
              href="https://devpost.com/software/pantrypilot-vop21b"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 dark:bg-neutral-100 bg-neutral-800 px-3 py-1.5 rounded-md text-sm font-medium text-white dark:text-black hover:scale-105 transition-all w-fit"
            >
              Devpost <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Experience>

          <Experience
            img="https://www.hackakhan.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.58eda19f.png&w=256&q=75"
            title="Hackakhan"
            short_description="Mountain View, CA"
            img_class="!rounded-2xl"
            description="Developed an AI-powered platform that connects students with skilled tutors and intelligent tools to provide personalized support in their school subjects."
            time_line="Jun 8, 2024"
          >
            <a
              href="https://devpost.com/software/eduspark"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 dark:bg-neutral-100 bg-neutral-800 px-3 py-1.5 rounded-md text-sm font-medium text-white dark:text-black hover:scale-105 transition-all w-fit"
            >
              Devpost <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Experience>

          <Experience
            img={mateo}
            title="Mateo Hacks"
            short_description="San Mateo, California"

            description="Developed a machine learning model to detect and interpret sign language gestures, enabling real-time communication."
            time_line="Mar 23, 2024"
          />
        </div>
        {/* --- HACKATHONS SECTION END --- */}


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
                className="ml-4 bg-neutral-800 dark:bg-neutral-100 text-white dark:text-black px-6 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95"
                onClick={() => window.location.href = "mailto:sasidhar.jasty@gmail.com"}
              >
                Email Me
              </button>
            </div>
          </div>
        </div>
      </motion.div>
      {selectedProject && (
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="p-0 max-h-[90vh] overflow-y-auto">

            <div className="p-6 sm:p-8">

              <DialogHeader className="space-y-2 ">
                <div className="flex  gap-4">
                <DialogTitle>
                  {selectedProject.title}
                </DialogTitle>
                <div className="flex flex-wrap gap-3 ">

                  {selectedProject.GitLink && (
                    <a
                      href={selectedProject.GitLink}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      inline-flex
                      items-center
                      justify-center
                      rounded-full
                      bg-neutral-900
                      dark:bg-white
                      px-5
                      py-2.5
                      text-sm
                      font-semibold
                      text-white
                      dark:text-black
                      transition
                      hover:scale-105
                      "
                    >
                      GitHub →
                    </a>
                  )}


                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="
                      inline-flex
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-neutral-200
                      dark:border-neutral-800
                      px-5
                      py-2.5
                      text-sm
                      font-semibold
                      transition
                      hover:bg-neutral-100
                      dark:hover:bg-neutral-900
                      "
                    >
                      Live Demo →
                    </a>
                  )}

                  </div>
                </div>

                <DialogDescription>
                  {selectedProject.date}
                </DialogDescription>
              </DialogHeader>


              {/* Project Image */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  onClick={() => setImagePreview(selectedProject.img)}
                  className="
                    w-full
                    aspect-video
                    object-cover
                    cursor-zoom-in
                    transition-all
                    duration-500
                    hover:scale-[1.02]
                  "
                />
                <div
                className="
                absolute
                bottom-3
                right-3
                opacity-0
                group-hover:opacity-100
                transition
                bg-black/60
                text-white
                px-3
                py-1.5
                rounded-full
                text-xs
                backdrop-blur
                "
                >
                Click to expand
                </div>

              </div>


              {/* Description */}
              <p
                className="
                mt-6
                text-sm
                leading-7
                text-neutral-600
                dark:text-neutral-300
                "
              >
                {selectedProject.description}
              </p>


              {/* Tech Stack */}
              <div className="mt-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  Technologies
                </h3>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="
                      rounded-full
                      border
                      border-neutral-200
                      dark:border-neutral-800
                      bg-neutral-50
                      dark:bg-neutral-900
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-neutral-700
                      dark:text-neutral-300
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>


              {/* Actions */}


            </div>
            {imagePreview && (
              <Dialog
                open={!!imagePreview}
                onOpenChange={() => setImagePreview(null)}
              >
                <DialogContent
                  className="
                  p-4
                  max-w-[95vw]
                  max-h-[95vh]
                  bg-transparent
                  border-none
                  shadow-none
                  "
                >

                  <div className="relative flex items-center justify-center">

                    <img
                      src={imagePreview}
                      alt="Expanded project preview"
                      className="
                      max-h-[85vh]
                      max-w-[90vw]
                      object-contain
                      rounded-2xl
                      shadow-2xl
                      "
                    />

                  </div>

                </DialogContent>
              </Dialog>
            )}


          </DialogContent>
        </Dialog>

      )}
    </>
  );
}

export default App;
