const Article = function({title, views}) {
  return (
    <div className="item item-article">
        <h3><a href="#">{title}</a></h3>
        <p className="views">Прочтений: {views}</p>
    </div>
)
}

export default Article;