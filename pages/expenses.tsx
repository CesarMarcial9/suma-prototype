import React from "react";
import DashboardLayout from "../components/dashboardLayout";
import PageLayout from "../components/pageLayout";

type Props = {};

const ExpensesPage = (props: Props) => {
  return (
    <PageLayout>
      <h2 className="text-4xl font-main">Expenses</h2>
    </PageLayout>
  );
};

export default ExpensesPage;
