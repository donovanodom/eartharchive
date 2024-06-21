'use client'
import React, {useState} from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

const EditArticle = () => {
  const [value, setValue] = useState('hello');
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
    <div>
      <ReactQuill theme='bubble' modules={module} value={value} onChange={setValue}/>
    </div>
  )
}

export default EditArticle