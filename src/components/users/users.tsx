import React, { useEffect, useState } from "react";
import "./styles/users.scss";
import HaederLittle from "../footerheder/haederlittle";
import FooterLittle from "../footerheder/footerlittle";
import { withRouter, Link } from "react-router-dom";

import { UserList } from "./user-list";

import axios from "axios";

const Users = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:4001/")
  //     .then((data) => data.json())
  //     .then((response) => setData(response))
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  const [user, setUser] = useState([]);
  const [statistic, setUserStatistic] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
    fetchUserStstistic();
  }, []);

  const fetchUser = async () => {
    // Send GET request to  endpoint
    axios
      .get("http://localhost:4001/")
      .then((response) => {
        // Update state
        setUser(response.data);

        // Update loading state
        setLoading(false);
      })
      .catch((error) =>
        console.error(`There was an error retrieving the user list: ${error}`)
      );
  };

  const fetchUserStstistic = async () => {
    // Send GET request to  endpoint
    axios
      .get("http://localhost:4001/statistic/")
      .then((response) => {
        // Update state
        setUserStatistic(response.data);

        // Update loading state
        setLoading(false);
      })
      .catch((error) =>
        console.error(`There was an error retrieving the user list: ${error}`)
      );
  };

  return (
    <>
      <HaederLittle />
      <section className="user">
        <div className="container">
          <Link className="link" to="/">
            Main page {">"}
          </Link>
          <Link className="link active" to="/statistics">
            User satistics {">"}
          </Link>
          <Link className="link " to="/charts">
            Samuel
          </Link>
          <div className="user-text">Users statistics</div>
          <UserList user={user} loading={loading} statistic={statistic} />
        </div>
      </section>
      <FooterLittle />
    </>
  );
};

export default withRouter(Users);
