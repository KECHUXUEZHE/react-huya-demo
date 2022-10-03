import React, { useState, useEffect } from 'react'
import Banner from '@/components/Banner'
import VideoList from '@/components/VideoList'
import { getVideolist } from '@/api/request'

const Recommend = () => {

  const [videolists, setVideolists] = useState([]); // 初始化商家数据

  useEffect(() => {
    (async () => {
      let { data: resData } = await getVideolist();
      setVideolists(resData);
    })();
  }, []);

  return (
    <div>
      <Banner />
      <VideoList videolists={videolists} />
    </div>
  )
}

export default Recommend
