import React from "react";
import { Box, Grid2, Typography } from "@mui/material";
import Drawer from "../Products/components/Drawer";

const Products = () => {
  return (
    <Drawer>
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        height="100%"
      >
        <Grid2 container width="100%">
          <Grid2 item minWidth={300}>
            <Box>
              <Typography>Usúarios</Typography>
            </Box>
          </Grid2>
          <Grid2 item>
            <Box>
              <Typography>Produtos</Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Drawer>
  );
};

export default Products;
