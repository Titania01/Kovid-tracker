import CovidLogo from "../../atoms/vectors/Logo";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="logo-wrap">
        {/* <CovidLogo /> */}
        <p className="logo-title">Kovid-19</p>
      </div>
      <div className="nav-about">
        <p>Home</p>
        <p>About</p>
        <p>Symptoms</p>
        <p>Prevention</p>
      </div>
      <div className="nav-box">
        <p className="text">Are you sick</p>
      </div>
    </div>
  );
};

export default Navbar;
