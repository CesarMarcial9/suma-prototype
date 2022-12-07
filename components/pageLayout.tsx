import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const PageLayout = ({children}: Props) => {
  return (
    <div className='p-4 lg:p-12 lg:h-full'>
        {children}
    </div>
  )
}

export default PageLayout