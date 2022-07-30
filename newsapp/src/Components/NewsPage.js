
import React, { Component } from 'react'
import NewsItem from './NewsItem';
export class NewsPage extends Component {
  render() {
    let { title, description,url,newsurl,author,publishedAt } = this.props;
    return (
        <>
        <NewsItem/>
        <div class="mt-4 p-5 bg-primary text-white rounded">
        <h1>Jumbotron Example</h1>
        <img src={url} alt={url}/>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      </>
    )
  }
}

export default NewsPage