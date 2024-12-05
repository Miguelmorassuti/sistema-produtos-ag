import React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ProductDialog = ({ product = null, onUpdate, open, setOpen }) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  if (product) {
    // Preenche o formulário com os dados do produto (modo edição)
    setValue("name", product.name);
    setValue("description", product.description);
    setValue("price", product.price);
  }

  const handleClose = () => {
    setOpen(false);
    // reset();
  };

  const onSubmit = async (data) => {
    try {
      const url = product
        ? `http://localhost:3000/products/${product._id}` // Atualizar
        : "http://localhost:3000/products"; // Criar

      const method = product ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        onUpdate && onUpdate(); // Chama callback para atualizar a lista de produtos
        handleClose();
      } else {
        console.error("Failed to submit product:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{product ? "Editar Produto" : "Criar Produto"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {product
            ? "Preencha o formulário abaixo para atualizar o produto."
            : "Preencha o formulário abaixo para criar um novo produto.."}
        </DialogContentText>
        <form id="product-form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            autoFocus
            required
            margin="dense"
            label="Nome do produto"
            type="text"
            fullWidth
            variant="standard"
            {...register("name", { required: "Nome é obrigatório" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField
            required
            margin="dense"
            label="Descrição"
            type="text"
            fullWidth
            variant="standard"
            {...register("description", {
              required: "Descrição é obrigatória",
            })}
            error={!!errors.description}
            helperText={errors.description?.message}
          />
          <TextField
            required
            margin="dense"
            label="Preço"
            type="number"
            fullWidth
            variant="standard"
            {...register("price", {
              required: "Preço é obrigatório",
              valueAsNumber: true,
            })}
            error={!!errors.price}
            helperText={errors.price?.message}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" form="product-form">
          {product ? "Editar" : "Criar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductDialog;
