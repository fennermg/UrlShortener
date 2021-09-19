import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  const [token, setToken] = useState("");
  const [table, settable] = useState([]);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    if (token) {
      getTable();
    }
  }, [token]);

  const getTable = async () => {
    await axios({
      method: "get",
      url: `http://localhost:5000/api/toplist`,

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(function (response) {
        settable(response.data);
      })
      .catch(function (error) {
        alert(error.response.data);
      });
  };

  return table ? (
    <div className="container mt-5">
      <h3>Most visited</h3>
      <table className="table mt-3">
        <thead>
          <tr>
            <th scope="col">Long Url</th>
            <th scope="col">Visits</th>
            <th scope="col">Short Url</th>
          </tr>
        </thead>
        <tbody>
          {table.map((row) => (
            <tr key={row._id}>
              <td>{row.longUrl}</td>
              <td>{row.visits}</td>
              <td>{process.env.REACT_APP_FRONTEND_URL + "/" + row.urlCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="container mt-5">
      <h3>Loading...</h3>
    </div>
  );
};

export default Table;
