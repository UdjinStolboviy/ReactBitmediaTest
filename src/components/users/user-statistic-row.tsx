import React from "react";

interface UserStatsticListRowUI {
  user?: any;
  statistic: any;
  position?: number;

  id?: number;
  page_views?: number;
  clicks?: number;
}

export const UserStatisticListRow = (props: UserStatsticListRowUI) => (
  <tr className="table-row">
    <td className="table-item table-static">{props.statistic.clicks}</td>

    <td className="table-item table-static">{props.statistic.page_views}</td>
  </tr>
);
