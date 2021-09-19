import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const { logged, setlogged } = useContext(AuthContext);
  const history = useHistory();

  const logIn = (e) => {
    e.preventDefault();
    history.push("/admin/login");
  };

  const home = (e) => {
    e.preventDefault();
    history.push("/");
  };

  const logOut = (e) => {
    e.preventDefault();
    setlogged(false);
    localStorage.removeItem("token")
    history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/" onClick={home}>
          URL Reducer
        </a>

        <div className="d-flex">
          {logged ? (
            <a className="navbar-brand" href="/" onClick={logOut}>
              Log out
            </a>
          ) : (
            <a className="navbar-brand" href="/admin/login" onClick={logIn}>
              Log in
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
