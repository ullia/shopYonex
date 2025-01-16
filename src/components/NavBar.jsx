import React from "react";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";

export default function NavBar() {
  return (
    <div>
      <header className="flex justify-between border-b border-gray-300 p-4">
        <Link to="/" className="flex items-center text-4xl text-brand">
          <img src="/logo.jpg" alt="" />
          <h1>YONEX</h1>
        </Link>
        <nav className="flex items-center gap-4 font-semibold">
          <Link to="/products">products</Link>
          <Link to="/carts">carts</Link>
          <Link to="/products/new" className="text-2xl">
            <BsFillPencilFill />
          </Link>
          <button>Login</button>
        </nav>
      </header>
    </div>
  );
}
