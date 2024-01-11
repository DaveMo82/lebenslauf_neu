
export default function About() {

const handleCertificateDownload = () => {
  const certificateFile = "Zertifikat.pdf";

  const link = document.createElement("a");
  link.href = certificateFile;
  link.target = '_blank';
  link.download = 'Zertifikat.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleCv = () => {
  const CvFile = "cv_DavidMorin.pdf";

  const link = document.createElement("a");
  link.href = CvFile;
  link.target= "_blank";
  link.download = "cv_DavidMorin";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
  return (
    <>
      <div className="bg-black flex flex-col h-screen justify-center items-center mt-24 sm:mt-0">
        <div className="flex justify-center text-red-700 font-bold underline text-2xl mb-12 mt-12">
          <h1>About</h1>
        </div>
        <section
          id="About"
          className="text-white grid justify-items-center md:grid-cols-2 sm:grid-cols-1 sm:justify-items-center gap-4 max-w-5xl mt-24 mr-6 sm:text-sm sm:ml-10"
        >
          <div>
            <div className="mx-10 sm:ml-2">
            <p className="text-sm sm:text-lg text-center md:text-left">
              Hello, <br></br>As a recently certified full-stack developer specializing in modern web applications, 
              I bring a current and innovative perspective to the field. 
              My comprehensive training has provided me with a strong base in diverse technology stacks, positioning me for success in dynamic project environments. 
              Fueled by a passion for code excellence and streamlined solutions, 
              I am excited to explore new technologies and actively contribute to innovative projects.
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
          <div className="w-32  md:w-48 lg:w-72 mt-20 sm:mt-12 lg:ml-0">
            <img src="/Morin.jpg" alt="logo" className="rounded-xl " />
          </div>
        </section>
      </div>
    </>
  );
}
