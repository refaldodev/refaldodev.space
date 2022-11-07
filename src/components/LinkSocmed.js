import "../App.css";
import ProfileImage from "../img/pp.jpg";
import Cv from "../cv.pdf";
import Navbar from "./navbar/Navbar";
function LinkSocmed() {
  return (
    <div className="App">
      <Navbar />
      <header className="container mx-auto md:container md:mx-auto  sm:container sm:mx-auto  lg:container lg:mx-auto  xl:container xl:mx-auto pl-4 pr-4">
        <div className="header ">
          <div className="profile-img mt-10">
            <img
              src={ProfileImage}
              className="rounded-full w-28 h-28 m-auto"
              alt="gambar"
            />
          </div>
          <div className="profile-name mt-4 ">
            <h1 className="font-extrabold	  text-lg tracking-wide text-white">
              Refaldo Rachman
            </h1>
            <h2 className="text-white">
              Web developer based in Tanggerang, Indonesia.
            </h2>
          </div>
        </div>
        <div className="main mt-10 ">
          <div className="title">
            <h1 className="font-extrabold	 text-base tracking-wide text-white  ">
              Follow
            </h1>
          </div>
          <a
            className="App-link"
            href="https://twitter.com/Mohrefaldo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="links bg-sky-500	p-4 max-w-lg mx-auto mt-3 flex items-center align-middle text-white rounded-full hover:bg-sky-600	">
              <div className="svg-icon w-1/6 ">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  className="svg-inline--fa fa-twitter fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height="24px"
                  width="24px"
                >
                  <path
                    fill="white"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </div>
              <div className="text grow ">
                <p>Twitter</p>
              </div>
              <div className="space  w-1/6"></div>
            </div>
          </a>
          <a
            className="App-link"
            href="https://www.instagram.com/mohrefaldo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="links bg-pink-600		p-4 max-w-lg mx-auto mt-4 flex items-center align-middle text-white rounded-full hover:bg-pink-700		">
              <div className="svg-icon w-1/6 ">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  className="svg-inline--fa fa-instagram fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  height="24px"
                  width="24px"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </div>
              <div className="text grow ">
                <p>Instagram</p>
              </div>
              <div className="space  w-1/6"></div>
            </div>
          </a>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/mohammad-refaldo-rachman-5904531b0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="links bg-blue-600				p-4 max-w-lg mx-auto mt-4 flex items-center align-middle text-white rounded-full hover:bg-blue-700					">
              <div className="svg-icon w-1/6 ">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="linkedin"
                  className="svg-inline--fa fa-linkedin fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  height="24px"
                  width="24px"
                >
                  <path
                    fill="white"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  ></path>
                </svg>
              </div>
              <div className="text grow ">
                <p>LinkedIn</p>
              </div>
              <div className="space  w-1/6"></div>
            </div>
          </a>
          <a
            className="App-link"
            href="https://dribbble.com/refaldoms"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="links bg-pink-500				p-4 max-w-lg mx-auto mt-4 flex items-center align-middle text-white rounded-full hover:bg-pink-600						">
              <div className="svg-icon w-1/6 ">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="dribbble"
                  className="svg-inline--fa fa-dribbble fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  width="24px"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="white"
                    d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"
                  ></path>
                </svg>
              </div>
              <div className="text grow ">
                <p>Dribbble</p>
              </div>
              <div className="space  w-1/6"></div>
            </div>
          </a>
          <a
            className="App-link"
            href="https://github.com/refaldodev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="links bg-black			p-4 max-w-lg mx-auto mt-4 flex items-center align-middle text-white rounded-full hover:bg-zinc-800				">
              <div className="svg-icon w-1/6 ">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="github"
                  className="svg-inline--fa fa-github fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  height="24px"
                  width="24px"
                >
                  <path
                    fill="white"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  ></path>
                </svg>
              </div>
              <div className="text grow ">
                <p>Github</p>
              </div>
              <div className="space  w-1/6"></div>
            </div>
          </a>
        </div>
        <div className="main mt-10 mb-20">
          <div className="title">
            <h1 className="font-extrabold	 text-base tracking-wide text-white  ">
              Portfolio
            </h1>
          </div>
          <a
            className="App-link"
            href={Cv}
            target="_blank"
            rel="noopener noreferrer"
            download="cv refaldo"
          >
            <div className="links bg-teal-500			p-4 max-w-lg mx-auto mt-3 flex items-center align-middle text-white rounded-full hover:bg-teal-600	">
              <div className="svg-icon w-1/6 ">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="download"
                  className="svg-inline--fa fa-download fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  height="24px"
                  width="24px"
                >
                  <path
                    fill="white"
                    d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                  ></path>
                </svg>
              </div>
              <div className="text grow ">
                <p className="font-medium	">Download CV</p>
              </div>
              <div className="space  w-1/6"></div>
            </div>
          </a>
        </div>
      </header>
    </div>
  );
}

export default LinkSocmed;
