import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { HeaderWrapper, SearchInput } from './style'

export default function Header() {
    const navigate = useNavigate()

    return (
        <HeaderWrapper>
            <SearchInput onClick={() => navigate("/search")}>
                
                <i className='iconfont icon-sousuo'></i>
                <input type="text" placeholder='请输入搜索内容' />
                <i className="iconfont icon-saoyisao"></i>
            </SearchInput>
            <Link to="/dynamic">
                <i className='iconfont icon-youxi'></i>
            </Link>
            <Link to="/mail-box">
                <i className='iconfont icon-qiandao'></i>
            </Link>
        </HeaderWrapper>
    )
}
