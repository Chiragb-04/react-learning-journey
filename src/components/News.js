import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    const API_URL =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=ded5762746ac410fb14eeb2f261871ef";
    const data = await fetch(API_URL);
    const parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  handlePageChange = async (direction) => {
    const { page } = this.state;
    const newPage = direction === "next" ? page + 1 : page - 1;

    if (newPage < 1) return; // prevent going below page 1

    const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=ded5762746ac410fb14eeb2f261871ef&page=${newPage}`;
    try {
      const response = await fetch(API_URL);
      const parsedData = await response.json();
      console.log(parsedData);
      this.setState({
        page: newPage,
        articles: parsedData.articles,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element, index) => {
            return (
              <div className="col-md-4" key={element.url || index}>
                <NewsItem
                  title={
                    element.title
                      ? element.title.slice(0, 50)
                      : "No title available"
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 90)
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
          <button onClick={() => this.handlePageChange("prev")}>
            &larr; Previous
          </button>
          <button onClick={() => this.handlePageChange("next")}>
            Next &rarr;{" "}
          </button>
        </div>
      </div>
    );
  }
}
export default News;
