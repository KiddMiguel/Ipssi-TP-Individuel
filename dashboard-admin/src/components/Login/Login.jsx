import React from "react";
import { Box, Button, TextField, Typography, Container, Stack, Link, Alert } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { styled } from "@mui/system";

// Style de la page
const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledBox = styled(Box)(({ theme }) => ({
  maxWidth: 400,
  width: "100%",
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
}));

const LoginPage = () => {
  return (
    <StyledContainer maxWidth="lg">
        <Box flex={1} textAlign="center" paddingRight={4}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Bonjour, Bon retour
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Plus efficacement avec des flux de travail optimisés.
          </Typography>
        </Box>

        {/* Section Droite - Formulaire */}
      <StyledBox>
        <Alert severity="info" sx={{ mb: 3 }}>
          Use <strong>demo@minimals.cc</strong> with password <strong>@demo1</strong>
        </Alert>

        <Typography variant="h5" fontWeight="bold" mb={2} textAlign="center">
          Sign in to your account
        </Typography>
        <Typography variant="body2" mb={3} textAlign="center">
          Don’t have an account? <Link href="/register" underline="hover">Get started</Link>
        </Typography>

        {/* Champs Email et Mot de Passe */}
        <Stack spacing={2} mb={2}>
          <TextField
            fullWidth
            label="Email address"
            variant="outlined"
            defaultValue="demo@minimals.cc"
            InputProps={{
              endAdornment: <EmailIcon color="action" />,
            }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            defaultValue="@demo1"
            InputProps={{
              endAdornment: <LockIcon color="action" />,
            }}
          />
        </Stack>

        {/* Lien Mot de Passe Oublié */}
        <Box textAlign="right" mb={2}>
          <Link href="#" underline="hover" color="primary">
            Forgot password?
          </Link>
        </Box>

        {/* Bouton Login */}
        <Button variant="contained" fullWidth size="large">
          Sign in
        </Button>
      </StyledBox>

      {/* Bouton d'Aide */}
      <Box position="absolute" top={16} right={16}>
        <Link href="#" underline="none" color="inherit">
          <HelpOutlineIcon /> Need help?
        </Link>
      </Box>
    </StyledContainer>
  );
};

export default LoginPage;
