import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { AuthContextProvider } from "./components/context/AuthContext";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <NavBar />
        <Outlet />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
