// @ts-nocheck

import React, { Key, useState } from "react";

// Import components
import { UserListRow } from "./user-list-row";
import { UserStatisticListRow } from "./user-statistic-row";
import Pagination from "../pagination";

// Import styles
import "./styles/user-list.scss";

// Create interfaces
interface UserUI {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  gender?: string;
  ip_address?: string;
}
interface StatisticUi {
  id?: any;
  page_views?: number;
  clicks?: number;
}

interface UserListUI {
  statistic: StatisticUi[];
  user: UserUI[];
  loading?: boolean;
}
interface StatisticUserUI {
  id?: Key | null;

  loading?: boolean;
}

export const UserList = (props: UserListUI) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(50);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = props.user.slice(indexOfFirstPost, indexOfLastPost);
  const currentPostsStatus = props.statistic.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  // Show loading message
  if (props.loading) return <p>Leaderboard table is loading...</p>;
  console.log(props);
  /* tslint:disable */
  return (
    <>
      <table className="table">
        <thead className="table-head">
          <tr className="header-text">
            <th className="table-head-item">id</th>
            <hr className="head-hr" />
            <th className="table-head-item">First name</th>
            <hr className="head-hr" />
            <th className="table-head-item">Last name</th>
            <hr className="head-hr" />
            <th className="table-head-item email">Email</th>
            <hr className="head-hr" />
            <th className="table-head-item gender">Gender</th>
            <hr className="head-hr" />
            <th className="table-head-item addres">IP address</th>
            <hr className="head-hr" />
            <th className="table-head-item click">Total clicks</th>
            <hr className="head-hr" />
            <th className="table-head-item views">Total page views</th>

            <th className="table-head-item" />
          </tr>
        </thead>

        <tbody className="table-body">
          <div>
            {currentPosts.length > 0 ? (
              currentPosts.map((user: UserUI, _idx) => (
                <UserListRow key={user.id} user={user} position={user.id} />
              ))
            ) : (
              <tr className="table-row">
                <td
                  className="table-item"
                  style={{ textAlign: "center" }}
                  colSpan={6}
                >
                  There are no user to show. Create one!
                </td>
              </tr>
            )}
          </div>
          <div>
            {currentPostsStatus.id === props.user.id ? ( // @ts-ignore
              currentPostsStatus.map((statistic: StatisticUserUI, idx) => (
                <UserStatisticListRow
                  key={statistic.id}
                  statistic={statistic}
                />
              ))
            ) : (
              <tr className="table-row">
                <td
                  className="table-item"
                  style={{ textAlign: "center" }}
                  colSpan={6}
                >
                  There are no user to show. Create one!
                </td>
              </tr>
            )}
          </div>
        </tbody>
      </table>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={props.user.length}
        paginate={paginate}
      />
    </>
  );
};
