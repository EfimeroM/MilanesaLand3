import React from "react";
import "./NavBarPc.scss";
import user from "../../assets/icons/nav-bar/user.png";
import roulette from "../../assets/icons/nav-bar/roulette.png";
import download from "../../assets/icons/nav-bar/download.png";
import minecraft from "../../assets/icons/nav-bar/minecraft.png";
import { Link } from "react-router-dom";
import { TfiUser } from "react-icons/tfi"

export const NavBarPc = () => {
  return (
    <div id="nav-bar-pc">
      <div className="profile">
        <TfiUser className="icon" />
        <div className="text-profile">
            <p>Eizh</p>
            <p className="color-text">Top 1</p>
            <p className="color-text">20 Milacoins</p>
        </div>
      </div>
      <div className="nav">
        <Link to="/user" className="box-image">
          <img src={user} alt="icon user" className="image" />
        </Link>
        <Link to="/roulette" className="box-image">
          <img src={roulette} alt="icon roulette" className="image" />
        </Link>
        <Link to="/download" className="box-image">
          <img src={download} alt="icon download" className="image" />
        </Link>
        <Link to="/minecraft" className="box-image">
          <img src={minecraft} alt="icon minecraft" className="image" />
        </Link>
      </div>
    </div>
  );
};
