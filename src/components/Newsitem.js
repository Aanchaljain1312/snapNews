import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date,source } = this.props;
    return (
      <div className='container my-3 '>
        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageurl ? "https://w7.pngwing.com/pngs/534/689/png-transparent-computer-icons-online-newspaper-headline-news-studio-white-text-news-thumbnail.png" : imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h6 className="card-title">{title}<span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
              {source}
            </span></h6>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsurl} target='_blank' className="btn btn-sm btn-dark ">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem