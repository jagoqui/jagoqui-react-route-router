import { useDispatch } from "react-redux";
import { getmorty } from "../../services/auth.service";
import { createUser, resetUser } from "../../redux/states/user";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes, Roles } from "../../models";
import { useEffect } from "react";
import { clearLocalStorageUser, USER_LOCAL_STORAGE_KEY } from "../../utilities";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearLocalStorageUser(USER_LOCAL_STORAGE_KEY);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const login = async () => {
    try {
      const result = await getmorty();
      dispatch(createUser({ ...result, rol: Roles.USER }));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Crear usuario</button>
    </div>
  );
};
export default Login;
