import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import { DarkModeProvider } from "./context/DarkModeContext";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import "./assets/styles/common.css";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        <AuthContextProvider>
          <NavBar />
          <Outlet />
          <Footer />
        </AuthContextProvider>
      </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
