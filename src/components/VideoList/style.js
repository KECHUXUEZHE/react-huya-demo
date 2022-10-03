import styled from 'styled-components'

export const LargeWrapper = styled.div `
    margin-bottom: 50px;
`

export const TopWrapper = styled.div `
    .classMore{
        .classTop {
            display: flex;
            justify-content: space-between;
            position: relative;
            padding: 12px 8px 12px 8px;
        }
        .classImg {
            width: 25px;
            height: 25px;
            vertical-align: middle;
            display: inline-block;
            margin-right: 2px;
            margin-top: -4px;
            background-size: 100% 100%;
            background-color: transparent;
        }
        .classTopLeft {
            display: inline-block;
            vertical-align: middle;
            white-space: nowrap;
            word-break: keep-all;
            font-size : 16px;
            color: #333;
        }
        .classTopRight {
            width: 42px;
            padding: 2px 0 5px 10px;
            font-size: 14px;
            color: #666;
            margin-right: 15px;
        }
        .classTopRight:after {
            content: '';
            top: 19px;
            width: 8px;
            height: 8px;
            border-top: 1px solid #666;
            border-right: 1px solid #666;
            transform: rotate(45deg);
            position: absolute;
        }
    }

`

export const BottomWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    .videoItems {
        width: 47%;
        margin-left: 2%;
        padding-bottom: 10px;
        .videoItem {
            position: relative;
            overflow: hidden;
            .videoItemImg {
                .videoRightTop {
                    font-size: 12px;
                    position: absolute;
                    z-index: 1;
                    top: 3px;
                    right: 3px;
                    padding: 2px 6px;
                    vertical-align: middle;
                    color: #eee;
                    background: rgba(44, 49, 54, .7);
                }
                .videoPic {
                    position: relative;
                    width: 100%;
                    height: 0;
                    padding-top: 56.25%;
                    border-radius: 5px;
                    overflow : hidden;
                    .videoImg {
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        width: 100%;

                    }
                }
            }
            .videoItemTitle {
                padding: 6px 3px 0 0;
                font-size: 13px;
                color: #000;
                font-weight: 500;
                line-height: 14px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: normal;
            }
            .videoItemBottom {
                display: flex;
                justify-content: space-between;
                color: #999;
                padding: 3px;
                height: 18px;
                line-height: 16px;
                font-size: 11px;
                .videoItemLeft {
                    line-height: 12px;
                }
                .videoItemRight {
                    line-height: 12px;
                    .iconfont {
                        color: #999;
                        font-size: 11px;
                    }
                }
            }
        }
    }
`