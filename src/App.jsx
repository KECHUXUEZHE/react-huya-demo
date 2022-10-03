import { useState, Suspense } from 'react'
import './App.css'
// import Header from './pages/Home/Header' // 引入顶部
import Footer from './components/Footer' // 引入底部
import RoutesConfig from './routes'

function App() {

  return (
    <div className="App">
      {/* <Header /> */}
      <Suspense fallback={<div>loading...</div>}>
        <RoutesConfig />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
