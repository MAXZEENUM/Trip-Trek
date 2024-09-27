import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from "./page/Login";
import Homepage from "./page/Homepage";
import Profile from "./page/Porfile";
import Detail from "./page/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Profile/:userId" element={<Profile />} />
          <Route path="/Detail/:country/:postId" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
