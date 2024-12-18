import React from "react";
import { Box, Button, TextField, Typography, Container, Stack, Link, Checkbox, FormControlLabel } from "@mui/material";
import { styled } from "@mui/system";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

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

const RegisterPage = () => {
  return (
    <StyledContainer maxWidth="lg">
      {/* Section Gauche - Texte */}
      <Box flex={1} textAlign="center" paddingRight={4}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Manage the job
        </Typography>
        <Typography variant="body1" color="textSecondary">
          More effectively with optimized workflows.
        </Typography>
      </Box>

      {/* Section Droite - Formulaire */}
      <StyledBox>
        <Typography variant="h5" fontWeight="bold" mb={2} textAlign="center">
          Get started absolutely free
        </Typography>
        <Typography variant="body2" mb={3} textAlign="center">
          Already have an account? <Link href="/login" underline="hover">Get started</Link>
        </Typography>

        {/* Champs Prénom, Nom, Email et Mot de Passe */}
        <Stack spacing={2} mb={2}>
          <Stack direction="row" spacing={2}>
            <TextField fullWidth label="First name" variant="outlined" />
            <TextField fullWidth label="Last name" variant="outlined" />
          </Stack>
          <TextField fullWidth label="Email address" variant="outlined" />
          <TextField fullWidth label="Password" type="password" variant="outlined" placeholder="6+ characters" />
        </Stack>

        {/* Bouton Register */}
        <Button variant="contained" fullWidth size="large" sx={{ mb: 2 }}>
          Create account
        </Button>

        {/* Conditions */}
        <Typography variant="caption" textAlign="center" display="block">
          By signing up, I agree to <Link href="#" underline="hover">Terms of service</Link> and <Link href="#" underline="hover">Privacy policy</Link>.
        </Typography>
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

export default RegisterPage;
