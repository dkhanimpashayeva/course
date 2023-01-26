
import './App.css';
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './routes/route';

const App = () => {
  const router=createBrowserRouter(ROUTES)
  return (
    <div>
    <RouterProvider router={router}>

    </RouterProvider>
    </div>
  )
}

export default App
