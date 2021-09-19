import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getTableService } from "../services/api";

const Table = () => {
  const [token, setToken] = useState("");
  const [table, settable] = useState([]);
  const history = useHistory();
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    if (token) {
      getTable();
    }
  }, [token]);

  const getTable = async () => {
    await getTableService(token)
      .then(function (response) {
        settable(response.data);
      })
      .catch(function (error) {
        alert(error.response.data);
        localStorage.removeItem("token");
        history.push("/admin/login");
      });
  };

  return table.length != 0 ? (
    <div className="container mt-5">
      <h3>Most visited</h3>
      <table className="table mt-3">
        <thead>
          <tr>
            <th scope="col">Long Url</th>
            <th scope="col">Visits</th>
            <th scope="col">Url Code</th>
          </tr>
        </thead>
        <tbody>
          {table.map((row) => (
            <tr key={row._id}>
              <td>{row.longUrl}</td>
              <td>{row.visits}</td>
              <td>{row.urlCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="container mt-5">
      <h3>No Data</h3>
    </div>
  );
};

export default Table;
