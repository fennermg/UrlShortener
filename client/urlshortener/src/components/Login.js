import React, { Fragment, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { fethAPIService } from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { verifyTokenService } from "../services/api";

const Login = () => {
  const { logged, setlogged } = useContext(AuthContext);
  const [token, setToken] = useState("");
  const history = useHistory();
  const [data, setdata] = useState({
    user: "",
    password: "",
  });

  const { user, password } = data;

  const onChange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fethAPI();
  };

  const fethAPI = async () => {
    await fethAPIService(data)
      .then(function (response) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        history.push("/admin/dashboard");
      })
      .catch(function (error) {
        alert(error.response.data.msg);
      });
  };

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
        history.push("/admin/dashboard");
      })
      .catch(function (error) {
        localStorage.removeItem("token");
        history.push("/admin/login");
      });
  };

  return logged ? (
    <></>
  ) : (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            URL Reducer
          </a>
        </div>
      </nav>

      <div className="container mt-5">
        <h1>Log in</h1>

        <form className="mt-3" onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="user" className="htmlForm-label">
              User
            </label>
            <input
              type="text"
              className="form-control"
              id="user"
              name="user"
              aria-describedby="emailHelp"
              required
              onChange={onChange}
              value={user}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
              onChange={onChange}
              value={password}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
