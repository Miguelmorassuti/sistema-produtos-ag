import React from "react";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { Box, Button, Link, TextField, Typography } from "@mui/material";

import "./styles.css";

function Home() {
  const schema = object().shape({
    username: string().required("Username is required"),
    password: string().required("Password is required"),
  });

  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      height="100%"
    >
      <Box bgcolor="white" width={500} padding={5} borderRadius={5}>
        <Typography variant="h4" mb={2}>
          Login
        </Typography>
        <Typography>Entre com suas credenciais</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box paddingY={2}>
            <TextField
              name="username"
              error={!!errors?.username}
              label="Nome"
              helperText={errors?.username ? errors?.username?.message : ""}
              type="email"
              // inputRef={register}
              fullWidth
            />
          </Box>
          <Box pb={2}>
            <TextField
              name="password"
              error={!!errors?.password}
              label="Senha"
              // inputRef={register}
              helperText={errors?.password ? errors?.password?.message : ""}
              type="password"
              fullWidth
            />
          </Box>
          <Button color="warning" type="submit" variant="contained" fullWidth>
            Entrar
          </Button>
          <Box pt={2}>
            <Typography>
              Esqueceu sua senha? <Link underline="hover">Clique aqui!</Link>
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Home;
