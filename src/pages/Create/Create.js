import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Create = () => {
    return (
        <Box sx={{ width: "100%", maxWidth: 500 }}>
            <Typography
                variant="h2"
                align="center"
                color="textSecondary"
                gutterBottom
            >
                Create Notes
            </Typography>
        </Box>
    );
};

export default Create;
