import React from "react";
import { Box, Typography } from "@mui/material";
import ReportIcon from "@mui/icons-material/Report";

import "./styles.css";

function NotFound() {
  return (
    <Box>
      <Box bgcolor="white" width={500} padding={5} borderRadius={5}>
        <ReportIcon fontSize="large" />
        <Typography variant="h4" mb={2}>
          NOT FOUND 404
        </Typography>
      </Box>
    </Box>
  );
}

export default NotFound;
