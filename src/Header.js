import React from "react";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { auth } from "./firebase";
import { useHistory } from "react-router";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();

  const logOutOfApp = () => {
    auth.signOut().then(() => {
      dispatch({
        type: actionTypes.LOG_OUT,
        user: null,
      });
    });

    history.push("/login");
  };

  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          onClick={logOutOfApp}
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
