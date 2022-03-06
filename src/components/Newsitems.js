import React, { Component } from "react";

export class Newsitems extends Component {
  render() {
    let { title, description, imageUrl, newsurl,date,author } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{height: "30rem"}}>
        <div style={{
          display:'flex',
          justifyContent:'flex-end',
          position:'absolute',
          right:'0'
        }}><span className=" badge rounded-pill bg-primary" style={{left: "85%" , zIndex: '1'}}> {author} </span></div>
          <img src={!imageUrl?"https://cdn.mos.cms.futurecdn.net/gudSSiiRNGZVAnEpF6bB6g-1200-80.jpeg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-danger">By {author} on {date}</small></p>
            <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;
