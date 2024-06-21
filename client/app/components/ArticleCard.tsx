interface Article {
  id: string;
  author: string;
  username: string;
  title: string;
  abstract: string;
  content: string;
  date: string;
  credibilityScore: number;
  cites: string;
  citedBy: string;
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({article}) => {
  const date = new Date(article.date)

  return (
  <div className="p-2 flex w-full">
    <div
      className="bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col leading-normal w-full"
    >
      <div className="p-4 pt-2">
        <div className="mb-6 ">
          <div  className="font-bold cursor-pointer text-lg mb-2 hover:text-info inline-block text-ellipsis line-clamp-1">
            {article.title}
          </div>
          <div className="text-gray-700 cursor-default text-sm max-h-28 text-ellipsis line-clamp-5">
            {article.content}
          </div>
        </div>
        <div className="flex items-center">
          <a
            href="#"><img className="w-10 h-10 rounded-full mr-2" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/>
          </a>
          <div className="text-sm">
            <a href="#" className="text-gray-900 font-semibold leading-none hover:text-info">
              {article.author}
            </a>
            <p className="text-gray-600">
              {date.toDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ArticleCard