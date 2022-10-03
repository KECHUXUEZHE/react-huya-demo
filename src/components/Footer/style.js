import styled from 'styled-components';

export const FooterWrapper = styled.div`
    width: 100%;
    height: 50px;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    a{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        color: #666;
        &.act{
            color: #ff5500 ;
            transition: all .3s;
        }
        i{
            font-size: 1.6em;
        }
    }
`