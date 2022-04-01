import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import {Profile} from './components/Profile'

function App() {
  library.add(fab, faFire)
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}/> 
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/" element={<SignIn />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
