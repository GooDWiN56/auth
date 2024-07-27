import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form";
import { setUser } from "store/slices/userSlice";
import { useAppDispatch } from "hooks/redux-hooks";

const SignUp = () => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
    <Form button="Sign Up" title="Register" handleClick={handleRegister} />
  );
};

export { SignUp };
