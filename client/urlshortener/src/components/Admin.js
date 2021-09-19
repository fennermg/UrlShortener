import React, { Fragment, useEffect, useState, useContext } from "react";
import { verifyTokenService } from "../services/api";
import { useHistory } from "react-router-dom";
import Nav from "./Nav";
import { AuthContext } from "../context/AuthContext";
import MainForm from "./MainForm";
import Table from "./Table";

const Admin = () => {
  const history = useHistory();
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
        history.push("/admin/login");
      });
  };

  return logged ? (
    <Fragment>
      <Nav />

      <MainForm />

      <Table />
    </Fragment>
  ) : (
    <></>
  );
};

export default Admin;
