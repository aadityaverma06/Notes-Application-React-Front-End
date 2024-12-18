import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Notes from "./components/Notes.jsx";
import Home from "./components/Home.jsx";
import ViewNote from "./components/ViewNote.jsx";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/Notes",
    element: (
      <div>
        <Navbar />
        <Notes />
      </div>
    ),
  },
  {
    path: "/Notes/:id",
    element: (
      <div>
        <Navbar />
        <ViewNote />
      </div>
    ),
  },
]);

function App() {
  return(
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App;
