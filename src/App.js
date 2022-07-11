import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom" 
import './App.css';
import Home from "./components/WebsiteRoutes/Home.jsx"
import PageNotFound from "./components/WebsiteRoutes/PageNotFound.jsx"
import Historia from "./components/Historia.jsx"
import SideBar from "./components/WebsiteRoutes/components/homepage/sidebar"
import SelectBox from "./components/WebsiteRoutes/components/homepage/SelectBox";

function App() {
  return (
    <div className='App'>
      <Router>
        <SideBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="historia" element={<Historia/>}/>
          <Route path="bulario" element={<SelectBox/>} />
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
