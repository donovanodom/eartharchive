import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'
import { mockData } from '../../mockData';

const FeaturedArticleFull = () => {
  const article = mockData[0]
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike', { 'color': ['black','#FF5E5B','#80DE99','#1c92f2','#01a221','#ffc014','#f4511f'] }],
    ['blockquote', 'code-block','link'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'align': [] }],
    [{ 'font': [] },{ 'header': [1, 2, 3, false], }],
  ];
  const historyOptions = {
    delay: 2000,
    maxStack: 500,
    userOnly: true
  };
  const module = {
    toolbar: toolbarOptions,
    history: historyOptions
  };

  return (
    <div className='bg-base-100 md:w-2/3 sm:w-full lg:w-2/3 m-auto p-6'>
      <div className="m-auto flex flex-col justify-center font-bold text-secondary-content cursor-pointer text-xl mb-2 text-ellipsis line-clamp-1">
        <div className='self-start flex'>
          <a
            href="#"><img className="w-10 h-10 rounded-full mr-2" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/>
          </a>
          <div className="text-sm self-end">
            <a href="#" className="text-secondary-content font-semibold leading-none hover:text-info">
              {article.author}
            </a>
          </div>
        </div>
        <div>
          {article.title}
        </div>
      </div>
      <ReactQuill 
        style={{margin: '-12px'}}
        readOnly
        theme='bubble' 
        modules={module} 
        value={article.content}
      />
    </div>
  )
}

export default FeaturedArticleFull