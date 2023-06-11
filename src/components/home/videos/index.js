import { Link } from "react-router-dom"
import { FaIcon } from "../../../container/atoms/FaIcon"
import Video from "../../../container/molecules/Video"
import Header from "../../../container/organisms/Header"

const topVideos = [
  { id: '1', image: "/assets/img/video-list-1.jpg", title: "Farewell and onion planting" },
  { id: '2', image: "/assets/img/video-list-2.jpg", title: "Season 1 - Episode 1" },
  { id: '3', image: "/assets/img/video-list-3.jpg", title: "Trailer: Premier Leagure: Battle Giant" },
  { id: '4', image: "/assets/img/video-list-4.jpg", title: "The first Swedes" },
  { id: '5', image: "/assets/img/video-list-5.jpg", title: "30 minuter Lotta Edholm" },
  { id: '6', image: "/assets/img/video-list-6.jpg", title: "Julia Kalthoff Hemmakultur - Konst" },
]

const Videos = () => {
  return (
    <div className="min-h-screen bg-svt">
      <div className="container mx-auto text-white">
        <Header />

        <div className="py-3">
          <Link to='/videos'>
            <h5 className="m-1 pb-3 text-lg font-bold leading-6">Videos <FaIcon iconName="fa-arrow-right" /></h5>
          </Link>
          <div className="grid grid-cols-6 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {topVideos.length && topVideos.map((video, index) =>
              <Video key={index} video={video} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Videos