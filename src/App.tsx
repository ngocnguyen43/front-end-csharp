import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Admin, Error, Home, Login } from '@pages'
import './App.css'
import { Layout, Orders, Products, RequiredAuth, Users } from '@components'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<Error />}>
      <Route path='/home' index element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/error' element={<Error />} />
      <Route path='/' element={<Layout />}>
        <Route path='/admin' element={<Admin />} />
        <Route path='/products' index element={<Products />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/users' element={<Users />} />
      </Route>
    </Route>
  ))
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
