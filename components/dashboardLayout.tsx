import React, { ReactNode } from 'react'
import Navbar from '../app/navbar'

type Props = {
    children: ReactNode
}

const DashboardLayout = ({children}: Props) => {
  return (
    <div className="flex flex-col lg:h-screen">

      <div className="grid flex-1 grid-rows-1 gap-4 p-6 lg:grid-cols-6 bg-primary">
        <Navbar />
        <div className="bg-white rounded-md shadow-sm lg:col-span-5">
            {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout