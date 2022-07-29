import React, { Component } from "react";
export class NewsItem extends Component {
  render() {
    let { title, description,url,newsurl,author,publishedAt } = this.props;
    return (
      <div className="card" style={{ width: "25rem"}}>
         <div className="card-header">
    By   {author} <br></br>{publishedAt}
  </div>
        <img src={url} className="card-img-top" alt={title} style={{ height: "18rem"}}></img>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsurl} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
