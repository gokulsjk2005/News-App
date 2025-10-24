import React from 'react'
import newsImg from'./Assets/news.jpg';

const NewsItem = ({ title, description, imageUrl, url }) => {
  return (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
          <div className="card bg-dark text-white mb-3 my-2 mx-2 py-2 px-2" style={{maxWidth:"34.5rem"}}>
            <img src={imageUrl?imageUrl:newsImg} style={{height: "18rem", width:"auto"}} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title.slice(0,50)}</h5>
              <p className="card-text">{description?description.slice(0,90):"No description available"}</p>
              <a href={url} className="btn btn-primary">Read More..</a>
            </div>
          </div>
        </div>
  )
}

export default NewsItem