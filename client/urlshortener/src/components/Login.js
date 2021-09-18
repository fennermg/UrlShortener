import React, { Fragment, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
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
    await axios({
      method: "post",
      url: "http://localhost:5000/api/auth",
      data: {
        user: data.user,
        password: data.password,
      },
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        history.push('/admin/dashboard');
      })
      .catch(function (error) {
        alert(error.response.data.msg);
      });
  };

  return (
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
