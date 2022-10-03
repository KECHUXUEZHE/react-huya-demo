import styled from "styled-components";

export const Wrapper = styled.div`
    .search {
        position: relative;
        min-height: 100vh;
        box-sizing: border-box;
        padding-bottom: 100px;
        .searchHeard {
            display: flex;
            width: 100%;
            height: 49px;
            line-height: 49px;
            border-bottom: 1px solid #ccc;
            background: #fff;
            .searchClose {
                width: 50px;
                font-size: 14px;
                text-align: center;
                color: #f18d00;
            }
            .searchBox {
                position: relative;
                height: 30px;
                margin-top: 9px;
                border: 1px solid #ececec;
                border-radius: 15px;
                flex: 1;
                .box {
                    float: left;
                    width: 77%;
                    height: 30px;
                    margin-left: 15px;
                    padding: 0;
                    line-height: 30px;
                    color: #999;
                    border: none;
                    outline: 0;
                    background: transparent;
                }
            }
            .searchBtn {
                width: 52px;
                height: 30px;
                margin: 10px 13px 0 5px;
                font-size: 14px;
                line-height: 30px;
                text-align: center;
                color: #fff;
                border-radius: 15px;
                background-color: #f29511;
            }
        }
    }
`