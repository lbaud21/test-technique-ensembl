import { useState, useEffect } from "react";
import axios from "axios";

interface Program {
  title: string;
  programType: string;
  images: any;
}

interface FetchResult {
  total: number;
  entries: Program[];
}

const useFetchProgram = (programType: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [programList, setProgramList] = useState<Program[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data: FetchResult = await axios.get(
          "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
        );

        setProgramList(
          data.entries.filter((program) => program.programType === programType)
        );
      } catch (error) {
        setLoading(false);
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [programType]);

  return { loading, error, programList };
};

export default useFetchProgram;
