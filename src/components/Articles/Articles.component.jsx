import React from 'react'
import Article from '../Article/Article.component';
import './Articles.styles.css';

function Articles(props) {
  return (
    <div className='articles-container'>
       {props.data.map((article) => (
        <Article key={article.url} article={article}/>
      ))}
    </div>
  )
}

export default Articles
