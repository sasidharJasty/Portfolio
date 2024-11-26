import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin, AiFillMail } from "react-icons/ai";
export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-screen backdrop-blur-sm dark:bg-[#111010]/50 bg-white/50 z-50">
      <nav className="max-w-screen w-[800px] min-w-[800px] mx-auto mt-[3vh] pb-[2vh] relative">
        <ul className="text-left">
          <li className="inline mr-4">
            <a href="/#home">home</a>
          </li>
          <li className="inline mr-4">
            <a href="/#projects">projects</a>
          </li>
          <li className="inline mr-4">
            <a href="/#experience">experience</a>
          </li>

          <li className="inline mr-4">
            <a
              href="https://docs.google.com/document/d/1bCYLraZeRi2uWx84DWWHoCgXUEpDu-AN/edit?usp=sharing&ouid=113430248172192261991&rtpof=true&sd=true"
              target="_blank"
            >
              resume
            </a>
          </li>
        </ul>
        <div className="absolute right-0 top-0 space-x-4 flex">
          <li className="!inline my-auto">
            <a
              className="h-fit"
              href="https://github.com/sasidharJasty"
              target="_blank"
            >
              <DiGithubBadge size={32} className="h-fit" />
            </a>
          </li>
          <li className="!inline my-auto">
            <a
              className="h-fit"
              href="https://www.linkedin.com/in/sasidhar-jasty/"
              target="_blank"
            >
              <AiFillLinkedin size={32} className="h-fit" />
            </a>
          </li>
          <li className="!inline my-auto">
            <a
              className="h-fit"
              href="mailto:sasidhar.jasty@gmail.com"
              target="_blank"
            >
              <AiFillMail size={32} className="h-fit" />
            </a>
          </li>
        </div>
      </nav>
    </div>
  );
}
