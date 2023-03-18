import Routing from "./Routes";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
        {/* < Navbar /> */}
        <Routes>
          <Route exact path='/' element={< Homepage />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
