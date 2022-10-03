import styled from 'styled-components'

export const HeaderWrapper = styled.div `
    width: 100%;
    height: 60px;
    position: sticky;
    z-index: 999;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    a {
        display : flex;
        flex-direction : column;
        justify-content : space-around;
        color: #666;
    }
    i {
        font-size: 28px ;
    }
`

export const SearchInput = styled.div `
    width: 70%;
    margin-top: 12px;
    margin-left: 10px;
    margin-bottom: 15px;
    border-radius: 15px;
    background-color : rgba(50, 50, 50, 0.08);
    display: flex;
    i {
        font-size: 18px;
        padding-top: 6px;
        padding-left: 4px;
        padding-right: 4px;
        flex: 2;
    }
    input {
        width: 120px;
        flex: 8;
        padding-left: 4px;
        height: 30px;
        background: rgba(255, 255, 255, 0.01);
        border-radius: 14px;
        border: 0;
        font-size: 13px;
    }
`
