import React from 'react';
import Homepage from './assets/pages/homepage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectPage from './pages/projectpage';
import ArticlePage from './pages/article-page'
import Navbar from './components/navbar'


const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/projects/:id", element: <ProjectPage /> },
  { path: '/blog/posts/:slug', element: <ArticlePage /> }

])

function App() {
  return (
    <div>
      <Navbar />
      <div className="md:px-40 mt-20">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
