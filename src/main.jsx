import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // 引入路由
import './assets/font/iconfont.css' // 引入字体图标
import './assets/styles/reset.css' // 重置样式
import './modules/rem' //自适应rem
import 'swiper/dist/css/swiper.min.css' // 引入轮播图样式
// antd-mobile 升级不需要手动引入css
// import 'antd-mobile/dist/antd-mobile.css' // 引入antd-mobile样式

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

