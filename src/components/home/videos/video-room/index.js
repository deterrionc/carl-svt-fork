import { Link } from "react-router-dom"
import { FaIcon } from "../../../../container/atoms/FaIcon"
import Header from "../../../../container/organisms/Header"

const VideoRoom = ({ match }) => {
  console.log(match)
  return (
    <div className="min-h-screen bg-svt">
      <div className="container mx-auto text-white">
        <Header />
        <div className="py-3">
          <Link to='/videos'>
            <h5 className="m-1 pb-3 text-lg font-bold leading-6">Videos <FaIcon iconName="fa-arrow-right" /></h5>
          </Link>

          <video className="min-w-full" autoPlay controls>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default VideoRoom