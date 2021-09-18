import React, { Fragment, useEffect, useState } from "react";
import Index from "./Index";
import axios from "axios";
import {verifyTokenService} from "../services/api"
import { useHistory } from "react-router-dom";

const Admin = () => {
  const history = useHistory();
  const [logged, setLogged] = useState(false);
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
        setLogged(true);
      })
      .catch(function (error) {
        console.log(error);
        history.push("/admin/login");
      });
  };

  return logged ? (
    <Fragment>
      <Index />

      <h1>Admin mode</h1>

      <h2>Aqui va la tabla :v</h2>
    </Fragment>
  ) : (
    <></>
  );
};

export default Admin;
