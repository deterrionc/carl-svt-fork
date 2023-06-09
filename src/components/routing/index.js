import { Routes, Route } from 'react-router-dom'

// components import
import Home from '../home'
import Dashboard from '../dashboard'

const Routing = props => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default Routing