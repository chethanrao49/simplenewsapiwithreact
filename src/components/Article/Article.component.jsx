import React from 'react';
import './Article.styles.css';

function Article(props) {
  return (
    <div className='article-container'>
    <img alt='CoverImage'  src={props.article.urlToImage} />
    <h1 className='title'> {props.article.title} </h1>
    <p className='author'>Author: <span>{props.article.author}</span> </p>
    <p className='description'> {props.article.description}</p>
    <a href={props.article.url}>
    <p className='source'>Source: <span>{props.article.source.name}</span></p>
    </a>
    </div>
  )
}

export default Article
