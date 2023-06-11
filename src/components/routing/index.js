import { Routes, Route, Navigate } from 'react-router-dom'

// components import
import Home from '../home'
import Dashboard from '../dashboard'
import Videos from '../home/videos'
import Articles from '../home/articles'

const Routing = props => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/videos' element={<Videos />} />
      <Route exact path='/articles' element={<Articles />} />
      <Route exact path='/dashboard' element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default Routing