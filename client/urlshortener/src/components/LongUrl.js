import React, { useEffect } from "react";
import { useParams } from "react-router";
import {getLongUrlService} from "../services/api"
import axios from "axios";

const LongUrl = () => {
  let { code } = useParams();

  const getLongUrl = async () => {
    await getLongUrlService(code)
      .then(function (response) {
        window.location.replace(response.data.longUrl);
      })
      .catch(function (error) {
        alert(error.response.data.msg);
      });
  };

  useEffect(() => {
    getLongUrl();
  }, []);

  return <h1 class="text-center">Redirecting</h1>;
};
export default LongUrl;
