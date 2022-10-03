import React from 'react'
import { BannerWrapper } from './style'
import { Swiper } from 'antd-mobile'

const Banner = () => {
    const imgs = [
        'http://livewebbs2.msstatic.com/home_recommend_live_app_1520997596.jpg?ips_thumbnail/0/w/700/',
        'http://livewebbs2.msstatic.com/home_recommend_live_app_1650952211.jpg?ips_thumbnail/0/w/700/',
        'http://livewebbs2.msstatic.com/home_recommend_live_app_1597718800.jpg?ips_thumbnail/0/w/700/',
        'http://livewebbs2.msstatic.com/home_recommend_live_app_1564656494.jpg?ips_thumbnail/0/w/700/'
    ]

    const items = imgs.map((img, index) => (
        <Swiper.Item key={index}>
            <div
                className='content'
                style={{ backgroundImage: `url(${img})` }}
            >
            </div>
        </Swiper.Item>
    ))

    return (
        <BannerWrapper>
            <Swiper autoplay loop >{items}</Swiper>
        </BannerWrapper>
    )
}

export default Banner 