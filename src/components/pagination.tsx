import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./pagination.scss";

const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
  // const [toggle, toggleClass] = useState(false);
  const [active, activeLink] = useState(0);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // const activeClass = (number: number, toggle: boolean) => {
  //   let active = "page-item";
  //   if (number == number) {
  //     active;
  //   } else if (toggle === true) {
  //     active = "page-item active";
  //   } else {
  //     active;
  //   }
  //   return active;
  // };

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => activeLink(number)}
            className={number === active ? "page-item" : "page-item active"}
            // toggle ? "page-item" : "page-item active"
          >
            <Link
              to="/statistics"
              onClick={() => paginate(number)}
              href="/statistics/2"
              className={
                number === active ? "page-link" : "page-link active-link"
              }
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
