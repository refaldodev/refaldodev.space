// import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
// import Career from "../components/career/Career";
import construction from "../img/Under construction-pana.svg";
import "../App.css";
const Home = () => {
  return (
    <>
      <Navbar />
      {/* <section className="section">
        <div className="wrapper-profile text-center  ">
          <div className="wrapper-name text-xl mt-44 font-bold	">
            <h1>Refaldo Rachman</h1>
          </div>
          <div className="wrapper-description mt-6 ">
            <p className="text-base">
              Front End Web Developer Livingg in Indonesia
            </p>
          </div>
        </div>
      </section>
      <Career /> */}
      <div className="h-screen">
        <img
          src={construction}
          alt="construction"
          className="img-construction"
        />
        <h6 className="text-base text-center">Website is under construction</h6>
      </div>
    </>
  );
};
export default Home;
