import React from 'react'
import { mockData, mockTags } from '../mockData'
import ArticleCard from './ArticleCard'
import ExploreTags from './ExploreTags'

const HomeArticles = () => {
  return (
    <div className="container mx-auto lg:flex md:flex max-[768px]:flex-col">
      <div className="grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 md:w-2/3 sm:w-full lg:w-1/2 max-h-[100vh] overflow-auto">
      {mockData.map((article, index) => 
          <ArticleCard key={index} article={article}/>
        )}
      </div>
      <div className="md:w-2/3 sm:w-full lg:w-1/2">
        <ExploreTags tags={mockTags}/>
      </div>
    </div>
  )
}

export default HomeArticles