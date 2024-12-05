import { createBrowserRouter, Route, Routes, RouterProvider, renderMatches } from "react-router-dom";
import AboutPage from "./components/about-page";
import RaceList from "./components/RaceList";
import Header from "./components/header";
import RaceContent from "./components/race-content";
import DriverList from "./components/driverList";
import DriverDetail from "./components/driverDetail";

const Root = () => {
  return (
    <div>
        <Header />
        <Routes>
          <Route path = "/" element = {<AboutPage/>}/>
          <Route path = "/races" element = {<RaceList/>}/>
          <Route path = "/race/:id" element = {<RaceContent />} />
          <Route path = "/drivers" element = {<DriverList/>}/>
          <Route path="/driver/:id" element ={<DriverDetail/>} />
        </Routes>
    </div>
  );
}

const router = createBrowserRouter([{path : "*", Component : Root}])

function App() {

  return (
    <RouterProvider router = {router}/>
  );
}

export default App
