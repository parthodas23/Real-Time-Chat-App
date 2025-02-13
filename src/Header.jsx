import React from "react";

import "./Header.css";
import { Avatar } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

function Header() {
  return (
    <div className="header">

      <div className="header__left">
        {/* Avator for logging in user */}
        <Avatar className="header__avatar" src=""></Avatar>
        {/* Time icon */}
        <AccessTimeIcon></AccessTimeIcon>
      </div>

      <div className="header__search">
        {/* Search icon */}
        <SearchIcon></SearchIcon>
        {/* input */}
        <input type="text" placeholder="Search Friends" />
      </div>

      <div className="header__left">
        {/* Help icon */}
        <HelpOutlineIcon></HelpOutlineIcon>
      </div>
      
    </div>
  );
}

export default Header;
