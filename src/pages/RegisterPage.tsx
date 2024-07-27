import { Typography } from "@mui/material";
import { SignUp } from "components/SignUp";
import { NavLink } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <Typography variant="h4">Register</Typography>
      <SignUp />
      <Typography variant="subtitle2">
        Or <NavLink to="/login">Login</NavLink>
      </Typography>
    </div>
  );
};
export default RegisterPage;
