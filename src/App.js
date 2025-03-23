import ChatBox from "./components/chatBox";
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
