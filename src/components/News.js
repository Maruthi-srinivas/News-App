// src/components/News.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './News.css'; // Import the CSS file for styling

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = '7fc309fe7d9d4d2eac90ea31c0f73bc0'; // Replace with your API key
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then((response) => {
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [category]);

  return (
    <div className='news-container' >
    <h2>{category} News</h2>
    {articles.map((val)=>{
      return (
        <div className="card" style={{width: "18rem"}}>
        <img src={val.urlToImage} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{val.title}</h5>
          <p className="card-text">{val.description}</p>
          <a href={val.url} target="_blank" rel="noopener noreferrer" className="read-more-link">Read more</a>
        </div>
      </div>
      )
    })}
    </div>
  );
};

export default News;