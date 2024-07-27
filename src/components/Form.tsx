import { FC, useState } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  TextField,
  Button,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import {
  IconEyeOff,
  IconEye,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAppDispatch } from "hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import { setUser } from "store/slices/userSlice";
import { IForm } from "interfaces";

const Form: FC<IForm> = ({ button = "Click", title, handleClick }) => {
  const styleStack = { mb: 2, alignItems: "center" };
  const styleButton = { textTransform: "none" };
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleClick(email, pass);
  };

  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            photoURL: user.photoURL,
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} sx={styleStack}>
          <img alt="Company" style={{ width: 200 }} src="./logo.png" />
          <Typography variant="h5">{title}</Typography>
          <TextField
            autoFocus
            label="E-mail"
            id="input-email"
            type="email"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
            }}
            size="small"
            sx={{ width: 250 }}
          />
          <FormControl variant="outlined" size="small" sx={{ width: 250 }}>
            <InputLabel htmlFor="input-password">Password</InputLabel>
            <OutlinedInput
              id="input-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <IconEyeOff /> : <IconEye />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              value={pass}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPass(event.target.value);
              }}
              size="small"
            />
          </FormControl>
          <Button type="submit" variant="contained" sx={styleButton}>
            {button}
          </Button>
        </Stack>
      </form>
      <Stack spacing={2} sx={styleStack}>
        <Divider sx={{ width: "100%" }}>Or continue with</Divider>
        <Button
          startIcon={<IconBrandGoogleFilled />}
          variant="contained"
          color="success"
          onClick={signInWithGoogle}
          sx={styleButton}
        >
          Sign in with Google
        </Button>
      </Stack>
    </>
  );
};

export { Form };
