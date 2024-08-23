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

function App() {
  return (
    <>
      <Navbar />
      <div
        className="max-w-screen w-[800px] min-w-[800px] mx-auto mt-24 text-left scroll-smooth"
        id="home"
      >
        <h1 className="text-3xl ">Hi, I am Sasidhar Jasty 👋</h1>

        <p className="text-[--paragraph] mt-5 text-sm">
          I'm a{" "}
          <span className=" dark:text-white text-black">
            full stack web developer
          </span>
          , student, and AI enthusiast. 👨‍💻📚 I work on{" "}
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
            img={dyne}
            img_class={"invert dark:invert-0"}
            title={"Dyne Research"}
            short_description={"Full Stack Web Developer"}
            description={
              "I led the design and development of all web applications at Dyne Research. Using technologies such as React for front-end development, and Django Rest API for back-end work. I oversee the integration of various APIs to ensure seamless functionality across our platforms. Leading to over 100% more web traffic to the website and over a 30% increase in web traffic to customer turnout rate from the website."
            }
            time_line={"March 2023 - Present"}
          />
          <Experience
            img={
              "https://media.licdn.com/dms/image/v2/D4E0BAQGJ5j3fUqrp5Q/company-logo_200_200/company-logo_200_200/0/1708200043507/theheadstarter_logo?e=1732147200&v=beta&t=4TOvvfNXmbu8nawZFgTkaV86ORc8HaAJ9CEcssohgl4"
            }
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
            img={
              "https://media.licdn.com/dms/image/v2/C4D0BAQH4v0G7qtO5UQ/company-logo_200_200/company-logo_200_200/0/1668195915807/buildspaceso_logo?e=1732147200&v=beta&t=lHPhf817KYpXiRNo55ANxc4wcngawxo1XqXd8aq4PmY"
            }
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
        <hr className="my-5 mt-14 "></hr>
        <div>
          <h1 className="text-3xl " id="projects">
            Projects 💻
          </h1>
          <div className="grid grid-cols-2 gap-4 justify-between mt-4">
            <Project
              img={project1}
              title={"Personal Portfolio Website"}
              link={"https://sjasty-portfolio.vercel.app/"}
              GitLink={"https://github.com/sasidharJasty/Portfolio"}
              description={
                "A website built from scratch using React and Tailwind CSS. "
              }
              tags={["React", "Tailwind", "Responsive"]}
            />
            <Project
              img={DyneProj}
              title="Dyne Research Website"
              link="https://www.dyneresearch.com/"
              GitLink={"https://github.com/sasidharJasty/dyne"}
              description="A custom-built website crafted from the ground up using React and Tailwind CSS, tailored specifically to meet the needs of Dyne Research and showcase its products."
              tags={["React", "Tailwind", "Responsive"]}
            />

            <Project
              img={YMP}
              title={"YMP Home Website"}
              link={
                "https://github.com/sasidharJasty/YouthMentorshipProject-Website"
              }
              GitLink={
                "https://github.com/sasidharJasty/YouthMentorshipProject-Website"
              }
              description={
                "A website built from scratch using React and Tailwind CSS. "
              }
              tags={["React", "Tailwind"]}
            />
            <Project
              img={HCCC}
              title={"Hindu Culture Showcase"}
              link={"https://heritage-project.vercel.app/"}
              GitLink={"https://github.com/sasidharJasty/heritage-project"}
              description={
                "A website designed from scratch to meet the needs of a local Hindu temple, aiming to enhance cultural awareness of Hinduism to more people of various age groups."
              }
              tags={["React", "Tailwind", "API"]}
            />
            <Project
              img={Taskify}
              title={"Dyne Task Management System"}
              link={"https://dyneems.vercel.app/"}
              description={
                "A website designed from scratch to meet the needs of a local Hindu temple, aiming to enhance cultural awareness of Hinduism to more people of various age groups."
              }
              tags={["React", "Tailwind", "API", "Full-Stack"]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
