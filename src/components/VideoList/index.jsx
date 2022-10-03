import React from 'react'
import { LargeWrapper, TopWrapper, BottomWrapper } from './style'
import { Link } from 'react-router-dom'

const VideoList = ({ videolists }) => {
    return (
        <LargeWrapper>
            {
                videolists.map(item => (
                    <TopWrapper key={item.id}>
                        <Link
                            className='classMore'
                            to={`/recommend/${item.id}`}
                        >
                            <div className="classTop">
                                <div className="classTopLeft">
                                    <img src={item.icon} className='classImg' alt="" />
                                    {item.class}
                                </div>
                                <div className="classTopRight">
                                    更多
                                    {/* <div className="classRight"></div> */}
                                </div>
                            </div>
                        </Link>
                        <BottomWrapper >
                            {
                                item.content.map(video => (
                                    <Link
                                        className='videoItems'
                                        to={`/recommend/${video.index}`}
                                        key={video.index}
                                    >
                                        <div className="videoItem">
                                            <div className="videoItemImg">
                                                <span className="videoRightTop">{video.title}</span>
                                                <div className="videoPic">
                                                    <img src={video.img} className='videoImg' alt="" />
                                                </div>
                                            </div>
                                            <p className="videoItemTitle">{video.lb}</p>
                                            <div className="videoItemBottom">
                                                <span className="videoItemLeft">{video.name}</span>
                                                <span className="videoItemRight">
                                                    <i className="iconfont">&#xe60c;</i>
                                                    {video.number}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>

                                ))
                            }
                        </BottomWrapper>
                    </TopWrapper>
                ))
            }
        </LargeWrapper>
    )
}

export default VideoList
