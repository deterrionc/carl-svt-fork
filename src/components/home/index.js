import Header from "../../container/organisms/Header"
import ArticleList from "../../container/organisms/ArticleList"
import VideoList from "../../container/organisms/VideoList"

const topArticles = [
  { image: "/assets/img/card-list-1.jpg", tag: "svt news", title: "So the battles can be affected by the dust collapse", description: "This is War of the Week - delving into the lastest in the war in Ukraine" },
  { image: "/assets/img/card-list-2.jpg", tag: "new episode", title: "Wild chefs", description: "Six profiessional chefs compete to cook the best food over an open fire" },
  { image: "/assets/img/card-list-3.jpg", tag: "lotta edholm", title: "30 minutes", description: "Anders Holmberg's guest is education minister Lotta Edholm" },
  { image: "/assets/img/card-list-4.jpg", tag: "new drama comedy", title: "From the area", description: "Two words collide when Zeina is forced to move from the suburbs of Stockholm to a farm in Varmland" },
  { image: "/assets/img/card-list-5.jpg", tag: "News Directly", title: "Unique prosecution of terroist financing", description: "A man in his 40s is charged today with, among other things, aggravated extortion and attempted financing of terrorism" },
  { image: "/assets/img/card-list-6.jpg", tag: "lastest news", title: "The morning studio", description: "Today's most important news and analysis with frequent updates" },
]

const topVideos = [
  { image: "/assets/img/video-list-1.jpg", title: "Farewell and onion planting" },
  { image: "/assets/img/video-list-2.jpg", title: "Season 1 - Episode 1" },
  { image: "/assets/img/video-list-3.jpg", title: "Trailer: Premier Leagure: Battle Giant" },
  { image: "/assets/img/video-list-4.jpg", title: "The first Swedes" },
  { image: "/assets/img/video-list-5.jpg", title: "30 minuter Lotta Edholm" },
  { image: "/assets/img/video-list-6.jpg", title: "Julia Kalthoff Hemmakultur - Konst" },
]

const Home = () => {
  return (
    <div className="h-screen bg-svt">
      <div className="container mx-auto text-white">
        <Header />
        <VideoList videos={topVideos} />
        <ArticleList articles={topArticles} />
      </div>
    </div>
  )
}

export default Home