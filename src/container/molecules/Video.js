const Video = ({ video }) => {
  return (
    <div className="m-1 width-calc bg-video-card rounded overflow-hidden">
      <img alt={video.title} src={video.image} />
      <div className="p-2">
        <div className="text-base">{video.title}</div>
      </div>
    </div>
  )
}

export default Video