import React from "react";
import { Link } from "react-router-dom";

// Create interfaces
interface UserListRowUI {
  user: any;
  statistic?: any;
  position?: number;

  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  ip_address?: string;
}

export const UserListRow = (props: UserListRowUI) => (
  <tr className="table-row">
    <Link to="/charts" className="linc-users">
      <td className="table-item">{props.position}</td>

      <td className="table-item">{props.user.first_name}</td>

      <td className="table-item">{props.user.last_name}</td>

      <td className="table-item">{props.user.email}</td>

      <td className="table-item">{props.user.gender}</td>

      <td className="table-item">{props.user.ip_address}</td>
    </Link>
  </tr>
);
