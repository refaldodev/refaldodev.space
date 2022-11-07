import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <header className="header header-nav pt-6 pb-6 pr-4 pl-4">
        <div className="mx-auto container">
          <div class="flex justify-between">
            <div className="nav-icon flex">
              <span>Refaldo</span>
              {/* <div>👋</div> */}
            </div>
            <div class="nav-route flex gap-6">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/link">Link</Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
