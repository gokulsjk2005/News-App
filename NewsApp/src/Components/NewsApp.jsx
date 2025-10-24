import {useEffect,useState} from 'react'
import NewsItem from './NewsItem'

const NewsApp = ({category}) => {

  const[articles, setArticles] = useState([]);

  const VITE_API_KEY= '69bb55b4e5b843f98658e449bedc8d24';

  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${VITE_API_KEY}`;

    fetch(url).then((response)=>response.json()).then((data)=>{
      setArticles(data.articles);
      console.log(data.articles);

    }).catch((error)=>{
      console.log("Error fetching news articles:", error);
    });
  },[category]);

  return (
    <div className='container text-center mt-5 w-100'>
      <h1 className="h1" >Latest <span className=' bg-danger badge'>News</span></h1>
      <div className="row">

      {articles.map((news, index)=>{
          return (
            <NewsItem key={index} title={news.title} description={news.description} imageUrl={news.urlToImage} url={news.url} />
          );
      })}

      </div>
      

    </div>
  )
}

export default NewsApp