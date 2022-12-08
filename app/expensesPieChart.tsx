import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Dining out", value: 400 },
  { name: "Groceries", value: 300 },
  { name: "Rent", value: 300 },
  { name: "General", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const ExpensesPieChart = () => {
  return (
    <ResponsiveContainer
      width={"100%"}
      height={"100%"}
    >
      <PieChart>
        <Pie data={data} dataKey={"value"} nameKey={"name"} label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]}/>
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ExpensesPieChart;
