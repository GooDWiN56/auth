import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { Login } from "components/Login";
import { SignUp } from "components/SignUp";
import { useState } from "react";

const SiginPage = () => {
  const color = blueGrey[100];
  const [isLogin, setIsLogin] = useState<boolean>(true);
  return (
    <Stack
      sx={{
        bgcolor: color,
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
      spacing={2}
    >
      <Card sx={{ maxWidth: "500px", width: "80%" }}>
        <CardContent sx={{ textAlign: "center" }}>
          {isLogin ? <Login /> : <SignUp />}
          <Typography variant="subtitle2">
            Or{" "}
            <Button
              sx={{ textTransform: "none" }}
              onClick={() => setIsLogin((prev: boolean) => !prev)}
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};
export default SiginPage;
