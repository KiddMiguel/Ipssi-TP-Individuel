import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const TopApps = () => {
  const apps = [
    { name: "Microsoft Office 365", downloads: "9.91k", size: "9.68Mb" },
    { name: "Opera", downloads: "1.95k", size: "1.9Mb" },
    { name: "Adobe Acrobat Reader", downloads: "9.12k", size: "8.91Mb" },
  ];

  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Top Apps
      </Typography>
      <List>
        {apps.map((app) => (
          <ListItem key={app.name} divider>
            <ListItemText primary={app.name} secondary={`${app.downloads} • ${app.size}`} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TopApps;
