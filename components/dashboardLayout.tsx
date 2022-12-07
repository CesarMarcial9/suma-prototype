import React, { ReactNode } from 'react'
import Navbar from './navbar'

type Props = {
    children: ReactNode
}

const DashboardLayout = ({children}: Props) => {
  return (
    <div className="flex flex-col h-screen ">

      <div className="grid flex-1 grid-cols-6 grid-rows-1 gap-4 p-6 bg-primary">
        <Navbar />
        <div className="col-span-5 bg-white rounded-md shadow-sm">
            {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout