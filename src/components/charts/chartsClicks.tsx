import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart,
} from "recharts";

const data = [
  {
    name: "0",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Now",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Dec",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Jan",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Feb",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Mar",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Apr",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "May",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Jun",
    uv: 4567,
    pv: 4760,
    amt: 2245,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <h3 className="chars-text">Clicks</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="uv"
              strokeWidth={5}
              stroke="#3A80BA"
              fill="#3A80BA"
            />
          </LineChart>
        </ResponsiveContainer>
        <h3 className="chars-text">Vievs</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="pv"
              strokeWidth={5}
              stroke="#3A80BA"
              fill="#3A80BA"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
