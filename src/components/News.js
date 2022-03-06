import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 12,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }
  async updatenews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=9fcbc73a1c964ecfa5e94719db844718&category=${this.props.category}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    })
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updatenews();
  }
  previousbtn = async () => {
    this.setState({
      page: this.state.page - 1
    })
    this.updatenews();
  }
  Nextbtn = async () => {

    this.setState({
      page: this.state.page + 1
    })
    this.updatenews();
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">FTATFT News - Top Headlines</h1>,
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4 my-3" key={element.url}>
              <Newsitems title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 84) : ""} imageUrl={element.urlToImage} newsurl={element.url} date={element.publishedAt} author={element.author ? element.author : "unknown"} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" onClick={this.previousbtn} className="btn btn-dark"> &larr; Previous</button>
          <button type="button" disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))} onClick={this.Nextbtn} className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
