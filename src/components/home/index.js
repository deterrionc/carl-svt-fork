import Header from "../../container/organisms/Header"
import ArticleList from "../../container/organisms/ArticleList"
import VideoList from "../../container/organisms/VideoList"
import tempData from '../../utils/temp.json'

const topArticles = tempData.articles
const topVideos = tempData.videos

const Home = () => {
  return (
    <div className="min-h-screen bg-svt">
      <div className="container mx-auto text-white">
        <Header />
        <VideoList videos={topVideos} />
        <ArticleList articles={topArticles} />
      </div>
    </div>
  )
}

export default Home