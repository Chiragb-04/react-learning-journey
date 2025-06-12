import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              !imageUrl
                ? "https://gsp-image-cdn.wmsports.io/cms/prod/bleacher-report/ap_images/a6c207e337c64dd8b3b309cbb4951e1c/Steelers_Browns_Football_51151_4789x3193_(0,1).jpg?w=3800&h=2000"
                : imageUrl
            }
            className="card-img-top"
            alt="newsImage Not Fetched"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
