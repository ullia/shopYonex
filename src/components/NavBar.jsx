import React from "react";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import User from "./User";
import Button from "./ui/Button";
import CartStatus from "./CartStatus";
import { useAuthContext } from "../context/AuthContext";
import { useDarkModeContext } from "../context/DarkModeContext";

export default function NavBar() {
  const { user, login, logout } = useAuthContext();
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  // const [user, setUser] = useState();

  // useEffect(() => {
  //   onUserStateChange(user => {
  //     console.log(user);
  //     setUser(user);
  //   });
  // }, []);

  // const handleLogin = () => {
  //   login().then(setUser);
  // };
  // const handleLogout = () => {
  //   logout().then(setUser);
  // };

  return (
    <div>
      <header className="flex justify-between border-b border-gray-300 p-4">
        <Link to="/" className="flex items-center text-4xl text-brand">
          <img src="/logo.jpg" alt="" />
          <h1 className="hidden">YONEX</h1>
        </Link>
        <nav className="flex items-center gap-4 font-semibold">
          <Link to="/products">products</Link>
          <button onClick={toggleDarkMode}>{darkMode ? <FaMoon /> : <MdSunny />}</button>
          {user && (
            <Link to="/carts">
              <CartStatus />
            </Link>
          )}
          {user && user.isAdmin && (
            <Link to="/products/new" className="text-2xl">
              <BsFillPencilFill />
            </Link>
          )}

          {!user ? (
            <Button text={"Login"} onClick={login} />
          ) : (
            <>
              <User user={user} />
              <Button text={"Logout"} onClick={logout} />
            </>
          )}
        </nav>
      </header>
    </div>
  );
}
