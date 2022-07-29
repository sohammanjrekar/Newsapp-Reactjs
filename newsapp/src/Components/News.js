/* eslint-disable array-callback-return */
import React, { Component } from "react";
import NewsItem from "./NewsItem";
export class News extends Component {
  constructor() {
    super();
    this.state = {
      article: this.article,
      loading: false,
    }
  }
  async componentDidMount() {
    let url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=faa4be120672496ab2d47b2a2de16ebe";
    let data = await fetch(url);
    console.log(data);
    let parseData = await data.json();
    this.setState({
      article: parseData.article,
    });
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-3">IndianNews</h1>
        <div className="row">
          {this.state.article.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : " "}
                  description={
                    element.description ? element.description.slice(0, 45) : " "
                  }
                  url={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
