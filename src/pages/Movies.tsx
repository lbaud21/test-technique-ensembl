import Header from "components/Header/Header";
import MoviesContainer from "containers/Content/MoviesContainer";
import Footer from "components/Footer/Footer";

const Movies = () => {
  return (
    <>
      <Header title="Popular Movies" />
      <MoviesContainer />
      <Footer />
    </>
  );
};

export default Movies;
