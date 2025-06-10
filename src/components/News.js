import React, { Component } from "react";
import NewsItem from "./NewsItem";
// import articles from "../data/articles.json";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ded5762746ac410fb14eeb2f261871ef";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element, index) => {
            return (
              <div className="col-md-4" key={element.url || index}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 50) : "No title available"}
                  description={element.description ? element.description.slice(0, 90) : "No description available"}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
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
