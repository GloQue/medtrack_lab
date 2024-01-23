import React from "react"
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import Home from "./pages/Home"
import UserForm from "./components/UserForm"
import Table from "./components/Table"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="/form" element={<UserForm />}/>
      <Route path='/tabledata' element={<Table />}/>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router}/>
}

export default App
