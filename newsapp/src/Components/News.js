import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
export class News extends Component {
static defaultProps={
  country:'in',
  pageSize:15,
  category:'general',
}
 PropTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}


  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    this.setState({loading:true})
      const response = await fetch(`https://newsapi.org/v2/top-headlines?language=en&country=${this.props.country}&category=${this.props.category}&apiKey=faa4be120672496ab2d47b2a2de16ebe&pageSize=${this.props.pageSize}&page=1`);
    
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      } else {
        const result = await response.json();
        this.setState({
          articles: result.articles,
          total: result.totalResults,
          loading:false
        });
      }
     
  }

  nextclick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.total / this.props.pageSize)) ){
      this.setState({loading:true})
      const response = await fetch(`https://newsapi.org/v2/top-headlines?language=en&country=${this.props.country}&category=${this.props.category}&apiKey=faa4be120672496ab2d47b2a2de16ebe&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`);
      
      const result = await response.json();
      this.setState({
        page: this.state.page + 1,
        articles: result.articles,
        loading:false,
      });
    }
  };

  previousclick = async () => {
    this.setState({loading:true})
    const response = await fetch(`https://newsapi.org/v2/top-headlines?language=en&country=${this.props.country}&category=${this.props.category}&apiKey=faa4be120672496ab2d47b2a2de16ebe&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`);
    const result = await response.json();
    this.setState({
      page: this.state.page - 1,
      articles: result.articles,
      loading:false
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-3">IndianNews</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
            
          {!this.state.loading && this.state.articles.map((element, index) => {
            return (
              
              <div className="col-md-4 my-3" key={index}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 43) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  url={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://assets1.cbsnewsstatic.com/hub/i/r/2022/07/29/40a4d769-c757-4cfa-bb4d-dae6261326d0/thumbnail/1200x630/700ae69599f719997322bc8c2458fe06/gettyimages-1242172582.jpg"
                  }
                  newsurl={element.url}
                  publishedAt={
                    element.publishedAt ? element.publishedAt : "Today"
                  }
                  author={element.author ? element.author.slice(0, 20) : "Source"}
                  content={element.content}
                />
              </div>
            );
          })}
        </div>

        <div
          className="btn-toolbar-lg text-center"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div
            className="btn-group btn-group-lg"
            role="group"
            aria-label="First group"
          >
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-primary btn-group-lg"
              onClick={this.previousclick}
            >
              Previous
            </button>
            <button
              disabled={this.state.page > Math.ceil(this.state.total / 20)}
              type="button"
              className="btn btn-primary btn-group-lg"
              onClick={this.nextclick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;


// <nav aria-label="Page navigation example">
//   <ul class="pagination justify-content-center">
//     <li class="page-item disabled">
//       <a class="page-link">Previous</a>
//     </li>
//     <li class="page-item"><a class="page-link" href="#">1</a></li>
//     <li class="page-item"><a class="page-link" href="#">2</a></li>
//     <li class="page-item"><a class="page-link" href="#">3</a></li>
//     <li class="page-item">
//       <a class="page-link" href="#">Next</a>
//     </li>
//   </ul>
// </nav>
