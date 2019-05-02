React.createClass({
  render: function() {
    return (

      {/* Content should always be inside "article.single-post" */}
      <article className="single-post">
        <h2>Long Post Article Title in Two Lines</h2>
        <p>Quos quo quasi quae, officia harum aspernatur saepe neque eos, nobis maxime suscipit iure beatae voluptatibus illo placeat id tempore temporibus. Fugiat quos quis dignissimos hic cumque provident repellendus! Assumenda, itaque amet dolor autem quisquam illo voluptatem sed vitae tenetur repellat nulla temporibus!</p>
        <div className="row">
          <div className="col-md-6">
            <p>Alias, quis, et? Dolorum, recusandae repudiandae saepe nisi aperiam eaque porro earum voluptatibus debitis excepturi at, neque, perferendis. Neque, velit eos alias?</p>
            <p>Architecto, illum esse voluptas itaque dignissimos, possimus incidunt, culpa eius sapiente quasi ipsa nam voluptates ullam.</p>
          </div>
          <div className="col-md-6">
            <img src="img/blog/01.jpg" className="space-bottom" alt="Blog Post" />
          </div>
        </div>
        <hr />
        <div className="blog-post-meta">
          <div className="column">
            <span>by </span>
            <a href="#">Admin</a>
            <span className="divider" />
            <a href="#">May 09</a>
            <span className="divider" />
            <span>in </span>
            <a href="#">Category name</a>
            <span className="divider" />
            <a href="#">#tagname</a>
          </div>
          <div className="column">
            <a href="#">
              <i className="material-icons favorite_border" />
              7
            </a>
          </div>
        </div>{/* .blog-post-meta */}
      </article>{/* .single-post */}
    );
  }
});