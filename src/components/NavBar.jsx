import React from "react";
import { Link } from "react-router-dom";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";
import { useDarkModeContext } from "../context/DarkModeContext";
import CartStatus from "./CartStatus";

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
    <>
      <header className="flex flex-col md:flex-row top-0 z-10 sticky justify-between border-b border-gray-300 p-4">
        <Link to="/" className="flex items-center text-4xl text-brand">
          <img className="w-24 md:w-[70%] shrink-0 md:w-full" src="/logo.jpg" alt="" />
          <h1 className="hidden">YONEX</h1>
        </Link>
        <nav className="flex mt-3 md:mt-0 items-center justify-between gap-4 font-semibold">
          <Link to="/products">products</Link>

          {user && (
            <Link to="/carts">
              <CartStatus />
            </Link>
          )}

          {/* {user && user.isAdmin && <Link to="/products/new">edit</Link>} */}
          {user && <Link to="/products/new">edit</Link>}

          {!user ? (
            <Button text={"Login"} onClick={login} noneStyle={true} />
          ) : (
            <>
              <User user={user} />
              <Button text={"Logout"} onClick={logout} noneStyle={true} />
            </>
          )}
          <button onClick={toggleDarkMode}>{darkMode ? <FaMoon /> : <MdSunny />}</button>
        </nav>
      </header>
    </>
  );
}
