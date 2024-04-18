interface Article {
  id: string;
  author: string;
  title: string;
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
  return (
  <div className="p-2 flex">
    <div className="m-2 w-8 flex-col justify-between">
      <div>
        
      </div>
      <div>
        {article.credibilityScore}
      </div>
    </div>
    <div>
      <div>
        <p className="text-xl">
          {article.title}
        </p>
      </div>
      <div className="text-md text-neutral-500 text-right">
        {`-${article.author}`}
      </div>
    </div>
  </div>
  )
}

export default ArticleCard