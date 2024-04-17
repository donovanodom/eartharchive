import React from 'react'
import { mockData } from '../mockData'
import ArticleCard from './ArticleCard'

const Articles = () => {
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
      {mockData.map((article) => 
          <ArticleCard article={article}/>
        )}
      </div>
    </div>
  )
}

export default Articles