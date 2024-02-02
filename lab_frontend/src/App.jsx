import React from "react"
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import Home from "./pages/Home"
import UserForm from "./components/UserForm"
import Table from "./components/Table"
import EditForm from "./pages/EditForm"
import RootLayout from "./layouts/RootLayout"
import ShowLabInfo from "./pages/ShowLabInfo"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/form" element={<UserForm />}/>
      <Route path='/tabledata' element={<Table />}/>
      <Route path='/editform/:id' element={<EditForm />} />
      <Route path="/showlabinfo/:id" element={<ShowLabInfo />}/>
    </Route>
  )
)

function App() {
  return <RouterProvider router={router}/>
}

export default App
