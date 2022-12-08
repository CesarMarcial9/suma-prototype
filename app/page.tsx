import React from 'react'
import ExpensesPieChart from './expensesPieChart'
import SavingsChart from './savingsChart'

type Props = {}

const Homepage = (props: Props) => {
  return (
    <div className="flex flex-col h-full gap-4">
        <header className="pb-4 border-b-2 border-b-primary">
          <h2 className="text-4xl">Home</h2>
        </header>

        <section className="grid gap-4 lg:grid-cols-3">
          <div className="flex flex-col gap-6 border">
            <h3 className="text-2xl">Savings</h3>
            <SavingsChart />
          </div>

          <div className="flex flex-col gap-6 border">
            <h3 className="text-2xl">Expenses</h3>
            <ExpensesPieChart />
          </div>
        </section>
      </div>
  )
}

export default Homepage