import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/About'
import Projects from './pages/Projects'
import NoPage from './pages/NoPage'
import Privacy from './pages/Privacy'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/PrivacyPolicy" element={<Privacy />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
