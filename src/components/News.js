import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    const API_URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ded5762746ac410fb14eeb2f261871ef&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    const data = await fetch(API_URL);
    const parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePageChange = async (direction) => {
    const { page, totalResults } = this.state;
    const totalPages = Math.ceil(totalResults / this.props.pageSize);
    const newPage = direction === "next" ? page + 1 : page - 1;
    if (newPage < 1 || newPage > totalPages) return;
    this.setState({ page: newPage });
    const API_URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ded5762746ac410fb14eeb2f261871ef&page=${newPage}&pageSize=${this.props.pageSize}`;
    try {
      this.setState({ loading: true });
      const response = await fetch(API_URL);
      const parsedData = await response.json();
      console.log(parsedData);
      this.setState({
        page: newPage,
        articles: parsedData.articles,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
          NewsMonkey - Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element, index) => {
              return (
                <div className="col-md-4" key={element.url || index}>
                  <NewsItem
                    title={element.title ? element.title : "No title available"}
                    description={
                      element.description
                        ? element.description
                        : "No description available"
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            onClick={() => this.handlePageChange("prev")}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={() => this.handlePageChange("next")}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
export default News;
