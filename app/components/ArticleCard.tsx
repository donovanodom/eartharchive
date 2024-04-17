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
  <div className="w-full relative group bg-base-100 my-2">
    <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
      <div className="card-body">
        <h2 className="card-title">{article.title}</h2>
        <p className="text-slate-400 font-light text-sm">{article.content}</p>
      </div>
    </div>
  </div>
  )
}

export default ArticleCard