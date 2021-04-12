import Auth from "@aws-amplify/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [active, setActive] = useState("");
  let Location = useLocation();
  useEffect(() => {
    let path = Location.pathname;
    if (path.includes("home")) setActive("home");
    if (path.includes("list")) setActive("list");
    if (path.includes("post")) setActive("post");
    if (path.includes("active")) setActive("active");
  }, [Location]);
  return (
    <div className="sidebar">
      <h1>GOMMT</h1>
      <Link className={`${active === "home" ? "active" : ""}`} to="/home">
        Home
        <FontAwesomeIcon icon={["fab", "github"]} />
      </Link>
      <Link className={`${active === "list" ? "active" : ""}`} to="/list">
        List
      </Link>
      <Link className={`${active === "post" ? "active" : ""}`} to="/post">
        Post Properties
      </Link>
      <Link className={`${active === "active" ? "active" : ""}`} to="/active">
        Active Orders
      </Link>
      <Link
        onClick={() => {
          Auth.signOut();
          window.location.reload();
        }}
        to=""
      >
        signout
      </Link>
    </div>
  );
}

export default Sidebar;
