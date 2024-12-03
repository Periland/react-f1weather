import { createBrowserRouter, Route, Routes, RouterProvider, renderMatches } from "react-router-dom";

function Root() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<About/>}/>
        <Route path = "/races" element = {<RaceList/>}/>
        <Route path = "/race/:id" element = {</>}/>
        <Route path = "/drivers" element = {<DriverList/>}/>
        <Route path = "/driver/:id" element = {</>}/>
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
