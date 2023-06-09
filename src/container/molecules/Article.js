const Article = ({ article }) => {
  return (
    <div className="m-1 width-calc bg-article-card rounded overflow-hidden">
      <img alt={article.tag} src={article.image} />
      <div className="p-2">
        <div className="text-base">{article.tag}</div>
        <h4 className="text-xl font-bold leading-6">{article.title}</h4>
        <div className="text-xs pt-2">{article.description}</div>
      </div>
    </div>
  )
}

export default Article