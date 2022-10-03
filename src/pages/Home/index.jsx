import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header' // 引入顶部
import Navbar from '@/components/Navbar' // 引入顶部导航

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Home 