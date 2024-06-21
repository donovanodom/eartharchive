'use client'
import React, {useState} from 'react'
import FeaturedArticle from './FeaturedArticle'
import Image from 'next/image';

const Featured = () => {
  const [readMore, setReadMore] = useState(false)
  const handleReadMoreToggle = () => {
    setReadMore(readMore => !readMore)
  }
  return (
    <div className={`w-full h-auto flex flex-col ${readMore ? 'bg-base-100' : 'bg-secondary-content'} items-center`} style={{borderBottom: 'solid 1px #1e2734'}}>
      <div className='w-min mt-2 font-semibold text-2xl text-base-200'>
        <Image 
          src='/featured.png' 
          alt='featured' 
          width='280' 
          height='0'
          className='max-w-80 relative'
          style={{marginBottom: '-25px'}}
        />
      </div>
      <FeaturedArticle readMore={readMore}/>
      <div className={`${readMore ? 'text-gray-700 bg-base-100' : 'text-base-200 bg-secondary-content'} flex flex-col items-center cursor-pointer hover:text-base-100`} onClick={handleReadMoreToggle}>
        {!readMore && <div className='relative top-4 z-10 text-base-300 text-sm'>Read more...</div>}
        <div className={`${readMore ? 'text-gray-700 bg-base-100' : 'text-base-200 bg-secondary-content'} w-8 h-8 rounded-full relative top-4`}>
        {!readMore ? 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto relative top-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg> :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto relative top-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>

        }
        </div>
      </div>
    </div>
  )
}

export default Featured