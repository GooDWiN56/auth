import { useAuth } from "hooks/use-auth";
import { IChildren } from "interfaces";
import MainLayout from "layouts";
import { FC } from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter: FC<IChildren> = ({ children }) => {
  const { isAuth } = useAuth();
  return isAuth ? (
    <MainLayout>{children}</MainLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRouter;
