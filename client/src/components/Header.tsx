import logo from "./assets/logo.png";

const Header = () => {
  return (
    // <nav className="navbar bg-light p-0 mb-4">
    <div className="">
      <a className="navbar-brand" href="/">
        <div className="d-flex align-items-center">
          <img src={logo} alt="logo" className="mr-2" />
          <div>Projectiva</div>
        </div>
      </a>
    </div>
    // </nav>
  );
};

export default Header;
