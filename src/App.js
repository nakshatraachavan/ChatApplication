import './App.css';
import Chatbox from './components/chatbox';
import { BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Chatbox/>} /> 
          
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
