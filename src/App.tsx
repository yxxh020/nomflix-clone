import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Header from "./Components/Header";
import ComingSoon from "./Routes/ComingSoon";
import NowPlaying from "./Routes/NowPlaying";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/coming-soon" element={<ComingSoon />}></Route>
        <Route path="/now-playing" element={<NowPlaying />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
