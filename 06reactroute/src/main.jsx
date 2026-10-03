import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './componants/Home/Home.jsx'
import About from './componants/About/About.jsx'
import Mymenu from './componants/Mymenu/Mymenu.jsx'
import User from './componants/User/User.jsx'
import Github, { githubInfoLoader } from './componants/Github/Github.jsx'


// create variable router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={< Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about/' element={<About/>} />
        <Route path='about/mymenu/' element={<Mymenu/>}
      />

      <Route path='user/' element={<User />}>
          <Route path=':userid' element={<User />} />
      </Route>


      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>}/>

      {/* <Route path='user/:userid' element={<User />} /> */}
    </Route>
  )
)

/* pass constant here */
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>  
  </StrictMode>,
)
