import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Routing from './components/routing'
import './App.css';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Routing />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App;