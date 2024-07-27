import { useAppSelector } from "./redux-hooks";

export function useAuth() {
  const { user } = useAppSelector((state) => state);
  const { email, token, id, photoURL } = useAppSelector((state) => state.user);
  return {
    isAuth: !!id,
    user,
    email,
    token,
    id,
    photoURL
  };
}
