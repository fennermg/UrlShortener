import React, { useState } from "react";
import {sendPostRequestService} from "../services/api"

const MainForm = () => {

    const [longUrl, setlongUrl] = useState("");
    const [shortUrl, setshortUrl] = useState("Your short url will be displayed here...");
  
    const onChange = (e) => {
      setlongUrl(e.target.value);
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
      sendPostRequest();
    };
  
    const sendPostRequest = async () => {
      await sendPostRequestService(longUrl)
        .then(function (response) {
          setshortUrl(process.env.REACT_APP_FRONTEND_URL + "/" + response.data.urlCode)
  
        })
        .catch(function (error) {
          alert(error.response.data.msg);
  
        });
    };

  return (
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
  );
};

export default MainForm;
