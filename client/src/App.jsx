import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'

import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setUserData } from './Redux/userSlice'


export const ServerUrl = "http://localhost:8000"

function App() {
  const { userData } = useSelector((state) => state.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (!userData) {
      navigate('/auth')
    }

    const getUser = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/user/current-user", { withCredentials: true })
        dispatch(setUserData(result.data))
      } catch (error) {
        console.log(error);
        dispatch(setUserData(null))
      }
    }

    getUser()
  }, [dispatch])
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
    </Routes>
  )
}

export default App
