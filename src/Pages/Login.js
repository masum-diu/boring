import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import svg1 from "../Assets/image 1.svg";
import theme from "../Components/theme";
import CustomisedInput1 from "../Components/CustomisedInput1";

const Login = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.extra.main,
          minHeight: "100vh",
        }}
      >
        <Grid container>
          <Grid
            item
            md={5}
            xs={12}
            py={8}
            sx={{
              backgroundColor: theme.palette.background.main,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img
              style={{
                width: "80vw",
                maxWidth: "528px",
              }}
              src={svg1}
              alt=""
            />
          </Grid>
          <Grid item md={7} bgcolor={theme.palette.body.main}>
            <Typography variant="body1" color="initial" p={8}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis provident facilis temporibus quidem consequatur
              mollitia ad fugit quia qui magni, odio magnam natus velit omnis
              similique quam eum Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Placeat, nam. Exercitationem quibusdam illum quo
              doloremque aliquam nulla quod est ad molestiae? Perspiciatis fugit
              eum quidem tempora, dolores pariatur consequatur officiis.
              deleniti architecto. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Beatae, totam! Repellat velit voluptatibus sint
              quisquam, magni tenetur excepturi non quam unde culpa explicabo
              consequatur nesciunt sunt rem omnis, voluptates corporis!
            </Typography>
          </Grid>
        </Grid>
        <Box>
          <Stack
            spacing={5}
            py={8}
            color="#fff"
            direction={"column"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomisedInput1 type="text" placeholder="Username" />
            <CustomisedInput1 type="password" placeholder="Password" />

            <Button
              variant="contained"
              color="primary"
              sx={{
                width: "80vw",
                maxWidth: "360px",
                minHeight: "70px",
                borderRadius: "100px",
                fontSize: "22px",
                color: "#989898",
              }}
            >
              Sign In
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Login;
