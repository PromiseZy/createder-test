import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home.js";
import BlogDetails from "./components/BlogDetails.js"
import './App.css';

function App() {
  return (
    <div className="app">

    <div id="routes">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/BlogDetails" element={<BlogDetails/>} />




        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;
