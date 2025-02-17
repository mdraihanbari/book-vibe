import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags, category } = book;
console.log(bookId)
  return (
    <Link to={`/books/:${bookId}`}>
      <div className="card bg-base-100 gap-4 shadow-xl p-4">
        <figure className="bg-green-400 py-4">
          <img src={image} className="h-[166px] rounded-xl  " alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-3">
            {tags.map((tag, index) => (
              <button key={index} className="btn btn-xs">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By : {author}</p>

          <hr className="border border-dashed my-3" />
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-200"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Book.propTypes = {
    book: PropTypes.object
  };

export default Book;
