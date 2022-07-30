import React, { Component } from "react";
import { Link } from "react-router-dom";
export class NewsItem extends Component {
  render() {
    let { title, description,url,newsurl,author,publishedAt } = this.props;
    return (
      <div className="card">
         <div className="card-header">
    By   {author} <br></br>{publishedAt}
  </div>
        <img src={url} className="card-img-top" alt={title} style={{ height: "15rem"}}></img>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <Link to={newsurl} className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    );
  }
}

export default NewsItem;
