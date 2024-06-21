import React from 'react'

interface Tag {
  id: string;
  name: string;
  count: number;
}
interface ExploreTagsProps {
  tags: Tag[]
}

const ExploreTags: React.FC<ExploreTagsProps> = ({tags}) => {
  return (
    <div className="p-6 flex-column h-full">
      <div className="text-gray-900 font-bold text-lg mb-2">Explore tags</div>
      <div className=''>
        {tags.map((tag) => 
          <div className="m-1 inline-block cursor-pointer w-min h-min bg-base-200 text-sm font-light me-2 px-4 py-2 rounded-full">{tag.name}</div>
        )}
      </div>
      <p className='text-success cursor-pointer mt-2 text-sm'>Explore more tags...</p>
    </div>
  )
}

export default ExploreTags