import './App.css';
import { Dashboard } from './pages/Dashboard'
import { SongList } from './components/SongList';
import axios from 'axios';
function App() {
  
  return (
   
    <div className="App"> 
    
     <Dashboard  />
     <SongList />
     
    </div>
  );
}

export default App;
