import React from "react";
import PageLayout from "../components/pageLayout";
import {
  ResponsiveContainer,
  LineChart,
  YAxis,
  Legend,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";
import ExpensesPieChart from "../components/expensesPieChart";
const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Homepage = () => {
  return (
    <PageLayout>
      <div className="flex flex-col h-full gap-4">
        <header className="pb-4 border-b-2 border-b-primary">
          <h2 className="text-4xl">Home</h2>
        </header>

        <section className="grid grid-cols-3 gap-4">
          <div className="flex flex-col gap-6 ">
            <h3 className="text-2xl">Savings</h3>
            <ResponsiveContainer width={"100%"} height={300}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex flex-col gap-6 ">
            <h3 className="text-2xl">Expenses</h3>
              <ExpensesPieChart />
            </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Homepage;
