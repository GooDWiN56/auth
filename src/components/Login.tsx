import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form";
import { setUser } from "store/slices/userSlice";
import { useAppDispatch } from "hooks/redux-hooks";

const Login = () => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Form button="Sign In" title="Welcome back!" handleClick={handleLogin} />
  );
};

export { Login };
