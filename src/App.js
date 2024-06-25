import React from 'react';
import Homepage from './assets/pages/homepage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectPage from './pages/projectpage';

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/projects/:id", element: <ProjectPage /> },
])

function App() {
  return (
    <div className="md:px-40">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
