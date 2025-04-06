import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./Routes/Search";
import Header from "./Components/Header";
import ComingSoon from "./Routes/ComingSoon";
import NowPlaying from "./Routes/NowPlaying";
import Home from "./Routes/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/coming-soon" element={<ComingSoon />}></Route>
        <Route path="/now-playing" element={<NowPlaying />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/" element={<Home />}></Route>

        <Route path="/movies/:movieId" element={<Home />} />
        <Route path="/coming-soon/movies/:movieId" element={<ComingSoon />} />
        <Route path="/now-playing/movies/:movieId" element={<NowPlaying />} />
      </Routes>
    </Router>
  );
}

export default App;
