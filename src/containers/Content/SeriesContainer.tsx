import React from "react";
import ProgramContent from "components/Content/ProgramContent";
import useFetchProgram from "hooks/useFetchProgram";

const MoviesContainer = () => {
  const { loading, error, programList } = useFetchProgram("series");

  return (
    <ProgramContent loading={loading} error={error} programList={programList} />
  );
};

export default MoviesContainer;
