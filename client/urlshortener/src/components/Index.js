import React, { Fragment, useState } from "react";
import axios from "axios";

const Index = () => {
  const [longUrl, setlongUrl] = useState("");
  const [shortUrl, setshortUrl] = useState("Your short url will be displayed here...");

  const onChange = (e) => {
    setlongUrl(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fethAPI();
  };

  const fethAPI = async () => {
    await axios({
      method: "post",
      url: "http://localhost:5000/api/url/shorten",
      data: {
        "longUrl": longUrl
      },
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        setshortUrl(window.location.href + response.data.urlCode)

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

          <div className="d-flex">
            <a className="navbar-brand" href="/admin/login">
              Log in
            </a>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <form onSubmit={onSubmit}>
          <label htmlFor="longUrl" className="form-label">
            Long Url:
          </label>

          <div className="d-flex align-items-center row justify-content-center">
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                id="longUrl"
                name="longUrl"
                value={longUrl}
                onChange={onChange}
                placeholder="example: google.com"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary col-2">
              Send
            </button>
          </div>
        </form>

        <div className="mt-5">
          <label htmlFor="shortUrl" className="form-label">
            Short Url:
          </label>
          <input
            className="form-control"
            type="text"
            id="shortUrl"
            name="shortUrl"
            value={shortUrl}
            aria-label="readonly input example"
            readOnly
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
