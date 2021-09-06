import React from "react";

const Book = ({book}) => {
  return (
    <div className="book card">
      <div id="card__img" className="card__img">
        <img className="" src="https://picsum.photos/200/50" alt="Card" />
      </div>

      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p>{this.props.ali.imageLink}</p>
        <p className="card-text">{book.author}</p>
        <a href="#" className="btn btn-primary">
          {book.year}
        </a>
      </div>
    </div>
  );
};

export default Book;

// https://github.com/benoitvallon/100-best-books/blob/master/static/images/a-Dolls-house.jpg

//  "imageLink": "images/things-fall-apart.jpg",
