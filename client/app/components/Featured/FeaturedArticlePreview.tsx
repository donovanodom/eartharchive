import React from 'react'
import { mockData } from '../../mockData';

const FeaturedArticlePreview = () => {
  const article = mockData[0];
  return (
    <div className='md:w-2/3 sm:w-full lg:w-2/3 m-auto p-6'>
      <div className="m-auto flex flex-col justify-center font-bold text-base-300 cursor-pointer text-xl mb-2 text-ellipsis line-clamp-1">
        <div className='self-start flex'>
          <a
            href="#"><img className="w-10 h-10 rounded-full mr-2" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/>
          </a>
          <div className="text-sm self-end">
            <a href="#" className="text-base-300 font-semibold leading-none hover:text-info">
              {article.author}
            </a>
          </div>
        </div>
        <div>
          {article.title}
        </div>
      </div>
      <div className="text-base-300 cursor-default text-sm text-ellipsis line-clamp-5">
        {article.abstract}
      </div>
    </div>
  )
}

export default FeaturedArticlePreview