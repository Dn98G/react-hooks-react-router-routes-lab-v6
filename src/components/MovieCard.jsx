import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function MovieCard({ title, id }) {
  return (
    <article>
      <h2>{title}</h2>
      <Link to={`/movie/${id}`}>View Details</Link>
    </article>
  );
}
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default MovieCard;

