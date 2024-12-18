import React from "react";
import { Card, Typography, Box } from "@mui/material";

const StatCard = ({ title, value, percentage, color }) => {
  return (
    <Card sx={{ p: 2, mb: 2, display: "flex", justifyContent: "space-between", bgcolor: color }}>
      <Box>
        <Typography variant="h6" color="white">
          {title}
        </Typography>
        <Typography variant="h4" color="white">
          {value}
        </Typography>
      </Box>
      <Typography variant="h5" color="white">
        {percentage}
      </Typography>
    </Card>
  );
};

export default StatCard;
