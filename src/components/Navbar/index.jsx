import React, { useEffect } from 'react'
// import propTyes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Swiper from 'swiper'
import { NavWrapper } from './style'

export default function Navbar() {

    let swiper = null;
    useEffect(() => {
        if (swiper) return
        swiper = new Swiper('.navbar')
    }, [])
    
    // 页面二级路由的导航准备 
    let homeNavs = [
        { id: 1, desc: '有料', path: '/material' },
        { id: 2, desc: '推荐', path: '/recommend' },
        { id: 3, desc: '热门', path: '/hot' },
        { id: 4, desc: '和平精英', path: '/peace' },
        { id: 5, desc: '王者荣耀', path: '/honor' },
        { id: 6, desc: 'LOL', path: '/lol' },
        { id: 7, desc: 'CF', path: '/cf' },
        { id: 8, desc: '户外', path: '/outside' },
        { id: 9, desc: '星秀', path: '/star' },
        { id: 10, desc: '暗区突围', path: '/dark' },
    ]

    return (
        <NavWrapper>
            <div className="navbar swiper-container">
                <div className="nav-box swiper-wrapper">
                    {
                        homeNavs.map((item, index) => {
                            return (
                                <NavLink
                                    index={index}
                                    to={`/home${item.path}`}
                                    key={item.id}
                                    className="nav-item swiper-slide"
                                >
                                    {item.desc}
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
        </NavWrapper>
    )
}
