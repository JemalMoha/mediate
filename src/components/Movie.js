import * as React from "react";
import { Box, Heading } from "grommet";

const Movie = props => {
  return (
    <Box direction="column" pad="medium" align="center" background="light-1">
      <Heading level={3}>{props.movie.name}</Heading>
    </Box>
  );
};

export default Movie;
