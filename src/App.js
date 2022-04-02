import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// page imports
import { Dashboard } from './pages/Dashboard'
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Profile } from './pages/Profile'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'
// import { faFi } from '@fortawesome/free-solid-svg-icons'



function App() {
  // icon library - able to use icons in any component
  library.add(fab, faFire)
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}/> 
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/" element={<SignIn />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
