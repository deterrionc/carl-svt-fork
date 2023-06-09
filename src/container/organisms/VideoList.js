import { useState, useEffect } from "react"
import Video from "../molecules/Video"
import { FaIcon } from "../atoms/FaIcon"

const VideoList = ({ videos }) => {
  const [_videos, setVideos] = useState([])

  useEffect(() => {
    setVideos(videos)
  }, [videos])

  return (
    <div className="py-3">
      <h5 className="m-1 pb-3 text-lg font-bold leading-6">Videos <FaIcon iconName="fa-arrow-right" /></h5>
      <div className="grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {_videos.length && _videos.map((video, index) =>
          <Video key={index} video={video} />
        )}
      </div>
    </div>
  )
}

export default VideoList