import { Fade } from "react-awesome-reveal";

export default function Projects() {
  return (
    <>
      <div className="bg-black flex flex-col items-center">
        <div className="flex text-red-700 font-bold underline text-3xl mb-12 mt-12">
          <h1>Projects</h1>
        </div>
        <section id="Projects">
          <Fade direction="left">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden">
              <div>
                <h3 className="text-center text-gray-200 mb-2">Weather App</h3>
                <a
                  href="https://github.com/DaveMorin35/WeatherApp.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="Weather.png"
                    alt="weather"
                    className="rounded-lg max-h-36 transition ease-in-out duration-700 hover:scale-110"
                  />
                </a>
              </div>
              <div>
                <h3 className="text-center text-gray-200 mb-2">
                  Reformhaus E-Commerce
                </h3>
                <a href="https://wallner.bio/" target="_blank" rel="noreferrer">
                  <img
                    src="Wallner.png"
                    alt="wallner"
                    className="rounded-lg max-h-36 transition ease-in-out duration-700 hover:scale-110"
                  />
                </a>
              </div>
              <div>
                <h3 className="text-center text-gray-200 mb-2">Movie Database</h3>
                <a
                  href="https://github.com/DaveMorin35/Movie.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="Movies.png"
                    alt="movies"
                    className="rounded-lg max-h-36 transition ease-in-out duration-700 hover:scale-110"
                  />
                </a>
              </div>
              <div>
                <h3 className="text-center text-gray-200 mb-2">News</h3>

                <a
                  href="https://github.com/DaveMorin35/blog.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="blog.png"
                    alt="blog"
                    className="rounded-lg max-h-36 transition ease-in-out duration-700 hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </Fade>
        </section>
        <div className="flex text-red-700 font-bold underline text-3xl mb-12 mt-12">
          <h1> Current projects</h1>
        </div>
        <section id="Projects" className="grid ">
          <Fade direction="right">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 overflow-hidden">
              <div>
                <h3 className="text-gray-200 text-center mb-2">
                  Leather bag E-Commerce
                </h3>
                <img
                  src="Bag.png"
                  alt="bag"
                  className="rounded-lg max-h-36 transition ease-in-out duration-700 hover:scale-110"
                />
              </div>
              <div>
                <h3 className="text-gray-200 text-center mb-2">
                  Ramen order system
                </h3>
                <a
                  href="https://github.com/DaveMorin35/Online_Order_Ramen.git"
                  target="_blank"
                  rel="noreferrer"
                >
                <img
                  src="Ramen.png"
                  alt="ramen"
                  className="rounded-lg max-h-36 transition ease-in-out duration-700 hover:scale-110"
                />
                </a>
              </div>
            </div>
          </Fade>
        </section>
      </div>
    </>
  );
}
