import React from "react";
import PageLayout from "../components/pageLayout";

import ExpensesPieChart from "../components/expensesPieChart";
import SavingsChart from "../components/savingsChart";

// Homepage is the main container for "/" route.
// Contains all charts related to the user at a glance.
// Data is not fetched here, every component fetches their own data.
const Homepage = () => {
  return (
    <PageLayout>
      <div className="flex flex-col h-full gap-4">
        <header className="pb-4 border-b-2 border-b-primary">
          <h2 className="text-4xl">Home</h2>
        </header>

        <section className="grid gap-4 lg:grid-cols-3">
          <div className="flex flex-col gap-6 ">
            <h3 className="text-2xl">Savings</h3>
            <SavingsChart />
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
