import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";
import CartStatus from "./CartStatus";

export default function NavBar() {
  const { user, login, logout } = useAuthContext();

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
