import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Coffee");
  };

  return (
    <header className="header">
      <img className="logo" src="./img/logo.png" alt="logo" />
      <nav className="header-link">
        <ul className="nav-list">
          <li>
            <a className="nav-link" href="Coffee">
              BLOG
            </a>
          </li>
          <li>
            <a className="nav-link" href="Coffee">
              ABOUT US
            </a>
          </li>
          <li>
            <a
              onClick={handleButtonClick}
              className="nav-link last-link"
              href="Coffee"
            >
              SIGN IN
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
