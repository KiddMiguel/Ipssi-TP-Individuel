import React from "react";
// import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, Paper } from "@mui/material";
import StatCard from "../StatCard/StatCard";
import TopApps from "../TopApps/TopApps";

const Dashboard = () => {
  const columns = [
    { field: "id", headerName: "Invoice ID", width: 120 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "price", headerName: "Price", width: 120 },
    { field: "status", headerName: "Status", width: 150 },
  ];

  const rows = [
    { id: "INV-1990", category: "Android", price: "83,74 €", status: "Paid" },
    { id: "INV-1991", category: "Mac", price: "97,14 €", status: "Out of date" },
    { id: "INV-1992", category: "Windows", price: "68,71 €", status: "Progress" },
  ];

  return (
    <Box sx={{ ml: 32, p: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Dashboard
      </Typography>

      {/* Table */}
      <Paper sx={{ height: 300, mb: 2 }}>
        {/* <DataGrid rows={rows} columns={columns} pageSize={5} /> */}
      </Paper>

      {/* Stats Cards */}
      <StatCard title="Conversion" value="38,566" percentage="48%" color="#00A86B" />
      <StatCard title="Applications" value="55,566" percentage="75%" color="#007BFF" />

      {/* Top Apps */}
      <TopApps />
    </Box>
  );
};

export default Dashboard;
