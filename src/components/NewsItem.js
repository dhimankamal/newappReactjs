import React, { Component } from 'react'

export class NewsItem extends Component {
  render () {
    let { title, desp, imageUrl, newsurl, author, date,source } = this.props
    return (
      <>
        <div className='card'>
          <span class='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
            {source}
            
          </span>
          <img src={imageUrl} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{desp}</p>
            <p className='card-text'>
              <small className='text-muted'>
                By {author ? author : 'Unknown'} on{' '}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsurl} className='btn btn-sm btn-dark'>
              Read More
            </a>
          </div>
        </div>
      </>
    )
  }
}

export default NewsItem
