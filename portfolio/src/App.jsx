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
function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen w-[800px] min-w-[800px] mx-auto mt-24 text-left">
        <h1 className="text-3xl ">Hi, I am Sasidhar Jasty 👋</h1>

        <p className="text-[--paragraph] mt-5 ">
          I'm a full stack web developer, student, and AI enthusiast. 👨‍💻📚 I
          work on web development projects at{" "}
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
          and am a student at Sierra High School 🎓. I thrive on combining
          academic rigor with practical experience, continually expanding my
          skills in{" "}
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
        <hr className="my-5 "></hr>
        <div>
          <h1 className="text-3xl ">Projects 💻</h1>
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
