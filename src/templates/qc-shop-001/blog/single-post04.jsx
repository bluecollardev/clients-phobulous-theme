import React, { Component } from 'react'

export default class SinglePost04 extends Component {
  render() {
    return (

      {/* Content should always be inside "article.single-post" */}
      <article className="single-post">
        <h2>Post Article Featuring Vimeo Video</h2>
        <div className="row">
          <div className="col-xs-11">
            <div className="embed-responsive embed-responsive-16by9 space-bottom">
              <iframe src="https://player.vimeo.com/video/130541695?color=77cde3&title=0&byline=0&portrait=0" />
            </div>
          </div>
        </div>
        <p>Alias, quis, et? Dolorum, recusandae repudiandae saepe nisi aperiam eaque porro earum voluptatibus debitis excepturi at, neque, perferendis. Neque, velit eos alias?</p>
        <p>Quos quo quasi quae, officia harum aspernatur saepe neque eos, nobis maxime suscipit iure beatae voluptatibus illo placeat id tempore temporibus. Fugiat quos quis dignissimos hic cumque provident repellendus! Assumenda, itaque amet dolor autem quisquam illo voluptatem sed vitae tenetur repellat nulla temporibus!</p>
        <hr />
        <div className="blog-post-meta">
          <div className="column">
            <span>by </span>
            <a href="#">Admin</a>
            <span className="divider" />
            <a href="#">Mar 21</a>
            <span className="divider" />
            <span>in </span>
            <a href="#">Category name</a>
            <span className="divider" />
            <a href="#">#tagname</a>
          </div>
          <div className="column">
            <a href="#">
              <i className="material-icons favorite_border" />
              17
            </a>
          </div>
        </div>{/* .blog-post-meta */}
      </article>{/* .single-post */}
    )
  }
}