import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ProductTable from "./components/ProductTable";
import Drawer from "./components/Drawer";
import ProductDialog from "./components/ProductDialog";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);

  const rows = products?.map((product) => ({
    name: product?.name,
    price: product?.price,
    description: product?.description,
  }));

  return (
    <Drawer>
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        height="100%"
      >
        <Box width="80%">
          <Typography variant="h4" mb={2}>
            Produtos
          </Typography>
          <ProductTable rows={rows} />
          <Box mt={4}>
            <Button
              variant="outlined"
              color="warning"
              onClick={() => setOpenDialog(true)}
            >
              Criar Produto
            </Button>
          </Box>
        </Box>
      </Box>
      <ProductDialog open={openDialog} setOpen={setOpenDialog} />
    </Drawer>
  );
};

export default Products;
