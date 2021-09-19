import React, { Fragment, useContext, useState, useEffect } from "react";
import Nav from "./Nav";
import MainForm from "./MainForm";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router-dom";
import { verifyTokenService } from "../services/api";

const Index = () => {
  const { logged, setlogged } = useContext(AuthContext);
  const [token, setToken] = useState("");

  useEffect(() => {
    verifyLogged();
  }, []);

  useEffect(() => {
    if (token) {
      verifyToken();
    }
  }, [token]);

  const verifyLogged = async () => {
    setToken(localStorage.getItem("token"));
  };

  const verifyToken = async () => {
    await verifyTokenService(token)
      .then(function (response) {
        setlogged(true);
      })
      .catch(function (error) {
        localStorage.removeItem("token");
      });
  };

  return logged ? (
    <Redirect to="/admin/dashboard" />
  ) : (
    <Fragment>
      <Nav />

      <MainForm />
    </Fragment>
  );
};

export default Index;
