import { QueryClient, QueryClientProvider } from "react-query";
import { NavBar } from "./components/navBar";
import { HomePage } from "./pages";
import "./assets/fonts/fonts.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <HomePage />
    </QueryClientProvider>
  );
}

export default App;
