import React, { useEffect, useState } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else setHandleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${handleShow && "navbar-black"}`}>
      <img
        className="navbar-logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Navbar Logo"
      />
      <img
        className="navbar-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="User Logo"
      />
    </div>
  );
};
