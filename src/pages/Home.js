import { TypeAnimation } from "react-type-animation";
import { AnimatePresence } from "framer-motion";
import { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import About from "../components/About";
import Menu from "../components/Menu";
import Projects from "../components/Projects";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 0,
        delay: 0.1,
      })
        .from(["#title-1"], {
          opacity: 0,
          y: "+=60",
          delay: 0.3,
        })
        .to(["#title-1"], {
          opacity: 0,
          y: "-=100",
          delay: 0.8,
        })
        .to("#intro-slider", {
          yPercent: "-100",
          duration: 2,
          onComplete: () => setShowMenu(true),
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp}>
      <div
        id="intro-slider"
        className="h-screen bg-[#1F1F1F] absolute top-0 left-0 z-10 w-full flex justify-center items-center"
      >
        <h1
          className="text-4xl md:text-9xl text-transparent bg-gradient-to-r from-red-400 via-red-700 to-red-900 bg-clip-text-webkit"
          id="title-1"
        >
          Welcome
        </h1>
      </div>

      <AnimatePresence>
        <div className="flex flex-col min-h-screen">
          <div className="bg-black flex-grow">
            {showMenu && <Menu />}

            <div className="flex flex-col h-screen justify-center items-center">
              <section
                id="Home"
                className="text-white grid md:grid-cols-2 sm:grid-cols-1 gap-4 ml-20"
              >
                <div className="md:mr-40 w-60 md:w-72 lg:w-96 sm:w-64 md:ml-20">
                  <img
                    src="/Morin.png"
                    alt="logo"
                    className="transform transition duration-500 hover:scale-110"
                  />
                </div>
                <div className="ml-4 mt-12 md:ml-20">
                  <h2 className=" md:text-2xl lg:text-5xl font-bold sm:ml-16 md:ml-0">
                    Hi, <br></br>I'm <span className="text-red-700">David</span>
                    <br></br>
                    <TypeAnimation
                      sequence={[
                        "React.js Developer",
                        1500,
                        "Java Developer",
                        1500,
                        "Sport addict",
                        1500,
                        "Love coding",
                        1500,
                      ]}
                      speed={150}
                      repeat={Infinity}
                    />
                  </h2>
                  <a
                    type="button"
                    href="#Contact"
                    className="rounded-lg bg-red-700 px-4 py-1 mt-10 sm:ml-16 md:ml-0"
                  >
                    Contact
                  </a>
                  <div className="flex mt-6 md:justify-normal sm:justify-center">
                    <a
                      href="https://www.linkedin.com/in/david-morin-b57343291"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="linkedin.png"
                        alt="linkedin"
                        className="invert  w-6"
                      />
                    </a>
                    <a
                      href="https://github.com/DaveMo82"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="github.png"
                        alt="github"
                        className="invert ml-6 w-6"
                      />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
