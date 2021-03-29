import { useState, useEffect } from "react";
import axios from "axios";
import { Program, FetchResult } from "./types";

const useFetchProgram = (programType: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [programList, setProgramList] = useState<Program[]>([]);

  let cancelRequest = false;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data: FetchResult = await axios.get(
          "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
        );

        if (cancelRequest) {
          return;
        }

        setProgramList(
          data.data.entries
            .filter(
              (program) =>
                program.programType === programType &&
                program.releaseYear >= 2010
            )
            .sort((a, b) => (a.title > b.title ? 1 : -1))
            .slice(0, 21)
        );
      } catch (error) {
        if (cancelRequest) {
          return;
        }

        setLoading(false);
        setError(true);
      }
      setLoading(false);
    };

    fetchData();

    return () => (cancelRequest = true);
  }, [programType]);

  return { loading, error, programList };
};

export default useFetchProgram;
