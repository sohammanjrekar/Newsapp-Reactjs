import React, { Component } from "react";
export class NewsItem extends Component {
  render() {
    let { title, description,url,newsurl } = this.props;
    return (
      <div className="card" style={{ width: "25rem"}}>
        <img src={url} className="card-img-top" alt={title} style={{ height: "15rem"}}></img>
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,45)}...</h5>
          <p className="card-text">{description.slice(0,88)}...</p>
          <a href={newsurl} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
