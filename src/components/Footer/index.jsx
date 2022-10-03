import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames' // 引入classnames
import { isPathPartlyExisted } from '@/utils'

export default function Footer(props) {
    const { pathname } = useLocation() // 引入hooks
    if(isPathPartlyExisted(pathname)) return 

    return (
        <FooterWrapper>
            <Link to="/home" className={classnames({ act: pathname.includes('home') || pathname == '/' })}>
                <i className="iconfont icon-shouye"></i>
                <span>首页</span>
            </Link>
            <Link to="/entertainment" className={classnames({ act: pathname == '/entertainment' })}>
                <i className="iconfont icon-shoucang"></i>
                <span>娱乐</span>
            </Link>
            <Link to="/subscribe" className={classnames({ act: pathname == '/subscribe' })}>
                <i className="iconfont icon-aixin"></i>
                <span>订阅</span>
            </Link>
            <Link to="/news" className={classnames({ act: pathname == '/news' })}>
                <i className="iconfont icon-jichutubiao-XC-xiaoxi"></i>
                <span>消息</span>
            </Link>
            <Link to="/mine" className={classnames({ act: pathname == '/mine' })}>
                <i className="iconfont icon-wode"></i>
                <span>我的</span>
            </Link>
        </FooterWrapper>
    )
}
