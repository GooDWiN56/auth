import { useAuth } from "hooks/use-auth";
import { Box, Typography } from "@mui/material";

const HomePage = () => {
  const { email, photoURL } = useAuth();
  const photo = photoURL || "";
  console.log("photoURL", photoURL);
  return (
    <>
      <Typography variant="h4">Welcome, {email}</Typography>
      <Box sx={{ display: "block", height: "1500px", bgcolor: "blue" }}></Box>
    </>
  );
};

export default HomePage;
