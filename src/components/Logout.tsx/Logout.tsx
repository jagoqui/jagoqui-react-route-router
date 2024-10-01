import { useNavigate } from "react-router-dom";
import { clearLocalStorageUser, USER_LOCAL_STORAGE_KEY } from "../../utilities";
import { PublicRoutes } from "../../models";
import { useDispatch } from "react-redux";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    clearLocalStorageUser(USER_LOCAL_STORAGE_KEY);
    dispatch({ type: "resetUser" });
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  };

  return <button onClick={logout}>Logout</button>;
};
export default Logout;
