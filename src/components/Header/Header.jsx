import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink } from "react-router-dom";


import "../../styles/hero-section.css";
import "../../styles/header.css";

const token = localStorage.getItem("token");
var isLoggedIn = true;
if(token == null){
  isLoggedIn = false;
}


const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Make Pizza",
    path: "/makePizzas",
  },
  {
    display: "My Pizza",
    path: "/mypizza",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  
  
];
if (isLoggedIn){
  nav__links.push({
    display: "Profile",
    path: "/profile",
  });

  nav__links.push({
    display: "Logout",
    path: "/logout",
  });
}
else{
  nav__links.push({
    display: "Login",
    path: "/login",
  });
}


const Header = () => {


  const menuRef = useRef(null);
  const headerRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  let navigate = useNavigate();


  console.log(menuRef?.current?.classList.value);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);
  

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo" onClick={() => navigate("/home")}>
            <img src={logo} alt="logo" />
            <h5>Pizzato</h5>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div
              className="menu d-flex align-items-center gap-5"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="header__closeButton">
                <span onClick={toggleMenu}>
                  <i className="ri-close-fill"></i>
                </span>
              </div>
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                  onClick={toggleMenu}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>

          </div>
          
        </div>
      </Container>
    </header>
  );
};

export default Header;
