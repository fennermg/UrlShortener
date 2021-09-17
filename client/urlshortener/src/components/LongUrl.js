import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const LongUrl = () => {
  let { code } = useParams();

  const fethAPI = async () => {
    await axios({
      method: "get",
      url: `http://localhost:5000/${code}`,
      headers: { "Content-Type": "application/json" },
    })
      .then(function (response) {
        window.location.replace(response.data.longUrl);
      })
      .catch(function (error) {
        alert(error.response.data.msg);
      });
  };

  useEffect(() => {
    fethAPI();
  }, []);

  return <h1 class="text-center">Redirecting</h1>;
};
export default LongUrl;
