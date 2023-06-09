import { useState, useEffect } from "react"
import Article from "../molecules/Article"
import { FaIcon } from "../atoms/FaIcon"

const ArticleList = ({ articles }) => {
  const [_articles, setArticles] = useState([])

  useEffect(() => {
    setArticles(articles)
  }, [articles])

  return (
    <div className="py-3">
      <h5 className="m-1 pb-3 text-lg font-bold leading-6">Articles <FaIcon iconName="fa-arrow-right" /></h5>
      <div className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {_articles.length && _articles.map((article, index) =>
          <Article key={index} article={article} />
        )}
      </div>
    </div>
  )
}

export default ArticleList