import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export default function Navbar() {
  const [key, setKey] = useState("home");

  const onSetKey = (key: string) => {
    setKey(key);
  };
  return (
    <Wapprer className="navbar">
      <nav>
        <p>DumbOldSpider LLC</p>
        <Link onClick={() => onSetKey("home")} className={`home ${key === "home" ? "active" : ""}`} to="/">
          Home
        </Link>
        <Link onClick={() => onSetKey("about")} className={`about ${key === "about" ? "active" : ""}`} to="/about">
          About
        </Link>
        <Link
          onClick={() => onSetKey("socail-media")}
          className={`socail-media ${key === "socail-media" ? "active" : ""}`}
          to="/socail-media"
        >
          Socail Media (Third Party)
        </Link>
      </nav>
    </Wapprer>
  );
}

const Wapprer = styled.div`
  top: 0px;
  padding: 16px 0px;
  background: white;
  position: fixed;
  z-index: 10;
  width: 100%;
  nav {
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 0 30px;
    margin: 0 auto;
  }

  .active {
    color: #1877f2;
  }

  /* nav .home {
    margin-left: 30px;
    @media (max-width: 568px) {
      margin-left: 10px;
    }
  } */

  nav nav h1 {
    margin-left: 20px;
  }

  nav .links {
    margin-left: auto;
    justify-content: center;
    display: flex;
    align-items: center;
    /* @media (max-width: 568px) {
      margin-right: 10px;
    } */
  }

  nav .links a,
  button {
    margin-left: 16px;
    /* @media (max-width: 568px) {
      margin-left: 10px;
    } */
    font-size: 14px;
  }

  nav img {
    margin-left: 30px;
    max-height: 50px;
  }

  span {
    font-size: 14px;
    display: inline-block;
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
  }
  .logout {
    margin: 0px;
  }
`;
