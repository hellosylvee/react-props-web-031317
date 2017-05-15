const madMaxGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller']

ReactDOM.render(
  <
    MovieCard title="Mad Max: Fury Road"
    poster="http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
    genres={ madMaxGenres }
  />,
  document.getElementById('main')
);

// When using default values for props
// MovieCard.defaultProps = {
//   poster: 'http://i.imgur.com/bJw8ndW.png'
// };

// When using ES2015:
// const MovieCard = React.createClass({
//   getDefaultProps() {
//     return {
//       poster: 'http://i.imgur.com/bJw8ndW.png'
//     };
//   },
//   render() {
//   }
// })
