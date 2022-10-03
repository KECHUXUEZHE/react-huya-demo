import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper } from './styled'

const Search = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <div className="search">
        <div className="searchHeard">
          <div className="searchClose" onClick={() => navigate("/home")}>取消</div>
          <div className="searchBox">
            <input type="text" className='box' placeholder='搜游戏/直播/频道' />
            <i></i>
          </div>
          <div className="searchBtn">搜索</div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Search


