import Video from "./Video/Video";
import Article from "./Article/Article";
import Popular from "./Popular/Popular";
import New from "./New/New";

const List = function({ list }) {
  return list.map(item => {
    const children =  item.type === 'video' ? <Video {...item} /> : <Article {...item} />;

    if(item.views > 1000) {
      return <Popular>
                {children}
            </Popular>
    }

    if(item.views < 100) {
      return <New>
                {children}
            </New>
    }

    return children;
  });
}

export default List;