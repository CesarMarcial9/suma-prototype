import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const PageLayout = ({children}: Props) => {
  return (
    <div className='h-full p-12'>
        {children}
    </div>
  )
}

export default PageLayout