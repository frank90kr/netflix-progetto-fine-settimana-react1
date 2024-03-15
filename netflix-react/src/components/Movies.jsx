import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import "../styles.css";

class Movies extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    this.fetchMovies();
  }
  fetchMovies = async () => {
    const apiLink = "http://www.omdbapi.com/?i=tt3896198&apikey=8c054b3c";
    let response = await fetch(`${apiLink}&s="${this.props.title.toLowerCase()}"`);
    let moviesRequest = await response.json();
    this.setState({ movies: moviesRequest }, () => console.log(this.state.movies.Search));
  };
  render() {
    return (
      <>
        <h2 className="text-white opacity-75 fs-3 ms-3 px-1 mt-3 mb-4">{this.props.category}</h2>
        <Col xs={6} md={3} className="d-flex gap-1">
          {this.state.movies.Search &&
            this.state.movies.Search.slice(0, 8).map((movie) => <SingleMovie key={movie.imdbID} img={movie.Poster} />)}
        </Col>
      </>
    );
  }
}
export default Movies;
