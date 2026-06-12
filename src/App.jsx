import './App.css'
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/home/HomePage'
import NoPage from './components/pages/nopages/NoPage'


function App() {
  
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/*" element={<NoPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
