import axios from "axios";

interface Program {
  title: string;
  programType: string;
  images: any;
}

interface FetchResult {
  total: number;
  entries: Array<Program>;
}

const fetchMoviesData = async ({ programType }: { programType: string }) => {
  try {
    const data: FetchResult = await axios.get(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    );

    const moviesList = data.entries.filter(
      (program) => program.programType === programType
    );

    return {
      programList: moviesList,
      error: null,
    };
  } catch (error) {
    return {
      programList: null,
      error: error,
    };
  }
};

export default fetchMoviesData;
