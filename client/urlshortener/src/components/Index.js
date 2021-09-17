import React, { Fragment, useState } from "react";

const Index = () => {

    const [longUrl, setlongUrl] = useState("");
    const [send, setsend] = useState(false);


    const onChange = (e)=>{
        setlongUrl(e.target.value)
    }


  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            URL Reducer
          </a>

          <div className="d-flex">
            <a className="navbar-brand" href="#">
              Log in
            </a>
          </div>
        </div>
      </nav>

      <div className="container mt-5">
        <form>
          <label htmlFor="longUrl" className="form-label">
            Long Url:
          </label>

          <div className="d-flex align-items-center row justify-content-center">
            <div className="col-10">
              <input
                type="email"
                className="form-control"
                id="longUrl"
                name="longUrl"
                value={longUrl}
                onChange={onChange}
                placeholder="example: google.com"
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
            value="Your short url will be displayed here..."
            aria-label="readonly input example"
            readOnly
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
