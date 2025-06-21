import React from 'react'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
   <BrowserRouter>
    <Routes>
               <Route path="/" element={<div>Home</div>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App