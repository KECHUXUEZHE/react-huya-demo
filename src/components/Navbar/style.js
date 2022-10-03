import styled from "styled-components";

export const NavWrapper = styled.div `
    /* position: absolute;
    top: 54px; */
    /* width: 100%; */
    /* z-index: 1;
    height: 46px;
    line-height: 46px;
    background: #fff; */
    .navbar{
        height: 35px;
        background: #fff;
        border-bottom: 1px solid #ccc;
        padding: 0 40px 0 10px;
        font-size: 15px;
    .nav-box{
        height: 35px!important;
        line-height: 35px!important;
        overflow: visible;
    }
    .nav-item{
        width:auto!important;
        position: relative;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
        justify-content: center;
        font-size: .16rem;
        color: #666;
        border-bottom: 1px solid #ebebeb;
        padding: 2px 0;
        margin-right: 24px;
        white-space: nowrap;
        &.active {
            font-size: .20rem;
            transition: all .3s;
        }
        &.active::after
        {
            content: "";
            /* background-color: rgb(35, 149, 255); */
            width:0.3rem;
            height: 0.03rem;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
        }
        
    }
}

`
