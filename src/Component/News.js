import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    // console.log("hello constructor");
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f5474f19e8b5486ea82dc0a775ebe69a";
    let  data = await fetch(url);
    let  parsedData = await data.json()
    // console.log(parsedData);
    this.setState ({articles: parsedData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey</h1>
        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description?element.description.slice(0, 90):""}
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
