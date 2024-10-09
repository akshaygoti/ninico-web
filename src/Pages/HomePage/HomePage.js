import React from 'react'

import Home from '../../Component/Home/Home'
import TopCategories from '../../Component/TopCategories/TopCategories'
import PopularProducts from '../../Component/PopularProducts/PopularProducts'
import Abstractpost from '../../Component/Abstractpost/Abstractpost'
import Shoparea from '../../Component/Shoparea/Shoparea'

const HomePage = () => {
  return (
    <div>
        <Home/>
        <TopCategories/>
        <PopularProducts/>
        <Abstractpost/>
        <Shoparea/>
    </div>
  )
}

export default HomePage