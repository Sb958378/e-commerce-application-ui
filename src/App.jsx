import React from 'react'
import Headers from './Util/Headers'
import { Outlet } from 'react-router-dom'
const App = () => {
  return (
    <div className='m-0'>
      <Headers/>
      <Outlet/>
    </div>
  )
}

export default App