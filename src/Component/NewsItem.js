import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card my-3" style={{ width: "18rem" }}>
        <span className="badge text-bg-info">{source}</span>
          <img
            src={
              !imageUrl
                ? "http://www.pixelstalk.net/wp-content/uploads/2016/06/HD-images-of-nature-download.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">By {!author ?"Unknown": author}</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
            <div className="card-footer my-2">
              <small className="text-muted">Published on {new Date(date).toGMTString()}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
