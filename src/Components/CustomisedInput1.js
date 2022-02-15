import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
const CustomisedInput1 = styled(InputBase)(({ theme }) => ({
  //   border: "1px solid " + theme.palette.primary.light,
  //   maxWidth: "466px",
  //   width: "80vw",
  //   minHeight: "48px",
  //   borderRadius: "5px",
  //   alignItems: "center",
  //   display: "flex",
  //   boxShadow: "0px 4px 4px rgba(130, 107, 193, 0.25)",
  backgroundColor: theme.palette.body.main,
  width: "80vw",
  maxWidth: "360px",
  height: "70px",
  borderRadius: "100px",
  outline: "none",
  border: "none",
  boxShadow: "0px 0px 10px 0px",
  paddingLeft: "40px",
  fontSize: "18px",
}));
export default CustomisedInput1;
