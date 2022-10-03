import { lazy } from "react";
import { Routes, Route, Navigate} from 'react-router-dom'
import Home from '@/pages/Home'

// 一级路由
const Entertainment = lazy(() => import('@/pages/Entertainment'))
const Subscribe = lazy(() => import('@/pages/Subscribe'))
const News = lazy(() => import('@/pages/News'))
const Mine = lazy(() => import('@/pages/Mine'))
const Search = lazy(() => import('@/pages/Search'))


// 二级路由
const Material = lazy(() => import('@/pages/Home/Material'))
const Recommend = lazy(() => import('@/pages/Home/Recommend'))
const Hot = lazy(() => import('@/pages/Home/Hot'))
const Peace = lazy(() => import('@/pages/Home/Peace'))
const Honor = lazy(() => import('@/pages/Home/Honor'))
const LOL = lazy(() => import('@/pages/Home/LOL'))
const CF = lazy(() => import('@/pages/Home/CF'))
const Outside = lazy(() => import('@/pages/Home/Outside'))
const Star = lazy(() => import('@/pages/Home/Star'))
const Dark = lazy(() => import('@/pages/Home/Dark'))

const RoutesConfig = () => {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" replace={true} />}></Route>
            <Route path="/home" element={<Navigate to="/home/recommend" replace={true} />} />
            <Route path="/home" element={<Home /> }>
                <Route path="/home/material" element={<Material />} />
                <Route path="/home/recommend" element={<Recommend />} />
                <Route path="/home/hot" element={<Hot />} />
                <Route path="/home/peace" element={<Peace />} />
                <Route path="/home/honor" element={<Honor />} />
                <Route path="/home/lol" element={<LOL />} />
                <Route path="/home/cf" element={<CF />} />
                <Route path="/home/outside" element={<Outside />} />
                <Route path="/home/star" element={<Star />} />
                <Route path="/home/dark" element={<Dark />} />
            </Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/entertainment" element={<Entertainment />}></Route>
            <Route path="/subscribe" element={<Subscribe />}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/mine" element={<Mine />}></Route>
        </Routes>
    )
}

export default RoutesConfig