import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Admin.css";

const Admin = () => {
  const [allusers, setAllUsers] = useState([]);

  useEffect(() => {
    const UserFetch = async () => {
      try {
        const data = (await axios.get("http://localhost:8000/api/getUsers",[])).data;
        await setAllUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    UserFetch();
  }, []);

  console.log(allusers);
  return (
    <>
      <div className="adminContainer">
          <h1>Admin Block</h1>
        <div className="tableContainer">
          <table>
            <tr>
              <th>No.</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Signup on Date</th>
            </tr>
            {allusers.map((value, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{value.username}</td>
                  <td>{value.useremail}</td>
                  <td>{value.createdAt.slice(0, 10)}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default Admin;
