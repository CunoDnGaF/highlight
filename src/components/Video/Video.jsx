const Video = function({url, views}) {
  return (
    <div className="item item-video">
        <iframe src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <p className="views">Просмотров: {views}</p>
    </div>
  )
}

export default Video;