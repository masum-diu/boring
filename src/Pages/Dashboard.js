import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import theme from "../Components/theme";
import svg1 from "../Assets/image 1.svg";
import svg2 from "../Assets/Group.svg";
import CustomisedColl from "../Components/CustomisedColl";
import { spacing } from "@mui/system";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box
        sx={{ backgroundColor: theme.palette.background.main }}
        height="100vh"
        width={"100%"}
        p={2}
      >
        {" "}
        <Grid
          container
          spacing={2}
          color="#fff"
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Grid item>
            {" "}
            <img
              src={svg1}
              style={{ maxWidth: "173px", width: "100%", height: "80px" }}
            />
          </Grid>
          <Grid item>
            {" "}
            <Button>
              <FaUserCircle fontSize={"3rem"} color="#D6D6D6" />
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item lg={2}>
            <Stack direction={"row"} py={2} spacing={1} alignItems={"center"}>
              <Box
                sx={{
                  width: "80vw",
                  maxWidth: "195px",
                  backgroundColor: theme.palette.secondary.main,
                  // minHeight: "40px",
                  textAlign: "center",
                  padding: "1rem",
                  borderRadius: "5px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Dashboard
              </Box>
              <NotificationsIcon sx={{ color: "#fff", fontSize: "2.7rem" }} />
            </Stack>

            <List
              sx={{
                width: "100%",
                maxWidth: 239,
                bgcolor: "background.paper",
                borderRadius: "5px",
              }}
            >
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <img src={svg2} />
                </ListItemIcon>
                <ListItemText primary="Share List" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                  component="div"
                  disablePadding
                  sx={{ backgroundColor: "#333" }}
                >
                  <ListItemButton sx={{ pl: 4, color: "#fff" }}>
                    <ListItemText primary="Pending" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Picked" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Completed" />
                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary="Cancelled" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Grid>
          <Grid item lg={8}>
            <Typography variant="body1" color="#fff">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              sint saepe dolorum numquam soluta voluptatibus neque, hic
              similique tempore error blanditiis minus accusantium animi
              corporis quaerat inventore laborum dicta tempora.
            </Typography>
          </Grid>
          <Grid item lg={2}>
            <Typography variant="body1" color="#fff">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              sint saepe dolorum numquam soluta voluptatibus neque, hic
              similique tempore error blanditiis minus accusantium animi
              corporis quaerat inventore laborum dicta tempora.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
