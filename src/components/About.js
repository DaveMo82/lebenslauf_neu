import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const openFileInBrowser = (fileUrl) => {
    window.open(fileUrl, "_blank");
  };

  const handleCertificateDownload = () => {
    const certificateFile = `${process.env.PUBLIC_URL}/Zertifikat.pdf`;
    openFileInBrowser(certificateFile);
  };

  const handleCv = () => {
    const cvFile = `${process.env.PUBLIC_URL}/CV.pdf`;
    openFileInBrowser(cvFile);
  };

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#animated-picture",
      start: "-20% 80%",
      end: "50% 30%",
      scrub: false,
      markers: false,
      toggleActions: 'play pause',
    },
  });

  tl.to("#animated-picture", {
    x: 1400,
    duration:1
  });

  return (
    <>
      <div className="bg-black flex flex-col justify-center items-center sm:mt-0">
        <div className="flex justify-center text-red-700 font-bold underline text-3xl mb-12 mt-12">
          <h1>About</h1>
        </div>
        <section
          id="About"
          className="text-white grid justify-items-center md:grid-cols-2 sm:grid-cols-1 sm:justify-items-center gap-4 max-w-5xl mt-24 mr-6 sm:text-sm sm:ml-10"
        >
          <div>
            <div className="mx-10 sm:ml-2">
              <p className="text-sm sm:text-lg text-center md:text-left">
                Hello, <br></br>As a recently certified full-stack developer
                specializing in modern web applications, I bring a current and
                innovative perspective to the field. My comprehensive training
                has provided me with a strong base in diverse technology stacks,
                positioning me for success in dynamic project environments.
                Fueled by a passion for code excellence and streamlined
                solutions, I am excited to explore new technologies and actively
                contribute to innovative projects.
              </p>
            </div>
            <div className="flex justify-center n text-sm lg:text-sm">
              <button
                type="button"
                className="rounded-lg bg-red-700 px-4 py-1 mt-10 mr-6"
                onClick={handleCv}
              >
                Download CV
              </button>
              <button
                type="button"
                className="rounded-lg bg-red-700 px-4 py-1 mt-10"
                onClick={handleCertificateDownload}
              >
                Download Certificate
              </button>
            </div>
          </div>
          <div className="relative left-[-1450px] w-36 md:w-48 lg:w-64 mt-20 sm:mt-12 lg:ml-0 mb-32 animated-picture-container">
            <img
              id="animated-picture"
              src="/Morin.jpg"
              alt="logo"
              className="rounded-xl "
            />
          </div>
        </section>
      </div>
    </>
  );
}
